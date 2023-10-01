export const NAVBAR_ITEMS = [
	{ label: "Cards", path: "/cards" },
	{ label: "Players", path: "/players" },
	{ label: "Decks", path: "/decks" },
	{ label: "Clans", path: "/clans" },
] as const;

export const NAVIGATION_DRAWER_ITEMS = [{ label: "Home", path: "/" }, ...NAVBAR_ITEMS] as const;
