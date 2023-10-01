/*
	ease-in: cubic-bezier(0.4, 0, 1, 1)
	ease-out: cubic-bezier(0, 0, 0.2, 1)
	https://tailwindcss.com/docs/transition-timing-function
*/
export function cubicBezier(t: number, initial: number, p1: number, p2: number, final: number) {
	return (
		(1 - t) * (1 - t) * (1 - t) * initial +
		3 * (1 - t) * (1 - t) * t * p1 +
		3 * (1 - t) * t * t * p2 +
		t * t * t * final
	);
}
