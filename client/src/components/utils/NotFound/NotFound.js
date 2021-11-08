import React from 'react'
import './notfound.css'
import Header from '../../header/Header'
function NotFound() {
    return (
        <div>
        <Header />
        <div class="not-found-main">
            <h1> 404 || Not Found </h1>
            <h4>Try Again , by loging in or loging out</h4>
            <br  />
            <button id="a-notfound" class="btn btn-outline-success my-2 my-sm-0" ><a  href="/">Home</a></button>
        </div>
        </div>
    )
}

export default NotFound
