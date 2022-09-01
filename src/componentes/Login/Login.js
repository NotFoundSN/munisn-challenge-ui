import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Login.css';
import "../../servicios/api";
import { tryLogin } from '../../servicios/api';

function Form(props) {
    let barra = useParams();
    const navigate = useNavigate();
    let modal = document.getElementById("myModal");

    const close = () => {
        modal.style.display = "none";
    };


    window.onclick = function(event) {
        if (event.target===modal) {
          modal.style.display = "none";
        }
      }

    const signin = async () => {
        let respuesta = await tryLogin({
            username: `${document.getElementById("user").value}`,
            password: `${document.getElementById("pass").value}`
        });
        if (respuesta.status === 200) {
            window.sessionStorage.setItem("token", respuesta.data.token);
            window.sessionStorage.setItem("name", respuesta.data.name);
            navigate('/view');
        }
        else {
            document.getElementById('modalSay').innerHTML=respuesta.data;
            modal.style.display = "block";
        }
    };

    useEffect(() => {
        modal = document.getElementById("myModal");
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
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <button type="button" onClick={close} className='close'>&times;</button>
                    <p id='modalSay'></p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Form;