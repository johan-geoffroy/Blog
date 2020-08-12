import React from 'react';
import { graphql } from 'gatsby';

//import react-reveal
import Fade from 'react-reveal/Fade';

//import customs components
// import Head from '../components/layouts/head';
import PageLayout from '../components/layouts/PagesLayout';
import CardPost from '../components/CardPost';

export default ({ data }) => {

  const datas = data.allMarkdownRemark;

    return (
        <PageLayout>
          {/* page title-meta */}
          {/* <Head title="Sthellart/blog" /> */}
          {/*  */}
          <Fade>
          <div className="header-title-blog">
            <h1>Blog</h1>
          </div>
          <section className="view-all-posts">
            <div className="container">
              {/* new card */}
              <div className="grid-cards-posts container">
                <div className="row row-cols-1 row-cols-md-3">
                  {datas.edges.map(({ node }) =>(
                    <CardPost key={node.id} 
                      title={node.frontmatter.title}
                      date={node.frontmatter.date}
                      image={node.frontmatter.featuredImage.childImageSharp.fluid}
                      desc={node.excerpt}
                      slug={node.fields.slug}
                    />
                  ))}
                </div>
              </div>
            </div>
        </section>
        </Fade>
      </PageLayout>
    )
  }
  export const query = graphql
  `
  query blogQuery {
    allMarkdownRemark(sort: {order: DESC, fields: id}) {
      edges {
        node {
          id
          excerpt(pruneLength: 25)
          fields {
            slug
          }
          frontmatter {
            date(formatString:"DD/MM/YYYY")
            title
            featuredImage {
              absolutePath
              childImageSharp {
                fluid(maxWidth: 300 quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                  tracedSVG
                  aspectRatio
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
