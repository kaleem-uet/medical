
import { useRoutes } from "react-router-dom";
import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';
import MainLayout from '../layout/MainLayout';
import MinimalLayout from '../layout/MinimalLayout'
// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('../pages/dashboard')));

// render - sample page
// const SamplePage = Loadable(lazy(() => import('../pages/extra-pages/SamplePage')));

// render - utilities
// const Typography = Loadable(lazy(() => import('../pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('../pages/components-overview/Color')));
// const Shadow = Loadable(lazy(() => import('../pages/components-overview/Shadow')));
// const AntIcons = Loadable(lazy(() => import('../pages/components-overview/AntIcons')));


// render - login
const AuthLogin = Loadable(lazy(() => import('../pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('../pages/authentication/Register')));

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
          path: '/login',
          element: <AuthLogin />
        },
        {
          path: '/register',
          element: <AuthRegister />
        },
        {
          path: 'dashboard',
          children: [
            {
              path: 'default',
              element: <DashboardDefault />
            },
           
            {
              path: 'register',
              element: <AuthRegister />
            },
            {
              path: 'login',
              element: <AuthLogin />
            },
          ]
        },
       
      ]
    },
  ]);
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

  const LoginRoutes  = useRoutes([
    {
      path: "/",
      element: <MinimalLayout />,
      children: [
        {
          path: '/',
          element: < AuthLogin/>
        },
        {
          path: '/register',
          element: < AuthRegister/>
        }
      ]
    },
  ]);

  const isLogin=true
  return (
    <>
    {isLogin ? (<> {MainRoutes} </>):(<>{LoginRoutes}</>)}
    </>
  );
}

export default CustomRoute;
