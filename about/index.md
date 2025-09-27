---
layout: default
title: "About"
description: "Learn how Etterby Analytics operates, the founder-led principles behind the consultancy, and the outcomes delivered for product and operations teams."
---
{% assign page_content = site.data.about_page %}
{% capture about_hero %}
  <div class="max-w-3xl space-y-4">
    <p class="text-xs uppercase tracking-wide opacity-70">{{ page_content.hero.eyebrow }}</p>
    <h1 class="text-3xl md:text-4xl font-semibold">{{ page_content.hero.title }}</h1>
    {% for paragraph in page_content.hero.description %}
      <p class="opacity-90">{{ paragraph }}</p>
    {% endfor %}
  </div>
{% endcapture %}
{% include section.html tone="plain" padding="py-16" content=about_hero %}

{% capture story_block %}
  <div class="max-w-3xl space-y-4">
    <h2 class="text-2xl font-semibold">{{ page_content.story.title }}</h2>
    {% for paragraph in page_content.story.paragraphs %}
      <p class="opacity-90">{{ paragraph }}</p>
    {% endfor %}
  </div>
{% endcapture %}
{% include section.html tone="frost" padding="py-12" content=story_block %}

{% capture about_profile %}
  <div class="grid md:grid-cols-[2fr,1fr] gap-8 items-start">
    <div class="space-y-6">
      {% capture profile_panel %}
        <div class="space-y-3">
          <h2 class="text-2xl font-semibold">{{ page_content.profile.title }}</h2>
          <p class="text-sm uppercase tracking-wide text-brandblack/70 dark:text-white/70">{{ page_content.profile.name }}</p>
          <ul class="space-y-3 text-sm opacity-90">
            {% for item in page_content.profile.bio %}
              <li>• {{ item }}</li>
            {% endfor %}
          </ul>
        </div>
      {% endcapture %}
      {% include panel.html tone="ink" class="space-y-4" content=profile_panel %}

      {% capture values_panel %}
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">{{ page_content.values.title }}</h2>
          <div class="grid md:grid-cols-2 gap-4">
            {% for value in page_content.values.items %}
              {% capture value_block %}
                <div class="space-y-2">
                  <h3 class="font-semibold">{{ value.title }}</h3>
                  <p class="text-sm opacity-90">{{ value.detail }}</p>
                </div>
              {% endcapture %}
              {% include panel.html tone="frost" padding="p-4" content=value_block %}
            {% endfor %}
          </div>
        </div>
      {% endcapture %}
      {% include panel.html tone="frost" class="space-y-4" content=values_panel %}
    </div>

    <aside class="space-y-6">
      {% capture credentials_panel %}
        <div class="space-y-3">
          <h2 class="text-lg font-semibold">{{ page_content.credentials.title }}</h2>
          <ul class="space-y-2 text-sm opacity-80">
            {% for item in page_content.credentials.items %}
              <li>• {{ item }}</li>
            {% endfor %}
          </ul>
        </div>
      {% endcapture %}
      {% include panel.html tone="frost" class="space-y-3" content=credentials_panel %}

      {% capture contact_panel %}
        <div class="space-y-3 text-center">
          <h2 class="text-lg font-semibold">Ready to collaborate?</h2>
          <p class="text-sm text-brandblack/70 dark:text-white/70">Discuss your analytics roadmap and the momentum Etterby Analytics can unlock.</p>
          <a href="{{ page_content.contact_cta.url }}" class="inline-flex items-center justify-center rounded-full bg-brandblue px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brandblue/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandblue/40">{{ page_content.contact_cta.label }}</a>
        </div>
      {% endcapture %}
      {% include panel.html tone="solid" class="space-y-3" content=contact_panel %}
    </aside>
  </div>
{% endcapture %}
{% include section.html tone="plain" content=about_profile %}
