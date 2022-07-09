import React from 'react';
import "./LogoMenu.css";

const LogoMenu = () => {
       
    function navTooglerFunction() {
        alert("Responsive Nav is not activated!!")
    }
    return (

        <>
         
            <div className="logo-nav">
          {/* Logo  */}
                <div className="logo">
                    <a href="#"><img src="./img/logo.png" alt="Main Logo" /></a>
                </div>

          {/* Responsive Toggle Btn */}
          <a href="#" className='toggle-btn' id='toggler' onClick={navTooglerFunction}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </a>

          {/* Nav  */}           
           <nav>
            <ul id='toggleMenu'> 
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">premium products</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Start a project</a></li>
            </ul>
           </nav>
           
        </div>



            
        </>
    );
    
};

export default LogoMenu;