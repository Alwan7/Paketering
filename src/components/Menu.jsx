import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signout, isAuthenticated } from './auth';


export default function Menu() {

    let history = useHistory();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className='nav-link' to='/'>Home</Link>

                    <Link className='nav-link' to='/shop'>Shop</Link>

                    {isAuthenticated() && isAuthenticated().user.role === 0 && (
                        <Link className='nav-link' to='/user/dashboard'>Dashboard</Link>
                    )}


                    {isAuthenticated() && isAuthenticated().user.role === 1 && (
                        <Link className='nav-link' to='/admin/dashboard'>Dashboard</Link>
                    )}


                    {!isAuthenticated() && (
                        <>
                            <Link className='nav-link' to='/signin'>Signin</Link>
                            <Link className='nav-link' to='/signup'>Signup</Link>
                        </>
                    )}
                    {isAuthenticated() && (
                        <span
                            className='nav-link'
                            onClick={() => signout(() => {
                                history.push('/')
                            })}
                            style={{ cursor: 'pointer', color: '#b2b2b2' }}>Signout</span>
                    )}
                </div>
            </div>
        </nav>
    )
}











