import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Categories from "./components/Categories"
import ProductDetail from "./components/ProductDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/product-detail" element={<ProductDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
