---
layout: default
title: "Analytics that drive outcomes"
description: "Reliable pipelines, clear metrics, and practical ML for product and operations teams."
---
{% assign home = site.data.home %}

<section id="hero" class="container mx-auto px-6 py-24">
  <h1 class="text-5xl md:text-6xl font-semibold leading-tight">Analytics that drive outcomes.</h1>
  <p class="mt-4 text-lg max-w-2xl">
    I help product and operations teams ship reliable data pipelines, clear metrics, and practical ML - without drama.
  </p>
  <div class="mt-8 flex flex-wrap gap-4">
    <a href="/contact/" class="px-5 py-3 bg-brandblue text-white rounded-xl">Book a call</a>
    <a href="/services/" class="px-5 py-3 border rounded-xl">View services</a>
  </div>
</section>

{% assign home_services = home.services %}
<section class="container mx-auto px-6 py-20">
  <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
    <div>
      <h2 class="text-3xl font-semibold">{{ home_services.title }}</h2>
      <p class="mt-2 opacity-80 max-w-2xl">{{ home_services.description }}</p>
    </div>
    <a href="{{ home_services.view_all.url }}" class="inline-flex px-5 py-3 bg-brandblue text-white rounded-xl text-sm uppercase tracking-wide">{{ home_services.view_all.label }}</a>
  </div>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {% assign services = site.services | sort: 'position' %}
    {% for service in services %}
      <a href="{{ service.url }}" class="p-6 rounded-2xl border border-white/10 hover:border-brandblue transition block">
        <h3 class="font-semibold mb-2">{{ service.title }}</h3>
        <p class="text-sm opacity-90">{{ service.summary | default: service.tagline }}</p>
        {% if service.focus %}
          <ul class="mt-4 text-xs uppercase tracking-wide opacity-70 flex flex-wrap gap-2">
            {% for item in service.focus %}
              <li class="px-2 py-1 rounded-full border border-white/10">{{ item }}</li>
            {% endfor %}
          </ul>
        {% endif %}
      </a>
    {% endfor %}
  </div>
</section>

{% assign home_work = home.work %}
<section class="container mx-auto px-6 py-20">
  <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
    <div>
      <h2 class="text-3xl font-semibold">{{ home_work.title }}</h2>
      <p class="mt-2 opacity-80 max-w-2xl">{{ home_work.description }}</p>
    </div>
    <a href="{{ home_work.view_all.url }}" class="inline-flex px-5 py-3 bg-brandblue text-white rounded-xl text-sm uppercase tracking-wide">{{ home_work.view_all.label }}</a>
  </div>
  {% assign featured_work = site.work | where_exp: 'item', 'item.featured != false' | sort: 'position' %}
  {% if featured_work.size > 0 %}
    <div class="grid md:grid-cols-2 gap-6">
      {% for item in featured_work limit: home_work.limit %}
        <article class="p-6 rounded-2xl border border-white/10 flex flex-col gap-4">
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
        </article>
      {% endfor %}
    </div>
  {% else %}
    <p class="opacity-80">Add a case study to the <code>_work/</code> collection to feature it here.</p>
  {% endif %}
</section>

{% assign home_insights = home.insights %}
<section class="container mx-auto px-6 py-20">
  <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
    <div>
      <h2 class="text-3xl font-semibold">{{ home_insights.title }}</h2>
      <p class="mt-2 opacity-80 max-w-2xl">{{ home_insights.description }}</p>
    </div>
    <a href="{{ home_insights.view_all.url }}" class="text-sm uppercase tracking-wide opacity-80 hover:opacity-100">{{ home_insights.view_all.label }}</a>
  </div>
  {% assign posts = site.posts | limit: home_insights.limit %}
  {% if posts.size > 0 %}
    <div class="grid md:grid-cols-3 gap-6">
      {% for post in posts %}
        <article class="p-6 rounded-2xl border border-white/10 flex flex-col gap-3">
          <div>
            <p class="text-xs uppercase tracking-wide opacity-70">{{ post.date | date: "%b %Y" }}</p>
            <h3 class="font-semibold mb-2"><a href="{{ post.url }}">{{ post.title }}</a></h3>
            <p class="text-sm opacity-90">{{ post.excerpt | strip_html | truncate: 120 }}</p>
          </div>
          <a href="{{ post.url }}" class="text-sm text-brandblue">Read more →</a>
        </article>
      {% endfor %}
    </div>
  {% else %}
    <p class="opacity-80">Publish a post in <code>_posts/</code> to surface it on the homepage.</p>
  {% endif %}
</section>
