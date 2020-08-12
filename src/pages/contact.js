import React from 'react';
import {Link} from 'gatsby';
//import custom components
import PageLayout from '../components/layouts/PagesLayout';
import FormContact from '../components/FormContact';

//import react-reveal
import Fade from 'react-reveal/Fade';
//import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';




const ContactPage = () =>{

        const donwloadIcon = <FontAwesomeIcon icon={faDownload}/>
        return(
        
        <PageLayout>
            <Fade>
                <section className="page-contact">
                    <div className="page-contact-content container">
                        <div className="header-title-contact">
                            <h1>contact</h1>
                        </div>
                        <div className="infos-container">
                            <div className="infos-content">
                                <div className="row">
                                    <div className="adresse col-md-4">
                                        <span className="small-text">adresse</span>
                                        <p>9 rue de la rochelle</p>
                                        <p>77290 mitry-mory</p>
                                        <p>Paris</p>
                                    </div>
                                    <div className="phone col-md-4">
                                        <span className="small-text">téléphone</span>
                                        <p>06 79 14 21 87</p>
                                    </div>
                                    <div className="email col-md-4">
                                        <span className="small-text">email</span>
                                        <p>johan.geoffroy.dev@gmail.com</p>
                                    </div>
                                </div>
                                <div className="upload-cv-container">
                                    <div className="upload-cv-content">
                                        <div className="download-link">
                                            <Link to="/" download target="blank">
                                                {donwloadIcon} <span> cv </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-contact">
                                    <FormContact />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
        </PageLayout>
    )
}

export default ContactPage;