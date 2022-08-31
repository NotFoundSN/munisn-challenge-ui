import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import './View.css';
import Row from './Row';
import "../../servicios/api";
import { tryView } from '../../servicios/api';

function View() {
    const [usuarios, modUsuarios] = useState([]);
    let barra = useParams();
    const navigate = useNavigate();

    const consultar = async () => {                                             //Usa el token para aintentar obtener los datos
        let datos = await tryView(window.sessionStorage.getItem('token'));
        if (datos.status===200)
        {
            modUsuarios(datos.data);
            return true;
        }
        else
        {
            window.sessionStorage.clear()
            return false;
        }
    };

    //component did mount
    useEffect(() => {
        if(!window.sessionStorage.getItem('name') || window.sessionStorage.getItem('name')==='undefined')
        {
            navigate('/login');
        }
        else
        {
            if (consultar())
            {
                let titulo = document.getElementById("titulo");
                titulo.innerHTML = window.sessionStorage.getItem('name');
            }
            else
            {
                navigate('/login');
            }
        }
    }, [barra.id]);

    return (
        <React.Fragment>
            <div className='tabla'>
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>DNI</th>
                            <th>Telefono</th>
                            <th>E-Mail</th>
                            <th>Direccion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(usuario => { return <Row elemento={usuario} key={`usuario${usuario.dni}`} /> })}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}

export default View;