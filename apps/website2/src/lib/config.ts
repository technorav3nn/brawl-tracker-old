export const NAVBAR_ITEMS = [
	{ label: "Brawlers", path: "/brawlers" },
	{ label: "Players", path: "/players" },
	{ label: "Events", path: "/events" },
	{ label: "Clubs", path: "/clubs" },
] as const;

export const NAVIGATION_DRAWER_ITEMS = [{ label: "Home", path: "/" }, ...NAVBAR_ITEMS] as const;
