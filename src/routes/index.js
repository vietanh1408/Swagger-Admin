import App from "../App";
import Dasboard from "../components/Dasboard";
import Login from "../features/Authentication/login";

export const routes = [
  // {
  //   path: "/",
  //   exact: true,
  //   component: () => <App />,
  //   isProtected: false,
  // },
  {
    path: "/dashboard",
    exact: true,
    component: () => <Dasboard />,
    isProtected: true,
  },
  {
    path: "/login",
    exact: true,
    component: () => <Login />,
    isProtected: false,
  },
];
