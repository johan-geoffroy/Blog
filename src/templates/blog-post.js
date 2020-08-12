import React from 'react';
import { graphql, Link } from 'gatsby';

//import react-reveal
import Fade from 'react-reveal/Fade';
//import frontawesom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTh} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';
//import custom components
import PageLayout from '../components/layouts/PagesLayout';
import CardAuthor from '../components/CardAuthor';
import OtherPosts from '../components/OtherPostsCard';

export default({ data }) =>{


    
    const getDataOtherPosts = data.allMarkdownRemark;
    const postData = data.markdownRemark;
    const fbIcon = <FontAwesomeIcon icon={faFacebook}/>
    const LinkedinIcon=<FontAwesomeIcon icon={faLinkedin}/>
    const twitterIcon =<FontAwesomeIcon icon={faTwitter}/>
    const gridIcon = <FontAwesomeIcon icon={faTh}/>



    return(
        <PageLayout>
            <Fade>
                <div className="wrapper-articles container">
                    <div className="body-articles">
                        <div className="header-post">
                            <h1>{postData.frontmatter.title}</h1>
                        </div>
                        <div dangerouslySetInnerHTML={{
                            __html: postData.html
                        }} />

                        <div className="line-separate"></div>
                        <div className="like-post-icon">
                            <ul className="like-icon">
                                <li><a target="blank" href={`https://www.facebook.com/sharer.php?u=https://www.johan-geoffroy.com/${postData.frontmatter.title}/&t=${postData.frontmatter.title}`}className="share-btn">{fbIcon}</a></li>
                                <li><a target="blank" href={`https://twitter.com/share?url=https://www.johan-geoffroy.com/${postData.frontmatter.title}/&text=${postData.frontmatter.title}`} className="share-btn">{twitterIcon}</a></li>
                                <li><a target="blank" href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.johan-geoffroy.com/${postData.frontmatter.title}/&title=${postData.frontmatter.title}`}  className="share-btn">{LinkedinIcon}</a></li>
                            </ul>
                        </div>
                        <CardAuthor
                            datePostCreat={postData.frontmatter.date}
                            author={postData.frontmatter.author}
                        />
                    </div>
                    <div className="other-articles container">
                        <div className="title">
                            <h4>Autres articles</h4>
                            <Link to="/blog" className="btn-back-all-posts">{gridIcon}</Link>
                        </div>
                        <div className="row">
                            {getDataOtherPosts.edges.map(({node})=>(
                                <OtherPosts 
                                    key = {node.id}
                                    id = {node.id}
                                    link={node.fields.slug}
                                    title = {node.frontmatter.title}
                                    image = {node.frontmatter.featuredImage.childImageSharp.fixed}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Fade>
        </PageLayout>

    )
}


export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
            title
            date(formatString:"DD-MM-YYYY")
            author
        }
    }

    allMarkdownRemark(limit: 3, sort: {order: DESC, fields: id}){
    edges {
      node {
        id
        fields {
            slug
          }
        frontmatter {
          title
          featuredImage {
            childImageSharp {
              fixed(width:200, height:200) {
                ...GatsbyImageSharpFixed
                  base64
                  tracedSVG
                  aspectRatio
                  width
                  height
                  src
              }
            }
          }
        }
      }
    }
  }
}
`