export function shouldSetAriaCurrentPage(currentPage: string, path: string) {
	if (path === "/") return currentPage === path;
	return currentPage.startsWith(path);
}
