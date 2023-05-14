import React from "react"
import './products.css'
import { useState, useEffect } from "react"
import axios from "axios"
import Header from "../header"

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = "http://localhost:3333/products";

        axios.get(url)
            .then(res => {
                console.log(res);
                const data = res.data;
                console.log(data);
                setProducts(data)

            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <Header />

            <section className="section">
                <h2>Produtos em Destaque</h2>
                <ul>
                    <li>
                        <img src="http://lorempixel.com.br/400/200" alt="Produto 1"></img>
                        <h3>Produto 1</h3>
                        <p>R$ 99,99</p>
                    </li>
                    <li>
                        <img src="http://lorempixel.com.br/400/200" alt="Produto 2"></img>
                        <h3>Produto 2</h3>
                        <p>R$ 149,99</p>
                    </li>
                    <li>
                        <img src="http://lorempixel.com.br/400/200" alt="Produto 3"></img>
                        <h3>Produto 3</h3>
                        <p>R$ 199,99</p>
                    </li>
                </ul>
            </section>
            <section className="section">
                <h2>Recomendados</h2>
                <ul>
                    <li>
                        <img src="produto1.jpg" alt="Produto 1"></img>
                        <h3>Produto 1</h3>
                        <p>R$ 99,99</p>
                    </li>
                    <li>
                        <img src="produto2.jpg" alt="Produto 2"></img>
                        <h3>Produto 2</h3>
                        <p>R$ 149,99</p>
                    </li>
                    <li>
                        <img src="produto3.jpg" alt="Produto 3"></img>
                        <h3>Produto 3</h3>
                        <p>R$ 199,99</p>
                    </li>
                </ul>
            </section>
            <section id="tabela" name="tabela">
                <div class="product-list">
                    <table className="table">
                        <thead className="thead">
                            <tr>
                                <th className="th">Produto</th>
                                <th className="th">Descrição</th>
                                <th className="th">Preço</th>
                                <th className="th">Disponibilidade</th>
                                <th className="th">Qtde</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, key) => {
                                
                                console.log(product.length)

                                return (
                                    <tr>
                                        <td>{product.productName}</td>
                                        <td>{product.productDescription}</td>
                                        <td>R$ {product.productPrice},00</td>
                                        <td>Em estoque</td>
                                        <td>{product.productQuantity}</td>
                                    </tr>
                                )
                            })}                            
                            
                        </tbody>
                    </table>
                </div>
            </section>



            

        </div>
    )
}

export default Products