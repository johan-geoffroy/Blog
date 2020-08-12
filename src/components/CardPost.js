import React from 'react';

import Img from 'gatsby-image'

//import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const CardPost = (props) => {

    const arrowRigthIcon = <FontAwesomeIcon icon={faCaretRight} />

    return (
        <div className="wrapper col col-md-6 col-lg-4">
            <div className="card">
                <Img className="img-card" fluid={props.image} />
                <div className="card-body">
                    <div className="date">
                        <p>{props.date}</p>
                    </div>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <a href={`https://www.johan-geoffroy.com/${props.slug}`}>Lire la suite  <span>{arrowRigthIcon}</span></a>
                </div>
            </div>
        </div>
    )
}

export default CardPost;