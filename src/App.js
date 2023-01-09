import "./App.css";

//CONTEXT
import ProductContextProvider from "./context/ProductContextProvider";
//Components
import Store from "./components/Store";

function App() {
  return (
    <ProductContextProvider>
      <Store />
    </ProductContextProvider>
  );
}

export default App;
