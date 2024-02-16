import React from "react";
import {Link} from "react-router-dom";
import './Navbar.css';


export default function Navbar(){

    const Whiteline = ({color}) =>(
        <hr 
        style={{color : color,
        backgroundColor : color,
        height : 2,
        width : 700
    }}
    
     />
    )

    return(
        <div>
          <nav className="navbar">
            <Whiteline color = "white" />
            <div className="links">
            <Link to='/'>About Us  </Link>
            <Link to='/Clients'>Clients  </Link>
            <Link to='/brands'>Work  </Link>
            </div>
            </nav>  
        </div>
    )

}