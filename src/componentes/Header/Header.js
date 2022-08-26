import React, { useEffect, useState } from 'react';
import logo from 'https://www.sannicolasciudad.gob.ar/assets/logo-new-3f9c047ccd00a3e3bce585e0c79920cd689faf3ef123b4b694a81aacc823c070.svg';
//import { useParams } from 'react-router-dom';
//import './Header.css';

function Header(props) {
    //const [producto, modProducto] = useState({});
    //let barra = useParams();

    //component did mount
    /*useEffect(() => {
        getConsultas.getProducto(barra.id).then(prod => { modProducto(prod); })
    }, [barra.id]);*/

    return (
        <React.Fragment>
            <img src={logo} alt='imagen'/>asd
        </React.Fragment>
    );
}

export default Header;