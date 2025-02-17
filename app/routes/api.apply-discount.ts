import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
	// ...apply discount logic here...
	return json({ success: true });
};
