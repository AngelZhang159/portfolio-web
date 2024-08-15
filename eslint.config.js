import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import standard from "eslint-config-standard";

export default [
	{
		files: ["**/*.{js,mjs,cjs,jsx}"],
		languageOptions: {
			globals: globals.browser,
		},
		settings: {
			react: {
				version: "detect"
			}
		},
		rules: {
		}
	},
	{
		languageOptions: { globals: globals.browser }
	},
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	standard,
];