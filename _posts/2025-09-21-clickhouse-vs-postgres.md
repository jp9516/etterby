---
title: "When ClickHouse shines"
---

### Context
Etterby Analytics introduced ClickHouse for a global marketplace that had stretched Postgres past its limits. Fraud analysts needed multi month lookbacks, operations demanded sub second answers, and nightly exports were masking data quality issues. The columnar store fit the use case once the team aligned the modelling approach with the fraud, pricing, and compliance questions on the roadmap.

### Practice
- Stream change data capture into ClickHouse while keeping Postgres for transactional integrity.
- Model behavioural features with dbt and orchestrate refreshes through Airflow so investigations and A/B tests referenced the same truth.
- Pair the rollout with enablement: cheat sheets for materialised views, query templates for analysts, and SLAs agreed with leadership.

### Takeaways
- Columnar OLAP delivers value when tied to clear investigative questions, not just curiosity about new tooling.
- Documentation, training, and observability convert migrations into momentum, mirroring the ThoughtSpot and Superset enablement rolled out for Vita Mojo operators.

