import { defineRecipe } from "@pandacss/dev";

const tableContainer = defineRecipe({
	className: "tableContainer",
	description: "Styles for the TableContainer component",
	base: {
		w: "full",
		overflow: "auto",
	},
	variants: {
		variant: {
			bordered: {
				border: "base",
				borderRadius: "l2",
			},
		},
	},
});

const table = defineRecipe({
	className: "table",
	description: "Styles for the Table component",
	base: {
		w: "full",
		captionSide: "bottom",
		textStyle: "sm",
	},
});

const tableHeader = defineRecipe({
	className: "tableHeader",
	description: "Styles for the TableHeader component",
	base: {
		"& tr": {
			borderBottom: "base",
		},
	},
});

const tableBody = defineRecipe({
	className: "tableBody",
	description: "Styles for the TableBody component",
	base: {
		"& tr": {
			_last: {
				borderBottom: "transparent",
			},
		},
	},
});

const tableFooter = defineRecipe({
	className: "tableFooter",
	description: "Styles for the TableFooter component",
	base: {
		bg: "bg.default",
		fontWeight: "medium",
		color: "fg.default",
	},
});

const tableRow = defineRecipe({
	className: "tableRow",
	description: "Styles for the TableRow component",
	base: {
		borderBottom: "base",
		transition: "colors",

		_hover: {
			bgCt: "bg.muted/50",
		},

		"&[data-state=selected]": {
			bgCt: "bg.muted/100",
		},
	},
});

const tableHead = defineRecipe({
	className: "tableHead",
	description: "Styles for the TableHead component",
	base: {
		h: "12",
		px: "4",
		textAlign: "left",
		verticalAlign: "middle",
		fontWeight: "medium",
		color: "fg.muted",

		"&:has([role=checkbox])": {
			pr: "0",
		},
	},
});

const tableCell = defineRecipe({
	className: "tableCell",
	description: "Styles for the TableCell component",
	base: {
		p: 5,
		verticalAlign: "middle",

		"&:has([role=checkbox])": {
			pr: 0,
		},
	},
});

const tableCaption = defineRecipe({
	className: "tableCaption",
	description: "Styles for the TableCaption component",
	base: {
		mt: "4",
		textStyle: "sm",
		color: "fg.muted",
	},
});

export const tableRecipes = {
	tableContainer,
	table,
	tableHeader,
	tableBody,
	tableFooter,
	tableRow,
	tableHead,
	tableCell,
	tableCaption,
};
