import React from "react";
import './carts.css'
import { Link } from "react-router-dom";

const Carts = () => {
    return (
        <div className="container">
            <h1>Carts component!</h1>
            <div>
                <h2>Todos os Carrinhos do aplicativo</h2>
            </div>
            <div>
                <p>Consulte abaixo todos os carrinhos nas opções para selecionar os filtros.</p>

            </div>
            <div>
                <Link to="/">
                    <button>Voltar</button>
                </Link>
                <Link to="/carts">
                <button>Criar Cart</button>
                </Link>
                <Link to="/products">
                    <button>Buscar Cart</button>
                </Link>
                <div><p>Query aqui: <input></input></p>
                </div>
            </div>
            <hr></hr>
            <div className="tabela">
                <table>
                    <tr>
                        <th>Numero</th>
                        <th>Usuario</th>
                        <th>Qtde Itens</th>
                        <th>Valor</th>
                    </tr>

                    <tr>
                        <td>CART00001</td>
                        <td>Maria Anders</td>
                        <td>5</td>
                        <td>R$1234</td>
                    </tr>
                    <tr>
                        <td>CART00002</td>
                        <td>Francisco Chang</td>
                        <td>2</td>
                        <td>R$355</td>
                    </tr>
                    <tr>
                        <td>CART00003</td>
                        <td>Antonio</td>
                        <td>6</td>
                        <td>R$7500</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Carts;