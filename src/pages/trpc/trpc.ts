import { initTRPC } from '@trpc/server'


const t = initTRPC.create()

export const tRouter = t.router;
export const tProcedure = t.procedure;