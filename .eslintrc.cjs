/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"plugin:perfectionist/recommended-natural",
		"@nuxt/eslint-config",
		"plugin:nuxt/recommended",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		extraFileExtensions: [".vue"],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	overrides: [
		{
			files: ["*.vue"],
			parser: "vue-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".vue"],
			},
		},
	],
	rules: {
		"@typescript-eslint/consistent-type-imports": "error",
		semi: ["error", "always"],

		"vue/singleline-html-element-content-newline": "off",
		"vue/attribute-hyphenation": [0, { ignore: ["custom-prop"] }],
		"vue/html-indent": ["error", "tab"],
		"vue/one-component-per-file": "off",
		"vue/html-closing-bracket-newline": "off",
		"vue/max-attributes-per-line": "off",
		"vue/no-multiple-template-root": "off",
		"vue/attributes-order": "off",

		"import/no-unresolved": "off",
		"import/first": "off",
		"import/order": [
			"warn",
			{
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
				"newlines-between": "never",
				groups: ["builtin", "external", "parent", "sibling", "index"],
				pathGroups: [
					{
						pattern: "$lib/**/*",
						group: "parent",
						position: "before",
					},
					{
						pattern: "$components/**/*",
						group: "parent",
						position: "before",
					},
					{
						pattern: "$/lib/**/*",
						group: "parent",
						position: "before",
					},
				],
				pathGroupsExcludedImportTypes: ["builtin"],
			},
		],
		//
		"perfectionist/sort-objects": "off",
		"perfectionist/sort-svelte-attributes": "off",
		"perfectionist/sort-imports": [
			"off",
			{
				groups: [
					"components-and-stores",
					["builtin-type", "type"],
					["builtin", "external"],
					["internal", "internal-type"],
					["parent-type", "sibling-type", "index-type"],
					["parent", "sibling", "index"],
					"side-effect",
					"style",
					"object",
					"unknown",
				],
				"custom-groups": {
					value: {
						"components-and-stores": ["$components/**", "$stores/**"],
					},
				},
				order: "asc",
				type: "natural",
				"internal-pattern": ["$**"],
			},
		],
		"perfectionist/sort-exports": [
			"off",
			{
				type: "line-length",
				order: "asc",
			},
		],
	},
};
