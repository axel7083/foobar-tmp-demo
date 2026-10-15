# Unit Testing

Use this guide when adding tests to the webview template.

## Recommendation

- Use Vitest for unit tests.
- Mock `@podman-desktop/api` at module boundaries.
- Validate command handlers and webview interaction behavior.

## Suggested setup

If tests are introduced, add:

- `vitest` dev dependency
- `npm test` script
- `*.spec.ts` files next to tested logic
