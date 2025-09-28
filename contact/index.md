---
layout: default
title: "Contact"
description: "Start a conversation with Etterby Analytics about analytics, experimentation, or forecasting engagements."
---
{% capture contact_intro %}
  <div class="max-w-2xl space-y-3">
    <h1 class="text-3xl md:text-4xl font-semibold">Contact</h1>
    <p class="opacity-90 text-sm">Carlisle based sessions are available across Cumbria, with remote support prioritising UK teams while staying open to select global partners.</p>
  </div>
{% endcapture %}

{% capture contact_form %}
  <form action="https://formspree.io/f/xovkjwgg" method="POST" class="grid md:grid-cols-2 gap-4">
    <input type="text" name="name" placeholder="Name" class="bg-white border border-brandblack/10 dark:bg-brandblack/70 dark:border-white/20 rounded-lg px-4 py-3 focus:border-brandblue focus:outline-none transition" required>
    <input type="email" name="email" placeholder="Work email" class="bg-white border border-brandblack/10 dark:bg-brandblack/70 dark:border-white/20 rounded-lg px-4 py-3 focus:border-brandblue focus:outline-none transition" required>
    <input type="text" name="company" placeholder="Company" class="bg-white border border-brandblack/10 dark:bg-brandblack/70 dark:border-white/20 rounded-lg px-4 py-3 md:col-span-2 focus:border-brandblue focus:outline-none transition">
    <textarea name="message" placeholder="What do you need?" class="bg-white border border-brandblack/10 dark:bg-brandblack/70 dark:border-white/20 rounded-lg px-4 py-3 md:col-span-2 focus:border-brandblue focus:outline-none transition" rows="5" required></textarea>
    <button type="submit" class="bg-brandyellow text-brandblack font-semibold rounded-xl px-6 py-3 md:col-span-2">Send</button>
  </form>
{% endcapture %}

{% capture contact_section %}
  <div class="space-y-6">
    {{ contact_intro }}
    {% capture form_panel %}
      <div class="space-y-6">
        {{ contact_form }}
        <ul class="text-sm opacity-80 space-y-1">
          <li>Replies land within two working days, often sooner.</li>
          <li>Initial calls cover goals, current analytics setup, and next steps.</li>
          <li>Bring any recent dashboards or KPIs you’d like to discuss.</li>
        </ul>
        <p class="text-xs opacity-70">Or email <a href="mailto:hello@etterby.com" class="underline">hello@etterby.com</a></p>
      </div>
    {% endcapture %}
    {% include panel.html tone="ink" class="space-y-6 max-w-3xl" content=form_panel %}
    {% capture linkedin_panel %}
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div class="space-y-1">
          <p class="font-medium text-brandblack/90 dark:text-white/90">Connect on LinkedIn</p>
          <p class="text-sm text-brandblack/60 dark:text-white/60">Stay up to date with analytics insights and contact the Etterby Analytics team.</p>
        </div>
        <a href="https://www.linkedin.com/company/etterby-analytics/" class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-brandblack/20 text-brandblack/80 hover:text-brandblue dark:border-white/20 dark:text-white/80 dark:hover:text-white transition" target="_blank" rel="noopener">
          <span>View profile</span>
        </a>
      </div>
    {% endcapture %}
    {% include panel.html tone="outline" class="max-w-3xl" content=linkedin_panel %}
  </div>
{% endcapture %}
{% include section.html tone="plain" padding="py-16" content=contact_section %}
