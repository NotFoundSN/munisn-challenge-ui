import React, { useEffect, useState } from 'react';
//import { useParams } from 'react-router-dom';
import './Form.css';

function Form(props) {
    //const [producto, modProducto] = useState({});
    //let barra = useParams();

    //component did mount
    /*useEffect(() => {
        getConsultas.getProducto(barra.id).then(prod => { modProducto(prod); })
    }, [barra.id]);*/

    return (
        <React.Fragment>
            <div className='centrado'>
                <form  className='formulario'>
                    <div className='linea'>
                        <p>Nombre</p>
                        <input type='text'></input>
                    </div>
                    <div className='linea'>
                        <p>Apellido</p>
                        <input type='text'></input>
                    </div>
                    <div className='linea'>
                        <p>Número de DNI</p>
                        <input type=''></input>
                    </div>
                    <div className='linea'>
                        <p>Número de Teléfono</p>
                        <input type='tel'></input>
                    </div>
                    <div className='linea'>
                        <p>E-mail</p>
                        <input type='email'></input>
                    </div>
                    <div className='linea'>
                        <p>Domicilio</p>
                        <input type=''></input>
                    </div>
                    <div className='linea'>
                        <button>Registrar</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Form;