# Backend Health Audit Checklist

Use this checklist when a backend feels slow, brittle, hard to scale, or hard to trust.

## Operational clarity

- Can operators explain the main workflow from input to outcome without guessing?
- Are stock, reservation, or reporting states visible and internally consistent?
- Do teams know which failures matter most to daily operations?

## Data flow and persistence

- Are the slowest queries identified with real evidence rather than assumptions?
- Do indexes match the most frequent filters, joins, and reporting paths?
- Is the source of truth clear when multiple actors touch the same workflow?

## Integration reliability

- Are payment, logistics, or third-party APIs wrapped behind clear boundaries?
- Is error handling explicit for timeouts, malformed responses, and retries?
- Can the team see what failed, where, and why without reading raw production logs?

## Architecture and maintainability

- Are service boundaries and responsibilities clear enough for safe change?
- Does the system rely on one-off patches instead of understandable patterns?
- Can a new engineer trace the main workflow without reverse engineering everything?

## Delivery confidence

- Are tests protecting the most expensive workflow risks?
- Is deployment predictable, or does each release create uncertainty?
- Is there a written next-step plan for the biggest bottlenecks?

## Good next steps

- Start with the workflow that costs the most time or trust when it breaks.
- Map the current system path before proposing a rewrite.
- Fix the highest-leverage bottleneck before broadening scope.

If you want a second set of eyes on this, OT Systems Engineering offers backend audits, focused sprints, and ongoing advisory support.
