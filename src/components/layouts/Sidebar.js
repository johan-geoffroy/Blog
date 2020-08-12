import React from 'react';
import {Link} from 'gatsby';


//import assets


const Sidebar = () => {

    return(
        <section className="sidebar" >
            <div className="sidebar-container">
                <div className="sidebar-nav">
                    <nav>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" href="#"><span>Accueil</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link" href="#"><span>blog</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" href="#"><span>à propos</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" href="#"><span>contact</span></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>    
    )
}
export default Sidebar;