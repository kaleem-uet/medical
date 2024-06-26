import { lazy } from 'react';
import { useRoutes } from "react-router-dom";

// project import
import Loadable from '../components/Loadable';
import MinimalLayout from '../layout/MinimalLayout'

// render - login
const AuthLogin = Loadable(lazy(() => import('../pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('../pages/authentication/Register')));

// ==============================|| AUTH ROUTING ||============================== //

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

export default LoginRoutes;
