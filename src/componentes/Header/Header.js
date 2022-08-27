import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header(props) {
    //const [producto, modProducto] = useState({});
    //let barra = useParams();
    const navigate = useNavigate();

    //component did mount
    /*useEffect(() => {
        getConsultas.getProducto(barra.id).then(prod => { modProducto(prod); })
    }, [barra.id]);*/
    /*
    const handleClick = event => {
        console.log(event.detail);
        switch (event.detail) {
            case 1: {
                console.log('single click');
                break;
            }
            case 2: {
                console.log('double click');
                break;
            }
            case 3: {
                console.log('triple click');
                //ir a admin
                navigate('/login');
                break;
            }
            default: {
                break;
            }
        }
    };
    */
    const handleClick = event => {
        if (event.detail === 3) {
            navigate('/login');
            console.log('double click');
        }
        if (event.detail === 4) {
            navigate('/');
            console.log('double click');
        }
    };
    

    return (
        <React.Fragment>
            <div className='header'>
                <button onClick={handleClick} className='img'><img src={logo} alt='logo' /></button>
                <h1>Registro</h1>
            </div>
        </React.Fragment>
    );
}

export default Header;