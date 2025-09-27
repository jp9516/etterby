---
layout: default
title: "Analytics that drive outcomes"
description: "Reliable pipelines, clear metrics, and practical ML for product and operations teams."
---
{% assign home = site.data.home %}
{% capture hero_block %}
  <div class="space-y-8">
    <h1 class="text-5xl md:text-6xl font-semibold leading-tight">Analytics that drive outcomes.</h1>
    <p class="text-lg max-w-2xl">
      Etterby Analytics is a Carlisle-based consultancy that helps product and operations teams across Cumbria, throughout the UK, and select global partners ship reliable data pipelines, clear metrics, and practical ML – without drama.
    </p>
    <div class="flex flex-wrap gap-4 items-center">
      <a href="/contact/" class="inline-flex items-center justify-center rounded-full bg-brandblue px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brandblue/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandblue/40">Contact</a>
      <a href="/services/" class="text-base font-medium text-brandblack/70 transition hover:text-brandblue focus-visible:underline dark:text-white/70">View services</a>
    </div>
  </div>
{% endcapture %}
{% include section.html id="hero" tone="plain" padding="py-24" inner_class="space-y-8" content=hero_block %}

{% assign home_services = home.services %}
{% capture services_header %}
  <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
    <div>
      <h2 class="text-3xl font-semibold">{{ home_services.title }}</h2>
      <p class="mt-2 opacity-80 max-w-2xl">{{ home_services.description }}</p>
    </div>
    <a href="{{ home_services.view_all.url }}" class="inline-flex items-center justify-center rounded-full bg-brandblue px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-brandblue/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandblue/40">{{ home_services.view_all.label }}</a>
  </div>
{% endcapture %}
{% assign services = site.services | sort: 'position' %}
{% capture services_grid %}
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {% for service in services %}
      {% capture service_card %}
        <div class="flex flex-col gap-4 h-full">
          <div>
            <h3 class="font-semibold text-lg mb-1"><a href="{{ service.url }}">{{ service.title }}</a></h3>
            <p class="text-sm opacity-90">{{ service.summary | default: service.tagline }}</p>
          </div>
          {% if service.focus %}
            <ul class="mt-auto text-xs uppercase tracking-wide opacity-70 flex flex-wrap gap-2">
              {% for item in service.focus %}
                <li class="px-2 py-1 rounded-full border border-brandblack/20 dark:border-white/10">{{ item }}</li>
              {% endfor %}
            </ul>
          {% endif %}
        </div>
      {% endcapture %}
      {% include panel.html tone="frost" class="transition hover:border-brandblue/60 hover:shadow-black/50 h-full" content=service_card %}
    {% endfor %}
  </div>
{% endcapture %}
{% capture services_block %}
  <div class="space-y-8">
    {{ services_header }}
    {{ services_grid }}
  </div>
{% endcapture %}
{% include section.html tone="frost" content=services_block %}

{% assign home_work = home.work %}
{% capture work_header %}
  <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
    <div>
      <h2 class="text-3xl font-semibold">{{ home_work.title }}</h2>
      <p class="mt-2 opacity-80 max-w-2xl">{{ home_work.description }}</p>
    </div>
    <a href="{{ home_work.view_all.url }}" class="inline-flex items-center justify-center rounded-full bg-brandblue px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-brandblue/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandblue/40">{{ home_work.view_all.label }}</a>
  </div>
{% endcapture %}
{% assign featured_work = site.work | where_exp: 'item', 'item.featured != false' | sort: 'position' %}
{% capture work_content %}
  <div class="space-y-8">
    {{ work_header }}
    {% if featured_work.size > 0 %}
      <div class="grid md:grid-cols-2 gap-6">
        {% for item in featured_work limit: home_work.limit %}
          {% capture work_card %}
            <div class="flex flex-col gap-4 h-full">
              <div>
                <p class="text-xs uppercase tracking-wide opacity-70">{{ item.industry }}</p>
                <h3 class="font-semibold text-xl mt-1"><a href="{{ item.url }}">{{ item.title }}</a></h3>
                <p class="text-sm opacity-90 mt-2">{{ item.summary | default: item.excerpt }}</p>
              </div>
              {% if item.results %}
                <ul class="text-sm opacity-80 space-y-1">
                  {% for result in item.results %}
                    <li>• {{ result }}</li>
                  {% endfor %}
                </ul>
              {% elsif item.highlights %}
                <ul class="text-sm opacity-80 space-y-1">
                  {% for result in item.highlights %}
                    <li>• {{ result }}</li>
                  {% endfor %}
                </ul>
              {% endif %}
            </div>
          {% endcapture %}
          {% include panel.html tone="glow" class="h-full" content=work_card %}
        {% endfor %}
      </div>
    {% else %}
      <p class="opacity-80">Add a case study to the <code>_work/</code> collection to feature it here.</p>
    {% endif %}
  </div>
{% endcapture %}
{% include section.html tone="glow" content=work_content %}

{% assign home_insights = home.insights %}
{% assign posts = site.posts | limit: home_insights.limit %}
{% capture insights_header %}
  <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
    <div>
      <h2 class="text-3xl font-semibold">{{ home_insights.title }}</h2>
      <p class="mt-2 opacity-80 max-w-2xl">{{ home_insights.description }}</p>
    </div>
    <a href="{{ home_insights.view_all.url }}" class="text-sm uppercase tracking-wide opacity-80 hover:opacity-100">{{ home_insights.view_all.label }}</a>
  </div>
{% endcapture %}
{% capture insights_grid %}
  {% if posts.size > 0 %}
    <div class="grid md:grid-cols-3 gap-6">
      {% for post in posts %}
        {% capture insight_card %}
          <div class="flex flex-col gap-3 h-full">
            <div>
              <p class="text-xs uppercase tracking-wide opacity-70">{{ post.date | date: "%b %Y" }}</p>
              <h3 class="font-semibold mb-2"><a href="{{ post.url }}">{{ post.title }}</a></h3>
              <p class="text-sm opacity-90">{{ post.excerpt | strip_html | truncate: 120 }}</p>
            </div>
            <a href="{{ post.url }}" class="mt-auto text-sm text-brandblue">Read more →</a>
          </div>
        {% endcapture %}
        {% include panel.html tone="ink" class="h-full transition hover:border-brandblue/50" content=insight_card %}
      {% endfor %}
    </div>
  {% else %}
    <p class="opacity-80">Publish a post in <code>_posts/</code> to surface it on the homepage.</p>
  {% endif %}
{% endcapture %}
{% capture insights_block %}
  <div class="space-y-8">
    {{ insights_header }}
    {{ insights_grid }}
  </div>
{% endcapture %}
{% include section.html tone="blue" content=insights_block %}
