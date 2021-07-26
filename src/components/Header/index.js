import React from 'react';
import './index.css'

function Header() {
    const loompaLogo = `https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png`

    return (
        <div className='header'>
            <img className="logo" src={loompaLogo} alt="Logo" />
            <header>Oompa Loompa's crew</header>
        </div>
    );
}

export default Header;