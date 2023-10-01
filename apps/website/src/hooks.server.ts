export async function handle({ event, resolve }) {
	return await resolve(event, {
		// preload fonts, css, and js files
		preload: ({ type }) => type === "js" || type === "css" || type === "font",
	});
}
