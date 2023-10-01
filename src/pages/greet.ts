import type { APIRoute } from "astro";

export const all: APIRoute = async({request}) => new Response('Rayyan', {status: 200});