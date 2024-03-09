import React from 'react';
import { NavLink, Link, useNavigate } from "react-router-dom";
import image from "../cloudlogo.png";

const Navbar = () => {
    // let location = useLocation();

    // useEffect(() => {
    //     console.log(location);
    // }, [location]);
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigate("/login");
    }

    return (
        <div style={{marginTop: "5rem"}}>            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand h1" to="/"><img src={image} alt="logo" width={"300px"} style={{marginTop: "5px"}}/></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">CloudNotes</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-row flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <NavLink className="btn btn-primary mx-2" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                                        <Link className="btn btn-primary mx-2" to="/about" role="button">About</Link>
                                    </form> : <Link className="btn btn-primary mx-2" to="/notes">Notes</Link>}
                                    
                                </li>
                                <li className="nav-item">

                                    {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                                        <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
                                        <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link>
                                    </form> : <button className="btn btn-primary" onClick={logout}>Logout</button>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
