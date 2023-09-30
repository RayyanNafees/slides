
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type {AppRouter} from './pages/trpc/[trpc]'

export default createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:4321/trpc',
    }),
  ],
});