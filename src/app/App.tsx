import { AppProvider } from "./providers/AppProvider";
import { DragAndDropProvider } from "./providers/DndProvider";
import { RouterProvider } from "./providers/RouterProvider";
import "react-toastify/ReactToastify.min.css";

export const App = () => {
  return (
    <AppProvider>
      <DragAndDropProvider>
        <RouterProvider />
      </DragAndDropProvider>
    </AppProvider>
  );
};
