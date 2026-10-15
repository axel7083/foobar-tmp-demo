# Extension Development

Use this guide when adding or changing extension behavior in the webview template.

## Core flow

1. Declare contributions in `package.json` (`commands`, `menus`, `configuration`).
2. Implement command and webview behavior in `src/extension.ts`.
3. Keep extension activation predictable and side effects explicit.

## Common tasks

- Add command: create `contributes.commands` entry and register handler.
- Add webview wiring: command opens or updates webview state.
- Add settings: define in `contributes.configuration` and read via API.

## Validation

```sh
npm run build
npx tsc --noEmit src/extension.ts
```
