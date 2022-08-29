import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Login.css';

function Form(props) {
    //const [producto, modProducto] = useState({});
    let barra = useParams();

    //component did mount
    useEffect(() => {
        let titulo = document.getElementById("titulo");
        titulo.innerHTML = "Login";
    }, [barra.id]);

    return (
        <React.Fragment>
            <div className='centrado'>
                <form className='formulario' >
                    <div className='lineaLogin'>
                        <label for='user'>usuario</label>
                        <input type='text' id='user' name='user'></input>
                    </div>
                    <div className='lineaLogin'>
                        <label for='pass'>contrasenia</label>
                        <input type='password' id='pass' name='pass'></input>
                    </div>
                    <div className='lineaLogin'>
                        <button className='login'>Login</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Form;