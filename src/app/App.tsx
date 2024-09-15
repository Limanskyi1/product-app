import { AppProvider } from "./providers/AppProvider";
import { RouterProvider } from "./providers/RouterProvider";
import "react-toastify/ReactToastify.min.css";

export const App = () => {
  return (
    <AppProvider>
      <RouterProvider />
    </AppProvider>
  );
};
