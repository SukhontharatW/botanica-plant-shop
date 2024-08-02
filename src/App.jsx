import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/main.scss";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Error from "./Utilities/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
