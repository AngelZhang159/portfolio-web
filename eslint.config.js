import globals from "globals"
import pluginJs from "@eslint/js"
import pluginReact from "eslint-plugin-react"
import pluginTailwindCSS from "eslint-plugin-tailwindcss"

export default [
	{ files: ["**/*.{js,mjs,cjs,jsx}"] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	pluginTailwindCSS.configs.recommended,
]
