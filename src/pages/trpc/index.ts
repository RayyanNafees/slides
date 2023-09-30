
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type {AppRouter} from './[trpc]'

export default createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:4321/trpc',
    }),
  ],
});