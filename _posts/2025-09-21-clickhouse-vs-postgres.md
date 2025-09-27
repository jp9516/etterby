---
title: "When ClickHouse shines"
---

Where columnar OLAP wins for event data and how to roll it out pragmatically.

The decision to introduce ClickHouse at Xcelirate came after months of watching Postgres wheeze under customer events. Analysts needed multi month lookbacks to explain fraud patterns and the row store was not built for that scale. ClickHouse gave us sub second responses on the same hardware once we modelled the data around the questions product and risk teams asked every week.

It is not a silver bullet though. For transactional workloads and operational updates, Postgres remains the system of record. The winning pattern has been to stream change data capture into ClickHouse, apply dbt for modelling, and keep Postgres for writes and mission critical OLTP. That mirrors how we rolled out analytics at Vita Mojo where Looker and ThoughtSpot relied on consistent semantics built on top of the warehouse.

Success hinges on enablement. Engineers needed cheat sheets for materialised views, analysts required query templates, and leadership wanted clear SLAs. By pairing the migration with documentation and training, we made ClickHouse an accelerator rather than a distraction.

