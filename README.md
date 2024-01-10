# vscode-lit-plugin issue [#313](https://github.com/runem/lit-analyzer/issues/313) reproduction

This demonstrates the error with vscode-lit-plugin causing spurious missing import warnings.

To reproduce simply open the `index.ts` in VSCode with the plugin installed. If you remove one of the two element imports, you'll note all elements get marked as missing imports. When you re-add that import, only that one resolves while the others remain missing.

You can also confirm this is a `vscode-lit-plugin` specific issue by running `pnpm run lit-analyzer` at the cli to run the analyzer standalone which works as expected.
