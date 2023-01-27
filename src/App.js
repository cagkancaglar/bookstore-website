// react
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { setCategories, setProducts } from "./store/category";
// components
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Category from "././components/Category";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";

function App() {
  const dispatch = useDispatch();

  const getCategories = async () => {
    let res = await fetch(
      "https://assign-api.piton.com.tr/api/rest/categories"
    );

    let data = await res.json();
    dispatch(setCategories(data.category));
    for await (let category of data.category) {
      await getAllProductsByCategoryId(category.id,category); 
    }
  };

  const getAllProductsByCategoryId = async (category_id,category) => {
    let res = await fetch(
      "https://assign-api.piton.com.tr/api/rest/products/" + category_id
    );
    let data = await res.json();
    let new_obj ={...category, products:data.product} 
    dispatch(setProducts(new_obj));
    return new_obj;
  };


  useEffect(() => {
    getCategories();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/category/:category_id" element={<Category />}></Route>
        <Route path="/category/:category_id/:product_id" element={<ProductDetail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
