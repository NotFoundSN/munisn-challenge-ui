import React, { useEffect, useState } from 'react';
//import { useParams } from 'react-router-dom';
import './Login.css';

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
                <form className='formulario' >
                    <div className='linea'>
                        <label for='user'>usuario</label>
                        <input type='text' id='user' name='user'></input>
                    </div>
                    <div className='linea'>
                        <label for='pass'>contrasenia</label>
                        <input type='text' id='pass' name='pass'></input>
                    </div>
                    <div className='linea'>
                        <button className='login'>Login</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Form;