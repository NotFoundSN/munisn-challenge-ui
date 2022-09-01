import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { tryRegister } from '../../servicios/api';
import './Form.css';

function Form(props) {
    let barra = useParams();
    let modal = document.getElementById("myModal");
    let errores = document.getElementById("errores");

    const close = () => {
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target===modal) {
          modal.style.display = "none";
        }
      }
    const mostrarErrores = async (fallos) => {
        errores.innerHTML = "errores <ul>";
        errores.innerHTML += await fallos.map(fallo => {
            return `<li>${fallo.msg}</li>`;
        });
        errores.innerHTML += '</ul>';
    }

    const reg = async () => {
        errores.style.display="none";
        let respuesta = await tryRegister({
            name: `${document.getElementById("name").value}`,
            surname: `${document.getElementById("surname").value}`,
            DNI: `${document.getElementById("DNI").value}`,
            phone: `${document.getElementById("phone").value}`,
            email: `${document.getElementById("mail").value}`,
            direction: `${document.getElementById("direction").value}`
        });
        if (respuesta.status===201)
        {
            document.getElementById('modalSay').innerHTML=respuesta.data;
            modal.style.display = "block";
        }
        else if (respuesta.status===401)
        {
            mostrarErrores(respuesta.data);
            errores.style.display="block";
            document.getElementById('modalSay').innerHTML='Error en los datos ingresados';
            modal.style.display = "block";
        }
        else
        {
            document.getElementById('modalSay').innerHTML=respuesta.data;
            modal.style.display = "block";
        }
    };

    //component did mount
    useEffect(() => {
        errores = document.getElementById("errores");
        modal = document.getElementById("myModal");
        let titulo = document.getElementById("titulo");
        titulo.innerHTML = "Registro";
    }, [barra.id]);

    return (
        <React.Fragment>
            <div className='centrado'>
                <form  className='formulario'>
                    <div className='linea'>
                        <label htmlFor='name'>Nombre</label>
                        <input type='text' id='name' name='name'></input>
                    </div>
                    <div className='linea'>
                        <label htmlFor='surname'>Apellido</label>
                        <input type='text' id='surname' name='surname'></input>
                    </div>
                    <div className='linea'>
                        <label htmlFor='DNI'>Número de DNI</label>
                        <input type='number' id='DNI' name='DNI'></input>
                    </div>
                    <div className='linea'>
                        <label htmlFor='phone'>Número de Teléfono</label>
                        <input type='tel' id='phone' name='phone'></input>
                    </div>
                    <div className='linea'>
                        <label htmlFor='mail'>E-mail</label>
                        <input type='email' id='mail' name='mail'></input>
                    </div>
                    <div className='linea'>
                        <label htmlFor='direction'>Domicilio</label>
                        <input type='text' id='direction' name='direction'></input>
                    </div>
                    <div className='linea'>
                        <button type="button" onClick={reg} className='register'>Registrar</button>
                    </div>
                </form>
            </div>
            <div className='errores' id='errores'>
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