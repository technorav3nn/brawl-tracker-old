import { ofetch } from "ofetch";
import { API_URL } from "../constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UrlCreator<T = any> = ((...args: T[]) => string) | string;
// type InferArrayElements<T> = T extends (infer U)[] ? U : never;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createApiHandler<T extends Record<string, any>, R extends any[] = []>(
	urlCreator: UrlCreator
) {
	return function (...args: R) {
		const url = `${API_URL}${typeof urlCreator === "function" ? urlCreator(...args) : urlCreator}`;
		return ofetch<T>(url);
	};
}
