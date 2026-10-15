# AGENTS.md

## Project Overview

Webview-enabled Podman Desktop extension template. This template is intended as
a compact starting point for extensions that expose a frontend view while still
keeping extension logic simple.

- **Tech stack**: TypeScript, Node.js, npm
- **Extension API**: `@podman-desktop/api`
- **Main entrypoint**: `src/extension.ts`

## Quick Start

```sh
npm install
npm run build
```

## Essential Commands

```sh
npm run build   # compile TypeScript into dist/
npm run watch   # incremental TypeScript rebuild
```

## Single-File Verification

```sh
npx eslint path/to/file.ts
npx tsc --noEmit path/to/file.ts
```

## Skills

Task-specific guidance lives in `.agents/skills/`:

- `extension-development` - extension lifecycle + webview wiring
- `unit-testing` - lightweight testing guidance for extension logic

## Architecture

- `src/extension.ts` contains activation and webview registration logic.
- `package.json` `contributes` defines commands/menus/views.
- Built output is `dist/extension.js` loaded by Podman Desktop.

## Pattern References

- Add a command: `package.json` `contributes.commands` + handler in `src/extension.ts`
- Add a webview action: command triggers panel/webview interactions
- Add settings: `package.json` `contributes.configuration`
