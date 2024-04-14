import { createTRPCProxyClient, httpLink } from '@trpc/client'

import { HttpService } from '@connect-sphere/config'

import { type AppRouter } from './api/router'

export const client = createTRPCProxyClient<AppRouter>({ links: [httpLink({ url: `${HttpService.serverUrl}/trpc` })] })
