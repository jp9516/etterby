(function () {
  const STORAGE_KEY = "etterby_cookie_consent_v1";
  const COOKIE_NAME = "etterby_cookie_consent";
  const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
  const root = document.getElementById("cookieConsentRoot");

  if (!root) {
    return;
  }

  const html = document.documentElement;
  const measurementId = (html.dataset.gaMeasurementId || "").trim();
  const manageCopy = root.querySelector("[data-cookie-manage-copy]");
  const statusTargets = root.querySelectorAll("[data-cookie-status]");
  const actionButtons = root.querySelectorAll("[data-cookie-action]");
  const openButtons = document.querySelectorAll("[data-cookie-settings-open]");
  let gaLoaded = false;

  const canUseStorage = (() => {
    try {
      const testKey = "__etterby_cookie_test__";
      window.localStorage.setItem(testKey, "1");
      window.localStorage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  })();

  const parseConsent = (rawValue) => {
    if (!rawValue) {
      return null;
    }

    try {
      const parsed = JSON.parse(rawValue);
      if (parsed && typeof parsed.analytics === "boolean") {
        return { analytics: parsed.analytics };
      }
    } catch (error) {
      if (rawValue === "accepted") {
        return { analytics: true };
      }
      if (rawValue === "rejected") {
        return { analytics: false };
      }
    }

    return null;
  };

  const readCookie = (name) => {
    const prefix = name + "=";
    const pairs = document.cookie ? document.cookie.split(";") : [];
    for (let index = 0; index < pairs.length; index += 1) {
      const entry = pairs[index].trim();
      if (entry.indexOf(prefix) === 0) {
        return decodeURIComponent(entry.slice(prefix.length));
      }
    }
    return null;
  };

  const writeCookie = (name, value) => {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie =
      name +
      "=" +
      encodeURIComponent(value) +
      "; Max-Age=" +
      COOKIE_MAX_AGE +
      "; Path=/; SameSite=Lax" +
      secure;
  };

  const deleteCookie = (name) => {
    const expires = "Thu, 01 Jan 1970 00:00:00 GMT";
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    const host = window.location.hostname;
    const segments = host.split(".");
    const domains = [host];

    if (segments.length >= 2) {
      domains.push("." + segments.slice(-2).join("."));
    }

    document.cookie = name + "=; Expires=" + expires + "; Path=/; SameSite=Lax" + secure;
    domains.forEach((domain) => {
      document.cookie =
        name +
        "=; Expires=" +
        expires +
        "; Path=/; Domain=" +
        domain +
        "; SameSite=Lax" +
        secure;
    });
  };

  const getStoredConsent = () => {
    let consent = null;

    if (canUseStorage) {
      consent = parseConsent(window.localStorage.getItem(STORAGE_KEY));
    }

    if (!consent) {
      consent = parseConsent(readCookie(COOKIE_NAME));
      if (consent && canUseStorage) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
      }
    }

    return consent;
  };

  const saveConsent = (analyticsEnabled) => {
    const consent = {
      analytics: Boolean(analyticsEnabled),
      updatedAt: new Date().toISOString(),
    };
    const serialized = JSON.stringify(consent);

    if (canUseStorage) {
      window.localStorage.setItem(STORAGE_KEY, serialized);
    }

    writeCookie(COOKIE_NAME, serialized);
    return consent;
  };

  const updateStatusText = (consent) => {
    const status = consent && consent.analytics ? "on" : "off";
    statusTargets.forEach((node) => {
      node.textContent = status;
    });
  };

  const openBanner = (showManageState) => {
    root.classList.remove("hidden");
    if (manageCopy) {
      manageCopy.classList.toggle("hidden", !showManageState);
    }
  };

  const closeBanner = () => {
    root.classList.add("hidden");
    if (manageCopy) {
      manageCopy.classList.add("hidden");
    }
  };

  const clearAnalyticsCookies = () => {
    const cookieNames = document.cookie
      .split(";")
      .map((item) => item.trim().split("=")[0])
      .filter((name) => name);

    cookieNames.forEach((cookieName) => {
      if (cookieName === "_ga" || cookieName === "_gid" || cookieName === "_gat" || cookieName.indexOf("_ga_") === 0) {
        deleteCookie(cookieName);
      }
    });
  };

  const ensureGtag = () => {
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag !== "function") {
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
    }
  };

  const blockAnalytics = () => {
    if (!measurementId) {
      return;
    }

    window["ga-disable-" + measurementId] = true;
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", { analytics_storage: "denied" });
    }
    clearAnalyticsCookies();
  };

  const loadAnalytics = () => {
    if (!measurementId) {
      return;
    }

    ensureGtag();
    window["ga-disable-" + measurementId] = false;
    window.gtag("consent", "update", { analytics_storage: "granted" });

    if (!gaLoaded) {
      const script = document.createElement("script");
      script.async = true;
      script.id = "ga4-script";
      script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
      document.head.appendChild(script);

      window.gtag("js", new Date());
      window.gtag("config", measurementId);
      gaLoaded = true;
    }
  };

  const applyConsent = (consent) => {
    updateStatusText(consent);
    if (consent && consent.analytics === true) {
      loadAnalytics();
      return;
    }
    blockAnalytics();
  };

  const handleAction = (action) => {
    if (action === "manage") {
      openBanner(true);
      return;
    }

    if (action === "accept") {
      applyConsent(saveConsent(true));
      closeBanner();
      return;
    }

    if (action === "reject") {
      applyConsent(saveConsent(false));
      closeBanner();
    }
  };

  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      handleAction(button.dataset.cookieAction);
    });
  });

  openButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      updateStatusText(getStoredConsent());
      openBanner(true);
    });
  });

  const initialConsent = getStoredConsent();
  if (!initialConsent) {
    updateStatusText({ analytics: false });
    blockAnalytics();
    openBanner(false);
    return;
  }

  applyConsent(initialConsent);
})();
