import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Login.css';
import "../../servicios/api";
import { tryLogin } from '../../servicios/api';

function Form(props) {
    let barra = useParams();

    const signin = async () => {
        let token = await tryLogin({
            username: `${document.getElementById("user").value}`,
            password: `${document.getElementById("pass").value}`
        });
        window.sessionStorage.setItem("token", token.token);
        window.sessionStorage.setItem("name", token.name);
    };

    //component did mount
    
    /*useEffect(() => {
        let titulo = document.getElementById("titulo");
        titulo.innerHTML = usuario;
    }, [usuario]);*/
    useEffect(() => {
        let titulo = document.getElementById("titulo");
        titulo.innerHTML = "Login";
    }, [barra.id]);

    return (
        <React.Fragment>
            <div className='centrado'>
                <form className='formulario'>
                    <div className='lineaLogin'>
                        <label htmlFor='user'>usuario</label>
                        <input type='text' id='user' name='user'></input>
                    </div>
                    <div className='lineaLogin'>
                        <label htmlFor='pass'>contrasenia</label>
                        <input type='password' id='pass' name='pass'></input>
                    </div>
                    <div className='lineaLogin'>
                        <button type="button" onClick={signin} className='login'>Login</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Form;