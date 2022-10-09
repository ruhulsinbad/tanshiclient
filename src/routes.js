import AllProducts from "./components/AllProducts";
import CakeInput from "./components/CakeInput";
import CoffeInput from "./components/CoffeInput";
import Home from "./components/Home";
import List from "./components/List";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/cake", element: <CakeInput /> },
  { path: "/coffe", element: <CoffeInput /> },
  { path: "/calculate", element: <List /> },
  { path: "/all", element: <AllProducts /> },
];

export default routes;
