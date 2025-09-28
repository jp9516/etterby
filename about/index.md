---
layout: default
title: "About"
description: "Learn how Etterby Analytics operates, the founder led principles behind the consultancy, and the outcomes delivered for product and operations teams."
---
{% assign page_content = site.data.about_page %}

{% capture about_hero %}
  <div class="max-w-3xl space-y-6 text-balance">
    <p class="text-xs uppercase tracking-[0.2em] opacity-70">{{ page_content.hero.eyebrow }}</p>
    <h1 class="text-3xl md:text-5xl font-semibold leading-tight">{{ page_content.hero.title }}</h1>
    {% for paragraph in page_content.hero.description %}
      <p class="text-base md:text-lg opacity-90">{{ paragraph }}</p>
    {% endfor %}
  </div>
{% endcapture %}
{% include section.html tone="plain" padding="py-20" content=about_hero %}

{% capture about_story %}
  <div class="max-w-3xl space-y-8">
    {% for paragraph in page_content.narrative.intro %}
      <p class="text-base md:text-lg opacity-90">{{ paragraph }}</p>
    {% endfor %}
    <div class="space-y-8">
      {% for section in page_content.narrative.sections %}
        <div class="space-y-3">
          <h2 class="text-xl md:text-2xl font-semibold">{{ section.title }}</h2>
          {% for paragraph in section.body %}
            <p class="opacity-80">{{ paragraph }}</p>
          {% endfor %}
        </div>
      {% endfor %}
    </div>
  </div>
{% endcapture %}
{% include section.html tone="frost" padding="py-16" content=about_story %}

{% capture about_pillars %}
  <div class="max-w-4xl space-y-6">
    <h2 class="text-2xl font-semibold">{{ page_content.pillars.title }}</h2>
    <div class="grid gap-6 md:grid-cols-3">
      {% for pillar in page_content.pillars.items %}
        {% capture pillar_block %}
          <div class="space-y-3">
            <h3 class="text-lg font-semibold">{{ pillar.title }}</h3>
            <p class="text-sm md:text-base opacity-80">{{ pillar.description }}</p>
          </div>
        {% endcapture %}
        {% include panel.html tone="frost" padding="p-6" content=pillar_block %}
      {% endfor %}
    </div>
  </div>
{% endcapture %}
{% include section.html tone="plain" padding="py-16" content=about_pillars %}

{% capture about_proof %}
  <div class="max-w-3xl space-y-6">
    <h2 class="text-2xl font-semibold">{{ page_content.proof.title }}</h2>
    <ul class="space-y-4">
      {% for point in page_content.proof.points %}
        <li class="flex gap-3 text-sm md:text-base opacity-90">
          <span class="mt-2 h-2 w-2 rounded-full bg-brandblue"></span>
          <span>{{ point }}</span>
        </li>
      {% endfor %}
    </ul>
  </div>
{% endcapture %}
{% include section.html tone="ink" padding="py-16" content=about_proof %}

{% capture about_quote %}
  <figure class="mx-auto max-w-3xl space-y-4 text-center">
    <blockquote class="text-xl md:text-2xl font-medium leading-relaxed">“{{ page_content.founder_quote.quote }}”</blockquote>
    <figcaption class="text-xs uppercase tracking-[0.2em] text-brandblack/70 dark:text-white/70">{{ page_content.founder_quote.name }}</figcaption>
  </figure>
{% endcapture %}
{% include section.html tone="plain" padding="py-14" content=about_quote %}

{% capture about_cta %}
  <div class="max-w-2xl space-y-4 text-center mx-auto">
    <h2 class="text-2xl font-semibold">{{ page_content.cta.title }}</h2>
    <p class="text-sm md:text-base opacity-80">{{ page_content.cta.description }}</p>
    <a href="{{ page_content.cta.url }}" class="inline-flex items-center justify-center rounded-full bg-brandblue px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brandblue/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandblue/40">{{ page_content.cta.label }}</a>
  </div>
{% endcapture %}
{% include section.html tone="frost" padding="py-16" content=about_cta %}
