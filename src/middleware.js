// src/middleware.js
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
	const request = context.request;
	const ip = request.headers.get("x-vercel-ip-country-region")?.split(",")[0];

	try {
		const response = await fetch(`https://ipapi.co/${ip}/json/`);
		const data = await response.json();

		const city = data.city?.toLowerCase();

		// Save both the city and a boolean for easy use
		context.locals.city = data.city;
		context.locals.isTenerife = city === "santa cruz de tenerife" || city === "tenerife";
	} catch (error) {
		context.locals.city = null;
		context.locals.isTenerife = false;
	}

	return next();
});
