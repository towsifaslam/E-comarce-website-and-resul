import Categories from "./Components/Categories";
import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";
import Loging from "./pages/Loging";
import ProductPage from "./pages/ProductPage";
import Resul from "./pages/Resul";

function App() {
  return (
    <div className="App">
      <Home />
      <CategoryPage />
      <ProductPage />
      <Cart />
      <Loging />
      <Resul />
    </div>
  );
}

export default App;
