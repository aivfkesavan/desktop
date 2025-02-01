import { QueryClientProvider } from '@tanstack/react-query';
import { HashRouter } from "react-router-dom";

import { queryClient } from "../../lib/query-client";

import { Toaster as SonnerToaster } from "../ui/sonner";
import { Toaster } from "../ui/toaster";

type props = Readonly<{
  children: React.ReactNode;
}>

function ClientWrapper({ children }: props) {
  return (
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        {children}

        <Toaster />

        <SonnerToaster
          position="top-center"
          className='draggable mt-4'
          toastOptions={{
            className: 'w-72',
          }}
        />
      </QueryClientProvider>
    </HashRouter >
  )
}

export default ClientWrapper
