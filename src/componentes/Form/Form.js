import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Form.css';

function Form(props) {
    //const [producto, modProducto] = useState({});
    let barra = useParams();

    //component did mount
    useEffect(() => {
        let titulo = document.getElementById("titulo");
        titulo.innerHTML = "Registro";
    }, [barra.id]);

    return (
        <React.Fragment>
            <div className='centrado'>
                <form  className='formulario'>
                    <div className='linea'>
                        <label for='name'>Nombre</label>
                        <input type='text' id='name' name='name'></input>
                    </div>
                    <div className='linea'>
                        <label for='surname'>Apellido</label>
                        <input type='text' id='surname' name='surname'></input>
                    </div>
                    <div className='linea'>
                        <label for='dni'>Número de DNI</label>
                        <input type='number' id='dni' name='dni'></input>
                    </div>
                    <div className='linea'>
                        <label for='phone'>Número de Teléfono</label>
                        <input type='tel' id='phone' name='phone'></input>
                    </div>
                    <div className='linea'>
                        <label for='mail'>E-mail</label>
                        <input type='email' id='mail' name='mail'></input>
                    </div>
                    <div className='linea'>
                        <label for='direction'>Domicilio</label>
                        <input type='text' id='direction' name='direction'></input>
                    </div>
                    <div className='linea'>
                        <button className='register'>Registrar</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Form;