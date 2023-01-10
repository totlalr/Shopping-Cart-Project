import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

//CONTEXT
import ProductContextProvider from "./context/ProductContextProvider";
//Components
import Store from "./components/Store";
import ProductDetials from "./components/ProductDetials";

function App() {
  return (
    <ProductContextProvider>
      <Switch>
        <Route path="/products/:id" component={ProductDetials} />
        <Route path="/products" component={Store} />
        <Redirect to="/products" />
      </Switch>
    </ProductContextProvider>
  );
}

export default App;
