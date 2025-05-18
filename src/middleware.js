// src/middleware.js
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
	const request = context.request;
	const city = request.headers.get("X-Vercel-IP-City").split(" ")[0];
	const region = request.headers.get("X-Vercel-IP-Country-Region").split(" ")[0];

	try {
		// const response = await fetch(`https://ipapi.co/${ip}/json/`);
		// const data = await response.json();

		// const city = data.city?.toLowerCase();

		// Save both the city and a boolean for easy use
		context.locals.city = city;
		context.locals.region = region;
	} catch (error) {
		context.locals.city = null;
		context.locals.region = null;
	}

	return next();
});
