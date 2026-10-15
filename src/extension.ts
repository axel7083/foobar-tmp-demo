import type { ExtensionContext } from '@podman-desktop/api';
import * as extensionApi from '@podman-desktop/api';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Read the extension version from the package.json shipped alongside the extension.
async function readExtensionVersion(extensionContext: ExtensionContext): Promise<string> {
  const content = await readFile(join(extensionContext.extensionUri.fsPath, 'package.json'), 'utf-8');
  return JSON.parse(content).version;
}

/**
 * Below is the "typical" extension.ts file that is used to activate and deactivate the extension.
 * this file as well as package.json are the two main files that are required to develop a Podman Desktop extension.
 */

// Initialize the activation of the extension.
export async function activate(extensionContext: ExtensionContext): Promise<void> {
  console.log('starting hello world extension');

  // Create the webview panel and register it with the extension context.
  const panel = extensionApi.window.createWebviewPanel('helloWorld', 'Hello World');
  extensionContext.subscriptions.push(panel);

  const version = await readExtensionVersion(extensionContext);

  const exampleWebviewHtml = `
  <html>
    <body>
      <h1>Hello World <small>v${escapeHtml(version)}</small></h1>
    </body>
  </html>
  `;

  // Add the example webview HTML to the webview panel. For more advanced webview usage see our "full" template: https://github.com/containers/podman-desktop-extension-full-template
  // for a more advanced html configuration such as using Svelte / TailwindCSS / etc.
  panel.webview.html = exampleWebviewHtml;
}

// Deactivate the extension
export async function deactivate(): Promise<void> {
  console.log('stopping hello world extension');
}
