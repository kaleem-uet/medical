import { lazy } from 'react';
import { useRoutes } from "react-router-dom";

// project import
import Loadable from '../components/Loadable';
import MainLayout from '../layout/MainLayout';


// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('../pages/dashboard')));



// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = useRoutes([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <DashboardDefault />
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
export default MainRoutes;
