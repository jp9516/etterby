---
title: "Making GA4 tagging dependable"
---

The GA4 rush left many teams with brittle instrumentation and consent gaps. Fixing it starts with ownership.

When Etterby Analytics supported a private equity portfolio on its GA4 migration the first win was agreeing who owned each step: agencies handled creative, but measurement planning, QA, and release notes lived with the internal analytics squad. That alignment alone stopped three launch day outages.

Next came automation. The team wired server side tagging, wrote dbt tests against the export tables, and hooked up Slack alerts when payloads drifted. Manual spot checks still mattered, but the guardrails caught issues before revenue reporting went sideways.

Finally the team treated documentation as a product. Every change shipped with measurement diagrams, consent implications, and a rollback plan. It gave marketing the confidence to move fast without sacrificing data quality—or inviting regulators to the party.
