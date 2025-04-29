import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router';
import router from './router';
import { ThemeProvider } from "./providers/theme-provider"
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './pages/login/utils/http';
import { Toaster } from "@/components/ui/sonner"

import './i18n';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
)
