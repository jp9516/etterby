---
layout: default
title: "Privacy Policy"
description: "How Etterby Analytics handles personal data submitted through the website."
permalink: /privacy/
---
{% assign company = site.company %}

{% capture privacy_hero %}
  <div class="max-w-3xl space-y-4">
    <h1 class="text-3xl md:text-4xl font-semibold">Privacy Policy</h1>
    <p class="text-sm opacity-75">Last updated: {{ site.data.legal.privacy_policy_last_updated | default: site.data.legal.cookie_policy_last_updated | date: "%d %B %Y" }}</p>
    <p class="opacity-90">This notice explains how Etterby Analytics Ltd handles personal data when you use this website.</p>
  </div>
{% endcapture %}
{% include section.html tone="plain" padding="py-16" content=privacy_hero %}

{% capture privacy_content %}
  <div class="max-w-3xl space-y-8">
    <div class="space-y-2">
      <h2 class="text-xl md:text-2xl font-semibold">Who controls your data</h2>
      <p class="opacity-90"><span class="font-semibold">Data controller:</span> {{ company.legal_name | default: company.name }}</p>
      <p class="opacity-90"><span class="font-semibold">Contact email:</span> <a class="underline" href="mailto:{{ company.email }}">{{ company.email }}</a></p>
    </div>

    <div class="space-y-2">
      <h2 class="text-xl md:text-2xl font-semibold">What data we collect</h2>
      <ul class="space-y-2 opacity-90">
        <li>• If you accept analytics cookies, Google Analytics 4 may collect high-level usage information such as page visits and broad browser/device data.</li>
        <li>• If you submit the contact form, we collect the details you provide: name, work email, company, and message.</li>
        <li>• If you email us directly, we collect the information in your email and the basic metadata needed to reply.</li>
      </ul>
    </div>

    <div class="space-y-2">
      <h2 class="text-xl md:text-2xl font-semibold">Why we use this data</h2>
      <ul class="space-y-2 opacity-90">
        <li>• To respond to enquiries and arrange follow-up discussions.</li>
        <li>• To assess whether our services are a fit and prepare proposals when requested.</li>
        <li>• To understand high-level website usage and improve pages and content, where analytics consent is given.</li>
      </ul>
    </div>

    <div class="space-y-2">
      <h2 class="text-xl md:text-2xl font-semibold">Lawful basis</h2>
      <ul class="space-y-2 opacity-90">
        <li>• <span class="font-semibold">Consent:</span> for analytics cookies and GA4 tracking. You can withdraw consent at any time via Cookie settings.</li>
        <li>• <span class="font-semibold">Steps prior to contract and legitimate interests:</span> for handling business enquiries and communications related to potential consultancy engagements.</li>
      </ul>
    </div>

    <div class="space-y-2">
      <h2 class="text-xl md:text-2xl font-semibold">Who we share data with</h2>
      <ul class="space-y-2 opacity-90">
        <li>• <span class="font-semibold">Formspree:</span> processes contact form submissions on our behalf.</li>
        <li>• <span class="font-semibold">Google Analytics (Google):</span> processes analytics data only when you accept analytics cookies.</li>
        <li>• <span class="font-semibold">Email provider:</span> direct email enquiries are processed by our business email provider. TODO: add provider name (manual confirmation required).</li>
      </ul>
      <p class="opacity-90">We do not sell your personal data.</p>
    </div>

    <div class="space-y-2">
      <h2 class="text-xl md:text-2xl font-semibold">Retention</h2>
      <p class="opacity-90">Cookie preference data is stored in a first-party cookie for 1 year and in local browser storage until cleared.</p>
      <p class="opacity-90">TODO: add and confirm retention periods for enquiry data and analytics reporting data (manual legal/business review required).</p>
    </div>

    <div class="space-y-2">
      <h2 class="text-xl md:text-2xl font-semibold">Your rights</h2>
      <p class="opacity-90">You can ask us to provide access to your data, correct inaccurate data, erase data, restrict processing, object to processing, and provide portability where applicable. You can also withdraw analytics consent at any time.</p>
      <p class="opacity-90">To exercise your rights, email <a class="underline" href="mailto:{{ company.email }}">{{ company.email }}</a>.</p>
    </div>

    <div class="space-y-2">
      <h2 class="text-xl md:text-2xl font-semibold">Complaints</h2>
      <p class="opacity-90">If you are not satisfied with how we handle personal data, you can complain to the UK Information Commissioner's Office (ICO): <a class="underline" href="https://ico.org.uk/make-a-complaint/">ico.org.uk/make-a-complaint</a>.</p>
    </div>

    <div class="space-y-2">
      <h2 class="text-xl md:text-2xl font-semibold">Cookie choices</h2>
      <p class="opacity-90">For more detail, see our <a class="underline" href="/cookies/">Cookie Policy</a>. You can accept, reject, or change analytics consent at any time using the <button type="button" data-cookie-settings-open class="underline">Cookie settings</button> control in the footer.</p>
    </div>
  </div>
{% endcapture %}
{% include section.html tone="frost" padding="py-16" content=privacy_content %}
