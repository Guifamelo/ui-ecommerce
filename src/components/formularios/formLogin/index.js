import React, { Fragment } from "react";
import './formLogin.css'


const FormLogin = () => {


    return (
        <div>
            <div class="container-login">
        <form className="form">
            <h2 className="h2">Entrar</h2>
            <div class="form-group">
                <label className="label" for="email">E-mail:</label>
                <input className="input" type="email" id="email" name="email" required></input>
            </div>
            <div class="form-group">
                <label className="label" for="senha">Senha:</label>
                <input className="input" type="password" id="senha" name="senha" required></input>
            </div>
            <button className="button" type="submit">Entrar</button>
        </form>
    </div>

        </div>
    )
}
export default FormLogin