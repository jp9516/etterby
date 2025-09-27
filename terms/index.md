
---
title: "Terms & Conditions"
description: "Website terms for Etterby Analytics covering use of content, engagements, and limitations of liability."
---
{% capture terms_content %}
  <div class="space-y-6">
    <div class="space-y-3">
      <h1 class="text-3xl font-semibold">Website Terms</h1>
      <p class="opacity-90">Etterby Analytics Ltd operates this site to share information about consultancy services delivered by the Etterby Analytics team. By using the site you agree to these terms. If you do not agree, please discontinue use.</p>
    </div>

    <div class="space-y-3">
      <h2 class="text-xl font-semibold">Use of content</h2>
      <p class="opacity-90">All articles, case studies, and materials on this site are provided for general information. They do not constitute professional advice or a guarantee of results. You may reference content for internal, non-commercial purposes provided attribution is retained. Copying or distributing content for commercial gain requires written permission.</p>
    </div>

    <div class="space-y-3">
      <h2 class="text-xl font-semibold">Engagements and proposals</h2>
      <p class="opacity-90">Any proposal, statement of work, or master services agreement issued by Etterby Analytics supersedes the general information on this site. Fees, deliverables, and timelines are confirmed in writing for each engagement. The consultancy reserves the right to decline projects that present conflicts of interest or exceed available capacity.</p>
    </div>

    <div class="space-y-3">
      <h2 class="text-xl font-semibold">Client responsibilities</h2>
      <p class="opacity-90">Clients remain responsible for providing timely access to data, systems, and stakeholders required to complete the work. Each client is also accountable for ensuring they have the rights to share data with Etterby Analytics and for acting on the recommendations delivered.</p>
    </div>

    <div class="space-y-3">
      <h2 class="text-xl font-semibold">Confidentiality & data protection</h2>
      <p class="opacity-90">Etterby Analytics treats all client materials as confidential and uses them solely for the agreed engagement. Mutual non-disclosure agreements can be executed on request. Personal data is handled in line with the <a class="underline" href="/privacy/">Privacy Policy</a>.</p>
    </div>

    <div class="space-y-3">
      <h2 class="text-xl font-semibold">Liability</h2>
      <p class="opacity-90">To the fullest extent permitted by law, Etterby Analytics excludes liability for indirect, special, or consequential losses arising from use of this site. Direct losses arising from paid engagements are limited to the fees paid for the relevant services unless a separate contract states otherwise.</p>
    </div>

    <div class="space-y-3">
      <h2 class="text-xl font-semibold">Third-party links</h2>
      <p class="opacity-90">Links to external sites are provided for convenience only. Etterby Analytics does not endorse or accept responsibility for third-party content or practices.</p>
    </div>

    <div class="space-y-3">
      <h2 class="text-xl font-semibold">Governing law</h2>
      <p class="opacity-90">These terms are governed by the laws of England and Wales. Disputes will be subject to the exclusive jurisdiction of the English courts.</p>
    </div>

    <p class="opacity-90">© {{ site.time | date: "%Y" }} Etterby Analytics Ltd. All rights reserved.</p>
  </div>
{% endcapture %}
{% include section.html tone="frost" padding="py-16" container_class="max-w-3xl mx-auto px-6" content=terms_content %}
