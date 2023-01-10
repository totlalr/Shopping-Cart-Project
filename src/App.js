import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

//CONTEXT
import ProductContextProvider from "./context/ProductContextProvider";
import CardContextProvider from "./context/CardContextProvider";
//Components
import Store from "./components/Store";
import ProductDetials from "./components/ProductDetials";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";

function App() {
  return (
    <ProductContextProvider>
      <CardContextProvider>
        <Navbar />
        <Switch>
          <Route path="/products/:id" component={ProductDetials} />
          <Route path="/products" component={Store} />
          <Route path="/cart" component={ShopCart} />
          <Redirect to="/products" />
        </Switch>
      </CardContextProvider>
    </ProductContextProvider>
  );
}

export default App;
