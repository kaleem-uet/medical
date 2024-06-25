
import { useRoutes } from "react-router-dom";
import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';
import MainLayout from '../layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('../pages/dashboard')));

// render - sample page
// const SamplePage = Loadable(lazy(() => import('../pages/extra-pages/SamplePage')));

// render - utilities
// const Typography = Loadable(lazy(() => import('../pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('../pages/components-overview/Color')));
// const Shadow = Loadable(lazy(() => import('../pages/components-overview/Shadow')));
// const AntIcons = Loadable(lazy(() => import('../pages/components-overview/AntIcons')));

function CustomRoute() {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <DashboardDefault />
        },
        {
          path: 'color',
          element: <Color />
        },
        {
          path: 'dashboard',
          children: [
            {
              path: 'default',
              element: <DashboardDefault />
            }
          ]
        },
       
      ]
    },
  ]);
  return (
    <>
      {routes}
    </>
  );
}

export default CustomRoute;
