import React from 'react';

function Row(props) {
    console.log(props)
    return (
        <React.Fragment>
                <tr>
                    <td>{props.elemento.nombre}</td>
                    <td>{props.elemento.apellido}</td>
                    <td>{props.elemento.DNI}</td>
                    <td>{props.elemento.telefono}</td>
                    <td>{props.elemento.email}</td>
                    <td>{props.elemento.direccion}</td>
                </tr>
        </React.Fragment>
    );
}

export default Row;