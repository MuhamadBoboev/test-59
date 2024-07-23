import { queryClient } from '@shared/api'
import { PropsWithChildren } from 'react'
import { QueryClientProvider } from 'react-query'


export const ApiProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
