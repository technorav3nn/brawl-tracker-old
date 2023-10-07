import { Client } from "brawlstats";
import { singleton } from "./util/objects";

export const brawlStarsApiClient = singleton(
	"brawl-stars-api-client",
	new Client({
		token: process.env.BRAWL_STARS_API_TOKEN,
	})
)!;
