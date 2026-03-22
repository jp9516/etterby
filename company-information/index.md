---
layout: default
title: "Company Information"
description: "Statutory company information for Etterby Analytics Ltd."
permalink: /company-information/
---
{% assign company = site.company %}

{% capture company_info_hero %}
  <div class="max-w-3xl space-y-4">
    <h1 class="text-3xl md:text-4xl font-semibold">Company Information</h1>
    <p class="opacity-90">Statutory company details for {{ company.legal_name | default: company.name }}.</p>
  </div>
{% endcapture %}
{% include section.html tone="plain" padding="py-16" content=company_info_hero %}

{% capture company_info_content %}
  <div class="max-w-3xl space-y-4">
    {% if company.legal_name and company.registration_number and company.registered_in and company.registered_office %}
      <p class="opacity-90">{{ company.legal_name }} is registered in {{ company.registered_in }} (Company No. {{ company.registration_number }}). Registered office: {{ company.registered_office }}.</p>
    {% else %}
      <p class="opacity-90">Company details are being updated.</p>
    {% endif %}
  </div>
{% endcapture %}
{% include section.html tone="frost" padding="py-16" content=company_info_content %}
