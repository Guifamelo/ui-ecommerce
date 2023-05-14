import React from "react";
import './home.css'
import { Link } from "react-router-dom";
import Header from "../header";
import FormLogin from "../formularios/formLogin";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="login-box">
                <FormLogin />
            </div>
            <div className="container">
                <h1>Home component!</h1>
                <div>
                    <h2>Seja bem vindo à home page do seu aplicativo</h2>
                    <p>Bem-vindo à nossa loja virtual! Aqui você encontrará uma grande variedade de produtos para atender a todas as suas necessidades. Desde eletrônicos a roupas, de produtos de beleza a artigos esportivos, temos tudo o que você precisa para tornar sua vida mais fácil e mais agradável.</p>
                    <p>Nossa loja é comprometida em fornecer a você uma experiência de compra online fácil, segura e agradável. Oferecemos uma ampla gama de opções de pagamento e entregamos diretamente na sua porta, para que você possa desfrutar dos seus produtos sem precisar sair de casa.                    </p>
                </div>
                <div>
                    <p>Consulte abaixo clique nas opções para selecionar os filtros.</p>

                </div>
                <div className="button-box">
                    <a href="/products"><button className="button">Produtos</button></a>
                    <a href="/carts"><button className="button">Carrinhos</button></a>
                    <a href="/users"><button className="button">Usuarios</button></a>
                </div>
                <div>
                    <h2>Populares</h2>
                </div>
                <div className="card-box">
                    <div className="card">
                        <img className="img_card" href="" alt="imagem do produto"></img>
                        <h3>produto 01</h3>
                        <p>Descrição do produto</p>
                        <p>Valor: R$ xxx,xx</p>
                    </div>
                    <div className="card">
                        <img className="img_card" href="" alt="imagem do produto"></img>
                        <h3>produto 02</h3>
                        <p>Descrição do produto</p>
                        <p>Valor: R$ xxx,xx</p>
                    </div>
                    <div className="card">
                        <img className="img_card" href="" alt="imagem do produto"></img>
                        <h3>produto 03</h3>
                        <p>Descrição do produto</p>
                        <p>Valor: R$ xxx,xx</p>
                    </div>
                </div>
                <div>
                    <h2>Recomendados para você</h2>
                </div>
                <div className="card-box">
                    <div className="card">
                        <img className="img_card" href="" alt="imagem do produto"></img>
                        <h3>produto 04</h3>
                        <p>Descrição do produto</p>
                        <p>Valor: R$ xxx,xx</p>
                    </div>
                    <div className="card">
                        <img className="img_card" href="" alt="imagem do produto"></img>
                        <h3>produto 05</h3>
                        <p>Descrição do produto</p>
                        <p>Valor: R$ xxx,xx</p>
                    </div>
                    <div className="card">
                        <img className="img_card" href="" alt="imagem do produto"></img>
                        <h3>produto 06</h3>
                        <p>Descrição do produto</p>
                        <p>Valor: R$ xxx,xx</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;