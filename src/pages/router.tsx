import { createHashRouter } from "react-router-dom";
import MainPage from "./main/main-page";
import FormPage from "./form/index/form-page";
import Root from "./root/root";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/create",
        element: <FormPage />,
      },
    ],
  },
]);

export default router;
