# vscode-lit-plugin issue [#313](https://github.com/runem/lit-analyzer/issues/313) reproduction

This demonstrates the error with vscode-lit-plugin causing spurious missing import warnings.

The trigger seems to be any value for `module` in the `tsconfig.json`.

To reproduce simply open the `index.ts` in VSCode with the plugin installed. If you then remove the `module` setting in the `tsconfig.json` the error goes away.

You can also confirm this is a `vscode-lit-plugin` specific issue by running `pnpm run lit-analyzer` at the cli to run the analyzer standalone which works fine regardlss of module setting.
