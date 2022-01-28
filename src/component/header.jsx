
import React from 'react';
import { Link } from 'react-router-dom';
const header = () => {
    return (
        <>
  
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Signup</Link>
                </li>
                <li>
                <Link className="nav-link" to="/signup">Nos produits</Link>
                </li>
            </ul>
        </>
    );
};

export default header;