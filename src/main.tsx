import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FavoriteMangaListProvider } from "./context/FavoriteMangaListContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FavoriteMangaListProvider>
      <App />
    </FavoriteMangaListProvider>
  </StrictMode>
);
