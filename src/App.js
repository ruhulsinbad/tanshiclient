import "./App.css";
import ManagementHeader from "./components/ManagementHeader";
import ProductInput from "./components/ProductInput";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const element = useRoutes(routes);
  return (
    <>
      <div>
        <ManagementHeader />
        <ProductInput />

        {element}
      </div>
    </>
  );
}

export default App;
