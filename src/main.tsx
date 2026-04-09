import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js")
      .then(() => console.log("SW registrado"))
      .catch((err) => console.log("Error SW:", err));
  });
}

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <QueryClientProvider client={queryClient} >
      <Router />
    </QueryClientProvider>
  </StrictMode>,
)
