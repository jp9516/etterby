
---
layout: default
title: "Contact"
description: "Start a conversation with James Pearson about analytics, experimentation, or forecasting engagements."
---
{% capture contact_intro %}
  <div class="max-w-2xl space-y-3">
    <h1 class="text-3xl md:text-4xl font-semibold">Contact</h1>
    <p class="opacity-90 text-sm">Usually replies within 24h. UK/EU friendly.</p>
  </div>
{% endcapture %}

{% capture contact_form %}
  <form action="https://formspree.io/f/your-id" method="POST" class="grid md:grid-cols-2 gap-4">
    <input type="text" name="name" placeholder="Name" class="bg-brandblack/70 border border-white/20 rounded-lg px-4 py-3 focus:border-brandblue focus:outline-none" required>
    <input type="email" name="email" placeholder="Work email" class="bg-brandblack/70 border border-white/20 rounded-lg px-4 py-3 focus:border-brandblue focus:outline-none" required>
    <input type="text" name="company" placeholder="Company" class="bg-brandblack/70 border border-white/20 rounded-lg px-4 py-3 md:col-span-2 focus:border-brandblue focus:outline-none">
    <textarea name="message" placeholder="What do you need?" class="bg-brandblack/70 border border-white/20 rounded-lg px-4 py-3 md:col-span-2 focus:border-brandblue focus:outline-none" rows="5" required></textarea>
    <button type="submit" class="bg-brandyellow text-brandblack font-semibold rounded-xl px-6 py-3 md:col-span-2">Send</button>
  </form>
{% endcapture %}

{% capture contact_section %}
  <div class="space-y-6">
    {{ contact_intro }}
    {% capture form_panel %}
      <div class="space-y-6">
        {{ contact_form }}
        <p class="text-xs opacity-70">Or email <a href="mailto:hello@etterby.com" class="underline">hello@etterby.com</a></p>
      </div>
    {% endcapture %}
    {% include panel.html tone="ink" class="space-y-6 max-w-3xl" content=form_panel %}
  </div>
{% endcapture %}
{% include section.html tone="plain" padding="py-16" content=contact_section %}
