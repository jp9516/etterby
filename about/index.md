---
layout: default
title: "About"
description: "Discover James Pearson's CV, values, and the analytics outcomes delivered across marketplaces, SaaS, and media."
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
          <p class="text-sm text-brandblack/70 dark:text-white/70">Discuss your analytics roadmap and the momentum we can unlock.</p>
          <a href="{{ page_content.contact_cta.url }}" class="inline-flex justify-center px-5 py-3 bg-brandblue text-white rounded-xl">{{ page_content.contact_cta.label }}</a>
        </div>
      {% endcapture %}
      {% include panel.html tone="solid" class="space-y-3" content=contact_panel %}
    </aside>
  </div>
{% endcapture %}
{% include section.html tone="frost" content=about_profile %}

{% capture cv_intro %}
  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div>
      <h2 class="text-2xl font-semibold">{{ page_content.cv.title }}</h2>
      <p class="opacity-80">{{ page_content.cv.intro }}</p>
    </div>
    <a href="{{ page_content.cv.download.url }}" class="inline-flex items-center justify-center px-5 py-3 border border-brandblack/30 dark:border-white/30 rounded-xl text-sm uppercase tracking-wide">{{ page_content.cv.download.label }}</a>
  </div>
{% endcapture %}

{% capture cv_roles %}
  <div class="space-y-6">
    {% for role in page_content.cv.experience.recent_roles %}
      {% capture role_panel %}
        <div class="space-y-3">
          <header>
            <p class="text-xs uppercase tracking-wide opacity-70">{{ role.company }} · {{ role.location }}</p>
            <h4 class="text-lg font-semibold">{{ role.role }}</h4>
            <p class="text-xs uppercase tracking-wide opacity-70">{{ role.period }}</p>
          </header>
          <ul class="space-y-2 text-sm opacity-90">
            {% for highlight in role.highlights %}
              <li>• {{ highlight }}</li>
            {% endfor %}
          </ul>
        </div>
      {% endcapture %}
      {% include panel.html tone="ink" class="space-y-4" content=role_panel %}
    {% endfor %}
    {% capture early_panel %}
      <div class="space-y-2">
        <h4 class="text-sm uppercase tracking-wide opacity-70">{{ page_content.cv.experience.early_career.title }}</h4>
        <ul class="text-sm opacity-80 space-y-1">
          {% for role in page_content.cv.experience.early_career.roles %}
            <li>• {{ role }}</li>
          {% endfor %}
        </ul>
      </div>
    {% endcapture %}
    {% include panel.html tone="outline" class="space-y-2" content=early_panel %}
  </div>
{% endcapture %}

{% capture cv_skills %}
  <div class="grid md:grid-cols-2 gap-6">
    {% capture skills_panel %}
      <div class="space-y-3">
        <h3 class="text-xl font-semibold">{{ page_content.cv.skills.title }}</h3>
        <ul class="space-y-3 text-sm opacity-90">
          {% for skill in page_content.cv.skills.categories %}
            <li>
              <span class="block font-semibold text-brandblack dark:text-white">{{ skill.name }}</span>
              <span>{{ skill.detail }}</span>
            </li>
          {% endfor %}
        </ul>
      </div>
    {% endcapture %}
    {% include panel.html tone="ink" class="space-y-3" content=skills_panel %}

    {% capture education_panel %}
      <div class="space-y-3">
        <h3 class="text-xl font-semibold">{{ page_content.cv.education.title }}</h3>
        <p class="text-sm opacity-90">{{ page_content.cv.education.detail }}</p>
      </div>
    {% endcapture %}
    {% include panel.html tone="frost" class="space-y-3" content=education_panel %}
  </div>
{% endcapture %}

{% capture cv_section %}
  <div class="space-y-12">
    {{ cv_intro }}
    <div class="grid lg:grid-cols-[1.6fr,1fr] gap-8">
      {{ cv_roles }}
      {{ cv_skills }}
    </div>
  </div>
{% endcapture %}
{% include section.html tone="blue" content=cv_section %}
