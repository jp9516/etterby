---
layout: default
title: "About"
---
{% assign page_content = site.data.about_page %}

<section class="container mx-auto px-6 py-16 space-y-12">
  <div class="max-w-3xl space-y-4">
    <p class="text-xs uppercase tracking-wide opacity-70">{{ page_content.hero.eyebrow }}</p>
    <h1 class="text-3xl md:text-4xl font-semibold">{{ page_content.hero.title }}</h1>
    {% for paragraph in page_content.hero.description %}
      <p class="opacity-90">{{ paragraph }}</p>
    {% endfor %}
  </div>

  <div class="grid md:grid-cols-[2fr,1fr] gap-8 items-start">
    <article class="space-y-8">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">{{ page_content.profile.title }}</h2>
        <p class="text-sm uppercase tracking-wide opacity-70">{{ page_content.profile.name }}</p>
        <ul class="space-y-3 text-sm opacity-90">
          {% for item in page_content.profile.bio %}
            <li>• {{ item }}</li>
          {% endfor %}
        </ul>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">{{ page_content.values.title }}</h2>
        <div class="grid md:grid-cols-2 gap-4">
          {% for value in page_content.values.items %}
            <div class="p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 class="font-semibold">{{ value.title }}</h3>
              <p class="text-sm opacity-90">{{ value.detail }}</p>
            </div>
          {% endfor %}
        </div>
      </section>
    </article>

    <aside class="space-y-6">
      <div class="p-6 rounded-2xl border border-white/10 space-y-3">
        <h2 class="text-lg font-semibold">{{ page_content.credentials.title }}</h2>
        <ul class="space-y-2 text-sm opacity-80">
          {% for item in page_content.credentials.items %}
            <li>• {{ item }}</li>
          {% endfor %}
        </ul>
      </div>
      <a href="{{ page_content.contact_cta.url }}" class="block px-5 py-3 bg-brandblue text-white rounded-xl text-center">{{ page_content.contact_cta.label }}</a>
    </aside>
  </div>
</section>
