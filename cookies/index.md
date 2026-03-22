---
layout: default
title: "Cookie Policy"
description: "How Etterby Analytics uses cookies, including optional Google Analytics cookies."
permalink: /cookies/
---
{% capture cookies_content %}
  <div class="space-y-6">
    <div class="space-y-3">
      <h1 class="text-3xl font-semibold">Cookie Policy</h1>
      <p class="text-sm opacity-75">Last updated: {{ site.data.legal.cookie_policy_last_updated | date: "%d %B %Y" }}</p>
      <p class="opacity-90">This policy explains how cookies and similar storage technologies are used on the Etterby Analytics website.</p>
    </div>

    <div class="space-y-3">
      <h2 class="text-xl font-semibold">What cookies and storage technologies are</h2>
      <p class="opacity-90">Cookies are small text files stored in your browser. Similar storage technologies, such as localStorage, can also remember settings on your device. They help websites remember choices and understand broad usage patterns.</p>
    </div>

    <div class="space-y-3">
      <h2 class="text-xl font-semibold">Cookie categories used on this site</h2>
      <div class="space-y-2">
        <p class="opacity-90"><span class="font-semibold">Strictly necessary:</span> used to remember your cookie preference. These are needed so your preference is respected across visits.</p>
        <p class="opacity-90"><span class="font-semibold">Analytics (Google Analytics 4):</span> optional cookies used only if you explicitly consent.</p>
      </div>
    </div>

    <div class="space-y-3">
      <h2 class="text-xl font-semibold">Analytics is optional</h2>
      <p class="opacity-90">Google Analytics 4 does not load unless you choose <span class="font-semibold">Accept analytics</span>. If you reject analytics, GA4 remains blocked.</p>
    </div>

    <div class="space-y-3">
      <h2 class="text-xl font-semibold">How GA4 is used here</h2>
      <ul class="space-y-2 opacity-90">
        <li>• understanding page visits</li>
        <li>• understanding high-level site usage</li>
        <li>• improving the website and content</li>
      </ul>
    </div>

    <div class="space-y-3">
      <h2 class="text-xl font-semibold">Your choices and controls</h2>
      <p class="opacity-90">On first visit, the cookie banner lets you accept or reject analytics cookies. You can reopen controls later using the <button type="button" data-cookie-settings-open class="underline">Cookie settings</button> control in the footer and change your choice at any time.</p>
    </div>

    <div class="space-y-3">
      <h2 class="text-xl font-semibold">Known cookies and storage items</h2>
      <div class="overflow-x-auto rounded-xl border border-brandblack/15 dark:border-white/15">
        <table class="w-full min-w-[720px] text-sm">
          <thead class="bg-brandblack/5 dark:bg-white/5">
            <tr>
              <th scope="col" class="px-3 py-2 text-left font-semibold">Name</th>
              <th scope="col" class="px-3 py-2 text-left font-semibold">Provider</th>
              <th scope="col" class="px-3 py-2 text-left font-semibold">Purpose</th>
              <th scope="col" class="px-3 py-2 text-left font-semibold">Duration</th>
              <th scope="col" class="px-3 py-2 text-left font-semibold">Category</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-brandblack/10 dark:border-white/10">
              <td class="px-3 py-2"><code>etterby_cookie_consent</code></td>
              <td class="px-3 py-2">Etterby Analytics Ltd</td>
              <td class="px-3 py-2">Stores your analytics consent choice.</td>
              <td class="px-3 py-2">1 year</td>
              <td class="px-3 py-2">Strictly necessary</td>
            </tr>
            <tr class="border-t border-brandblack/10 dark:border-white/10">
              <td class="px-3 py-2"><code>etterby_cookie_consent_v1</code> (localStorage)</td>
              <td class="px-3 py-2">Etterby Analytics Ltd</td>
              <td class="px-3 py-2">Stores your analytics consent choice in browser storage.</td>
              <td class="px-3 py-2">Until cleared by browser/user</td>
              <td class="px-3 py-2">Strictly necessary</td>
            </tr>
            <tr class="border-t border-brandblack/10 dark:border-white/10">
              <td class="px-3 py-2"><code>preferred-theme</code> (localStorage)</td>
              <td class="px-3 py-2">Etterby Analytics Ltd</td>
              <td class="px-3 py-2">Remembers your light or dark theme preference.</td>
              <td class="px-3 py-2">Until cleared by browser/user</td>
              <td class="px-3 py-2">Strictly necessary</td>
            </tr>
            <tr class="border-t border-brandblack/10 dark:border-white/10">
              <td class="px-3 py-2"><code>_ga</code>, <code>_ga_*</code>, <code>_gid</code>, <code>_gat</code> where applicable</td>
              <td class="px-3 py-2">Google</td>
              <td class="px-3 py-2">Supports aggregated analytics measurement when consent is given.</td>
              <td class="px-3 py-2">TODO: confirm exact cookie names and durations from production browser session.</td>
              <td class="px-3 py-2">Analytics (optional)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="space-y-3">
      <h2 class="text-xl font-semibold">More information</h2>
      <p class="opacity-90">For more on personal data handling, see the <a href="/privacy/" class="underline">Privacy Policy</a>. For cookie questions, email <a href="mailto:hello@etterby.com" class="underline">hello@etterby.com</a>.</p>
    </div>
  </div>
{% endcapture %}
{% include section.html tone="frost" padding="py-16" container_class="max-w-3xl mx-auto px-6" content=cookies_content %}
