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
            <Header/>
            <h1>Produtos...</h1> 
            <span>Aproveite as promoções e descontos exclusivos que oferecemos regularmente em nossa loja. Cadastre-se em nossa newsletter para receber as últimas novidades, ofertas e promoções.</span>
            <div className="cards-box">
            {products.map((product,key) => {
                return(
                    <div className="card">
                        <img className="img_card" src={product.productImage} alt="imagem do produto"></img>
                        <h3>{product.productName}</h3>
                        <p>{product.productDescription}</p>
                        <p>Valor: R$ {product.productPrice}</p>
                    </div>
                )

            })}
            </div>          

        </div>
    )
}

export default Products