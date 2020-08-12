import React from 'react';

//import react-reveal
import Fade from 'react-reveal/Fade';

//import custom components
import PageLayout from '../components/layouts/PagesLayout';



const AboutPage = () => {

        return(
            <PageLayout>
                <Fade>
                <section className="page-about">
                    <div className="page-about-content container">
                        <div className="header-title-about">
                                <h1>Qui suis-je</h1>
                        </div>
                        <p>
                            Hello, je suis Johan Geoffroy.
                        </p>
                        <p>
                            Féru de l'informatique 
                            depuis mon plus jeune âge, j'éprouvais un réel plaisir à trifouiller dans les entrailles de ces boîtes en métal pour comprendre ce qui se passait à l'intérieur de ce monde mystérieux et passionnant.
                            À l’époque, quand Internet est arrivé dans les chaumières, à l’air du modem en 56K!
                            qui émettait ce bruit de téléphone, lors de la connexion, j’avais pour seul objectif :  construire de toutes pièces un site web.
                        </p>
                        <p>    
                            Armé de mon cahier sur lequel j’avais noté quelques balises HTML, du petit bloc-notes de Windows et du site du Zéro qui est appelé<br></br>
                            aujourd'hui : "OpenClassroom".
                        </p>
                        <p>
                            Difficile de penser néanmoins que j'en aurais fait pour autant mon métier. Mais c'était oublier qu'une passion ne s'oublie pas. Elle vous colle à la peau. Elle devient votre deuxième peau.
                            Un jour je décide de réouvrir l’éditeur de code, et je tombe sur la formation de développeur web que je décide de faire pour développer mes connaissances et avoir davantage de légitimité dans ma démarche. Je prends mon avenir en main en faisant une reconversion professionnelle en 2018.
                        </p>
                        <p>
                            Challenge, aventure, bonheur sont les maîtres mots de ce parcours.
                            Expérience professionnelle très intéressante.
                        </p>
                        <p>
                            Adieu mon ancien job de vendeur car j'ai besoin de vivre enfin ma passion au quotidien.
                            Aujourd’hui, à travers le vaste écosystème du web, je me suis orienté sur le développement Front-End ( Javascript| React.js ).
                        </p>
                    </div>
                </section>
            </Fade>
            </PageLayout>
        )
}

export default AboutPage;