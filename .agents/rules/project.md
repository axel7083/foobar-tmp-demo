## Scope

Applies to all files in this repository.

## Rules

- Keep extension entrypoint logic in `src/extension.ts`.
- Register commands/menus/configuration in `package.json` `contributes`.
- Use `@podman-desktop/api` for extension and webview integration points.
- Keep activation lightweight and avoid blocking the extension startup path.
