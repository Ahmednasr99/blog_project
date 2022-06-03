import React from "react";
import './style.css';
import { Link } from "react-router-dom";




const Headers = ()=>{
    return(
        <header className="header">
            <div className="headerItems">
            <nav>
                <Link to="/posts">Home</Link>

                <Link to="/new">Add apost</Link>

                <Link to="#">About us </Link>
                
                <Link to="#">Contact us</Link>
                
            </nav>
            </div>

        </header>
    )
}

export default Headers