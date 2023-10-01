import { css } from "$styled-system/css";
import { isCssProperty } from "$styled-system/jsx/is-valid-prop.mjs";
import type { SystemStyleObject } from "$styled-system/types";

export type CssProp = SystemStyleObject;

export function extractCssProp(styles: SystemStyleObject = {}) {
	return css.raw(styles);
}

export function createBoxExtractor<T extends Record<string, unknown>>(props: T) {
	const extractedProps = Object.entries(props)
		.filter(([key]) => isCssProperty(key))
		.reduce((acc, [key, value]) => {
			acc[key] = value as SystemStyleObject | number | string;
			return acc;
		}, {} as Record<string, SystemStyleObject | number | string> & { [key: string]: unknown });

	const styles = css.raw(extractedProps as SystemStyleObject);
	return styles;
}
