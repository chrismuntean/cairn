/**
 * @devplusllc/harness — umbrella re-export.
 *
 * Adopters who don't want to think about sub-packages can `import { ... }
 * from "@devplusllc/harness"`. Power users compose `harness-core`,
 * `harness-runtime`, and frontend adapters directly. See docs/ARCHITECTURE.md
 * §3.5.
 */

export * from "@devplusllc/harness-core";
export * from "@devplusllc/harness-runtime";
export * from "@devplusllc/harness-frontend-discord";
export * from "@devplusllc/harness-frontend-stub";
