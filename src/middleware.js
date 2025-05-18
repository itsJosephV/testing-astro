// src/middleware.js
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
	const request = context.request;
	const city = request.headers.get("X-Vercel-IP-City");

	try {
		// const response = await fetch(`https://ipapi.co/${ip}/json/`);
		// const data = await response.json();

		// const city = data.city?.toLowerCase();

		// Save both the city and a boolean for easy use
		context.locals.city = city;
	} catch (error) {
		context.locals.city = null;
		context.locals.isTenerife = false;
	}

	return next();
});
