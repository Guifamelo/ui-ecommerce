import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsScreen from "./screens/productsScreen";
import HomeScreen from "./screens/homeScreen";
import UsersScreen from "./screens/usersScreen";
import CartsScreen from "./screens/cartsScreen";

const Routess = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<HomeScreen />}></Route>
                <Route path="/products" element={<ProductsScreen />}></Route>
                <Route path="/users" element={<UsersScreen />}></Route>
                <Route path="/carts" element={<CartsScreen />}></Route>
            </Routes>

        </BrowserRouter>
    )
}

export default Routess