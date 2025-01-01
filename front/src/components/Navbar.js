import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                    <a class="navbar-brand" href="#">FlashCard</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link className="nav-link" to="/">Words</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/add-words">Add Words</Link>
                        </li>
                        <li class="nav-item">
                            <Link  className="nav-link" to="/review">Review</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/reading">Reading</Link>
                        </li>
                        </ul>
                    </div>
                </div>
                
            </nav>
            
        </>
    )
}

export default Navbar