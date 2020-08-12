import React from 'react';
import {Link} from 'gatsby';
import Img from 'gatsby-image';



const OtherPostsCard = (props) => {

    return(
        <div className="other-post-card col-md-4 col-sm-12" key={props.id}>
            <Link to={props.link} className="link-view-other-post">
                <div className="other-post-card-content">
                    <div className="other-post-img">
                        <div className="hover-bg"></div>
                        <Img fixed={props.image} />
                    </div>
                    <div className="post-title">
                        <p>{props.title}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
};


export default OtherPostsCard;




