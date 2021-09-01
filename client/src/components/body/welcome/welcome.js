import React from 'react'
// import {Link} from 'react-router-dom'

import './welcome.css'

function Welcome() {
    return (
       
            <div>

           
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <div className="container-fluid">
                 <a className="navbar-brand" href="/">Available</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                        </li>
                    </ul>
                    <span>
                    <a className="nav-link" href="/register">Register As a Professional</a> 
                    </span>  
                    
                    <span>
                    <a className="nav-link" href="/login">Login</a> 
                    </span>  
                    <span>
                    <a className="nav-link" href="/register">Register</a> 
                    </span>  
                    
                    
                </div>
             </div>
            </nav>
           
            
        <div className="welcome_page">
            
            <h2>Hello everyone!</h2>
           

        </div>
        
        </div>
    )
}

export default Welcome
