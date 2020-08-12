import React from 'react';
import {Link} from 'gatsby';


//import frontawesom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';

//import assets
import logoIcon from '../../images/site-images/logo-jg-black.png';
import logoIconWhite from '../../images/site-images/logo-jg-white.png';




const Navbar = (props) => {


    const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />
    const gitHubIcon = <FontAwesomeIcon icon={faGithub} />
    const gitLabIcon = <FontAwesomeIcon icon={faGitlab} />

    return(

    <div className = "top-navbar" >
        <div className="row">
            <div className="wrapper col-sm-11">
                <div>
                    <div className="logo">
                            <Link to="/"><img src={props.themeSelected === 'light' ? logoIcon : logoIconWhite} className="logo-icon" alt="logo" /></Link>
                    </div>
                    <div className="btn-menu" onClick={props.clickHandler} onKeyPress={props.clickHandler}>
                        <div className={`wrapper-menu ${props.activeClass}`}>
                            <div className="line-menu half start"></div>
                            <div className="line-menu"></div>
                            <div className="line-menu half end"></div>
                        </div>
                    </div>
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
                </div>
                {/* switch btn theme */}
                <div className={`btn-switch-theme ${props.themeSelected === "light" ? "disable" : "active"}`}>
                    <span>{props.themeSelected === "light" ? "Dark" : "Light"} mode</span>
                    <div  className="btn-active" onClick={props.callFunction} onKeyPress={props.callFunction}>
                        <div className="cursor"></div>
                    </div>
                </div>
            </div>
        </div>
    </div >
    )

}
export default Navbar;