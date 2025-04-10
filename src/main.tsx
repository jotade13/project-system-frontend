import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router';
import router from './router';
import { ThemeProvider } from "@/components/theme-provider"



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
