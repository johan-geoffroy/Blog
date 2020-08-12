import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

//import react-reveal
import Zoom from 'react-reveal/Zoom';



const FeaturedPosts = (props)=> {

    
        return(
            <div className="view-post col-sm-12 col-md-6 col-lg-4">
                <Zoom>
                    <figure className="effect-img">
                        <Img className="img-post" fluid={props.img} key={props.idImg.childImageSharp.id}/>
                        <figcaption>
                                <span>
                                <Link to={props.link}>
                                        <h2>{props.title}</h2>
                                        <p>{props.desc}</p>
                                        <p>Lire la suite</p>
                                    </Link>
                                </span>
                        </figcaption>
                    </figure>
                </Zoom>
            </div>
        )
}
export default FeaturedPosts;