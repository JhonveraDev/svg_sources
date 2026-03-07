import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from "./shared/context/FavoritesContext.tsx";

import App from './App.tsx';

import "./assets/styles/reset.css";
import "./assets/styles/global.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>,
);