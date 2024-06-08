import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PAGES, PAGE_NAMES } from "../const";
import { PageTitle } from "../PageTitle/PageTitle";
import { AccountLayout } from "../../components/layouts/account/AccountLayout/AccountLayout";
import { ErrorPage } from "../../components/pages/ErrorPage/ErrorPage";
import { MainPage } from "../../components/pages/MainPage/MainPage";
import { SchedulePage } from "../../components/pages/SchedulePage/SchedulePage";
import { AuthLayout } from "../../components/layouts/auth/AuthLayout/AuthLayout";
import { LoginPage } from "../../components/pages/LoginPage/LoginPage";

export const Router = () => {
  const router = createBrowserRouter(
    [
      {
        path: "*",
        element: (
          <>
            <ErrorPage />
            <PageTitle title={PAGE_NAMES.ERROR} />
          </>
        ),
      },

      {
        element: <PageTitle />,
        children: [
          {
            element: <AuthLayout />,
            children: [
              {
                path: PAGES.ROOT,
                element: <LoginPage />,
              },
            ],
          },

          {
            element: <AccountLayout />,
            children: [
              {
                path: PAGES.MAIN,
                element: <MainPage />,
              },
              {
                path: PAGES.SCHEDULE,
                element: <SchedulePage />,
              },
            ],
          },
        ],
      },
    ]

    // {
    //   basename: fixPath(process.env.REACT_APP_HOST_BASENAME),
    // }
  );

  return <RouterProvider router={router} />;
};
