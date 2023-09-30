import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { z } from 'zod'
import type { APIRoute } from 'astro'
import { createContext } from './context'
import { tProcedure, tRouter } from './trpc'

const router = tRouter({
  // Add your procedures
  greet: tProcedure.input(z.string()).query(({ input }) => `Hello, ${input} !`),
})

// The Astro API route, handling all incoming HTTP requests.
export const all: APIRoute = ({ request }) => {
  return fetchRequestHandler({
    req: request,
    endpoint: '/trpc',
    router,
    createContext,
  })
}

export type AppRouter = typeof router
