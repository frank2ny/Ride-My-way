
import React from 'react';
import './css/menu.css';

function Menu() {
    return (
        <div class="navbar">
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact" style={{float:"right"}}>Sign Out</a>
        </div>



    );
}

export default Menu;
