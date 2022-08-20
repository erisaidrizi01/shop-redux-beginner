import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Quote from "./components/Quote";
import Categories from "./Containers/Categories/Categories";
import SelectedCategory from "./Containers/Categories/SelectedCategory";
import Product from "./Containers/Product";
import Products from "./Containers/Products";
import EditProduct from "./Containers/EditProduct/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route exact path='/category' element={<Categories />}></Route>
        <Route path='/category/:name' element={<SelectedCategory />}></Route>
        <Route path='/products/:productid' element={<Product />}></Route>
        <Route
          path='/products/:productid/edit'
          element={<EditProduct />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
