import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router';
import router from './router';
import { ThemeProvider } from "./providers/theme-provider"
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './pages/login/utils/http';
import { Toaster } from "@/components/ui/sonner"

import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n} >
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <Toaster />
        </QueryClientProvider>
      </ThemeProvider>
    </I18nextProvider>
  </StrictMode>
)
