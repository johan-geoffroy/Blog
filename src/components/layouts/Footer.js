import React from 'react'

import {Link} from 'gatsby';

//import frontawesom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';



const Footer = ()=> {

    const getYear = new Date().getFullYear();
    const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />
    const gitHubIcon = <FontAwesomeIcon icon={faGithub} />
    const gitLabIcon = <FontAwesomeIcon icon={faGitlab} />



    return(
        <div className="footer-container">
            <div className="footer-content">
                <nav className="social-menu">
                    <ul className="nav social-icon">
                        <li className="nav-item">
                            <a className="nav-link" target='blank' href=" https://linkedin.com/in/johan-geoffroy">{linkedinIcon}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="blank" href="https://github.com/johan-geoffroy">{gitHubIcon}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="blank" href="https://gitlab.com/johan.dev">{gitLabIcon}</a>
                        </li>
                    </ul>
                </nav>
                <nav className="footer-menu">
                    <ul>
                        <li className="nav-item"><Link to="/credits">crédits</Link></li>
                    </ul>
                </nav>
                <div className="footer-bottom">
                    <p>johan geoffroy <span>{getYear}</span></p>
                </div>
            </div>
        </div>
    )
}


export default Footer 