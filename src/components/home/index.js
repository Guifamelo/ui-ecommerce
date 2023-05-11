import React from "react";
import './home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <h1>Home component!</h1>
            <div>
                <h2>Seja bem vindo à home page do seu aplicativo</h2>
            </div>
            <div>
                <p>Consulte abaixo clique nas opções para selecionar os filtros.</p>

            </div>
            <div>
                <a href="/products"><button>Produtos</button></a>
                <a href="/carts"><button>Carrinhos</button></a>
                <a href="/users"><button>Usuarios</button></a>
            </div>
        </div>
    )
}
export default Home;