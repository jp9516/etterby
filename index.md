
---
layout: default
title: "Analytics that drive outcomes"
description: "Reliable pipelines, clear metrics, and practical ML for product and operations teams."
---

<section id="hero" class="container mx-auto px-6 py-24">
  <h1 class="text-5xl md:text-6xl font-semibold leading-tight">Analytics that drive outcomes.</h1>
  <p class="mt-4 text-lg max-w-2xl">
    I help product and operations teams ship reliable data pipelines, clear metrics, and practical ML—without drama.
  </p>
  <div class="mt-8 flex gap-4">
    <a href="/contact/" class="px-5 py-3 bg-brandblue text-white rounded-xl">Book a call</a>
    <a href="/services/" class="px-5 py-3 border rounded-xl">View services</a>
  </div>
</section>

<section class="bg-white/5">
  <div class="container mx-auto px-6 py-6 text-xs md:text-sm flex flex-wrap gap-x-6 gap-y-2 items-center">
    <span class="opacity-90">UK limited company</span>
    <span class="opacity-90">Security & privacy by design</span>
    <span class="opacity-90">dbt • Airflow • ClickHouse • Python</span>
    <span class="opacity-90">Remote-first</span>
    <span class="opacity-90">Clear SLAs & reporting</span>
  </div>
</section>

<section class="container mx-auto px-6 py-20">
  <h2 class="text-3xl font-semibold mb-6">Services</h2>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <a href="/services/data-engineering/" class="p-6 rounded-2xl border border-white/10 hover:border-brandblue transition block">
      <h3 class="font-semibold mb-2">Data Engineering</h3>
      <p class="text-sm opacity-90">Modern ELT with dbt & Airflow. Versioned, tested pipelines on ClickHouse/Postgres.</p>
    </a>
    <a href="/services/analytics-bi/" class="p-6 rounded-2xl border border-white/10 hover:border-brandblue transition block">
      <h3 class="font-semibold mb-2">Analytics & BI</h3>
      <p class="text-sm opacity-90">Metric layers and dashboards that executives actually use.</p>
    </a>
    <a href="/services/data-science-ml/" class="p-6 rounded-2xl border border-white/10 hover:border-brandblue transition block">
      <h3 class="font-semibold mb-2">Data Science & ML</h3>
      <p class="text-sm opacity-90">Fraud detection, forecasting, experimentation. From idea to production.</p>
    </a>
    <a href="/services/ai-automation/" class="p-6 rounded-2xl border border-white/10 hover:border-brandblue transition block">
      <h3 class="font-semibold mb-2">AI & Automation</h3>
      <p class="text-sm opacity-90">Practical LLMs: retrieval, evaluators, guardrails. Measurable impact.</p>
    </a>
  </div>
</section>

<section class="container mx-auto px-6 py-20">
  <h2 class="text-3xl font-semibold mb-6">Selected Work</h2>
  <div class="p-6 rounded-2xl border border-white/10">
    <h3 class="font-semibold"><a href="/work/fraud-detection-eu-classifieds/">Fraud detection uplift for EU classifieds platform</a></h3>
    <ul class="list-disc ml-5 mt-2 text-sm opacity-90 space-y-1">
      <li>Earlier detection of bad actors and improved recall at operating precision.</li>
      <li>Reduced analyst workload via targeted reviews and better triage.</li>
      <li>Hardened pipelines with alerts, SLAs, and weekly exec reporting.</li>
    </ul>
  </div>
</section>

<section class="container mx-auto px-6 py-20">
  <h2 class="text-3xl font-semibold mb-6">Insights</h2>
  <div class="grid md:grid-cols-3 gap-6">
    {% for post in site.posts limit:3 %}
      <article class="p-6 rounded-2xl border border-white/10">
        <h3 class="font-semibold mb-2"><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <p class="text-sm opacity-90">{{ post.excerpt | strip_html | truncate: 120 }}</p>
      </article>
    {% endfor %}
  </div>
</section>
