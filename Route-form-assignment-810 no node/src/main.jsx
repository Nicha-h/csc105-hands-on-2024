import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //import these modules
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./index.css";
import App from "./App.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import FavouritePage from "./pages/FavouritePage.jsx";
import FavouriteDetailPage from "./pages/FavouriteDetailPage.jsx";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    children: [
      {
        path: "/fav",
        element: (
          <FavouritePage/>
        )
      },
      {
        path: "/fav/:PostId", 
        element: <FavouriteDetailPage />
      },  
    ],
  },
  { 
    path: "*", 
    element: <NotFoundPage />
  },
  {
    path: "/signup",
    element: <SignUpPage/>
  },
  {
    path: "/login", 
    element: (
      <LoginPage/>
    )
  },
 
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
