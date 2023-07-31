import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import CartPage from "./pages/CartPage";
import { AppContextProvider } from "./context/AppContext";

const App: React.FC = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/cart", element: <CartPage /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <AppContextProvider>
      <RouterProvider router={route} />
    </AppContextProvider>
  );
};

export default App;
