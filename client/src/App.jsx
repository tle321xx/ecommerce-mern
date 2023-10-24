import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Policy from "./components/pages/Policy";
import Pagenotfound from "./components/pages/Pagenotfound";
import Register from "./components/pages/Auth/Register";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/pages/Auth/Login";
import DashBoard from "./components/pages/user/DashBoard";
import Private from "./components/Routes/Private";
import ForgotPassword from "./components/pages/Auth/ForgotPassword";
import AdminDashBoard from "./components/pages/Admin/AdminDashBoard";
import AdminRoute from "./components/Routes/AdminRoute";
import CreateCategory from "./components/pages/Admin/CreateCategory";
import CreateProduct from "./components/pages/Admin/CreateProduct";
import Users from "./components/pages/Admin/Users";
import Order from "./components/pages/user/Order";
import Profile from "./components/pages/user/Profile";
import Products from "./components/pages/Admin/Products";
import UpdateProduct from "./components/pages/Admin/UpdateProduct";
import Search from "./components/pages/Search";
import ProductDetail from "./components/pages/ProductDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<Private />}>
          <Route path="user" element={<DashBoard />} />
          <Route path="user/orders" element={<Order />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashBoard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
