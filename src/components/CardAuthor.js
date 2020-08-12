import React from 'react'

import photoAuthor from '../images/site-images/author.jpg';

const CardAuthor = (props)=>{

    const imgAuthor = {
        backgroundImage: `url(${photoAuthor})`
    }


    return(
        <div className="card-wrapper">
            <div className="card-left">
                <div className="card-image" style={ imgAuthor }>
                </div>
            </div>
            <div className="card-right-text">
                <p>{props.author}</p>
                <p>Développeur Front End</p>
                <p>Javascript | React Js</p>
                <span>{props.datePostCreat}</span>
            </div>
        </div>
    )
}

export default CardAuthor