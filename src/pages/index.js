import React from 'react'
import { graphql, Link } from 'gatsby'

// import ScrollToTop from '../components/ScrollToTop';


//import react-reveal
import Fade from 'react-reveal/Fade';


//import custom components
import Head from '../components/layouts/head'
import PageLayout from '../components/layouts/PagesLayout'
import FeaturedPosts from '../components/FeaturedPosts'



class HomePage extends React.Component
{

  smoothMouve(event){
    event.preventDefault();

    return window.scrollTo({
              top:800,
              behavior:'smooth'
          });
  }



  render()
  {

    const { data } = this.props;
  

    return (

      <PageLayout>
        {/* page title-meta */}
        <Head title="Johan Geoffroy développeur Front-End"/>
        {/*  */}
        <div className="home-page">
          <div className="header">
            <div className="header-content">
              <h1 className="header-title">johan geoffroy</h1>
              <p className="subtitle">
                développeur Front-End
              </p>
              <p>Javascript || React.js</p>

              <div className='mouse-scroll'  onClick={(event) => this.smoothMouve(event)} onKeyPress={this.smoothMouve}></div>
            </div>
          </div>
          {/* blog */}

          <section className="featured-container" id="featured">
            <Fade top>
              <div className="title-bloc-post">
                <Link to="/blog"><h2>blog</h2></Link>
              </div>
            </Fade>
            <div className="row">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <FeaturedPosts
                  key={node.id}
                  title={node.frontmatter.title}
                  img={node.frontmatter.featuredImage.childImageSharp.fluid}
                  idImg={node.frontmatter.featuredImage}
                  desc={node.excerpt}
                  link={node.fields.slug}
                />
              ))}
            </div>
          </section>
          {/* end blog */}
        </div>
      </PageLayout>
    )
  }
}

export default HomePage;



export const query = graphql
  `
  query indexQuery {
    allMarkdownRemark (limit: 3, sort: {order: ASC, fields: id}){
      edges {
        node {
          id
          frontmatter {
            date
            title
            featuredImage {
              childImageSharp {
                id
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                  tracedSVG
                  originalImg
                  originalName
                }
              }
            }
          }
          html
          fields {
            slug
          }
          excerpt(
            format: PLAIN
            pruneLength:80
            truncate: true
            )
        }
      }
    }
  }
`
