import React from 'react';
import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header(props) {
    const navigate = useNavigate();

    const handleClick = event => {
        if (event.detail === 3) {
            navigate('/view');
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
                <h1 id="titulo">Registro</h1>
            </div>
        </React.Fragment>
    );
}

export default Header;