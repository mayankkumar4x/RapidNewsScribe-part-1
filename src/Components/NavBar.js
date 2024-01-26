import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import {} from 'react-router'
export class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    {/* <Link to="business" >NewsApp</Link> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                             <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                        </ul>
                        <div className="button-login d-flex gap-2 px-2">
                        <button type="button" className="btn btn-secondary text-decoration-none "><span className="login"><Link to="http://localhost:3000/login" className="text-decoration-none text-light">Login</Link></span></button>
                        <button type="button" className="btn btn-secondary"><span className="signup"><Link to="http://localhost:3000/signup" className="text-decoration-none text-light">SignUp</Link></span></button>
                        </div>
                    </div>
                </nav>
            </div>
                  // businessentertainmentgeneralhealthsciencesportstechnology
        )
    }
}

export default NavBar

