import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import Interests from "../components/sections/interests"
import Projects from "../components/sections/projects"
import Contact from "../components/sections/contact"

const IndexPage = ({ data }) => (
  <Layout splashScreen={false}> {/*Turn splash screen on/off.*/}
    <SEO title="Chad Lei" />
    <Hero content={data.hero.edges} />
    <About content={data.about.edges} />
    <Interests content={data.interests.edges} />
    <Projects content={data.projects.edges} />
    <Contact content={data.contact.edges} />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
{
  hero: allMdx(filter: {fileAbsolutePath: {regex: "/hero/"}}) {
    edges {
      node {
        body
        frontmatter {
          greetings
          title
          subtitlePrefix
          subtitle
          body
          icon {
            childImageSharp {
              fluid(maxWidth: 60, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image {
            childImageSharp {
              fluid(maxWidth: 5000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  about: allMdx(filter: {fileAbsolutePath: {regex: "/about/"}}) {
    edges {
      node {
        body
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  interests: allMdx(filter: {fileAbsolutePath: {regex: "/interests/"}}) {
    edges {
      node {
        exports {
          shownItems
          interests {
            name
            icon {
              childImageSharp {
                fixed(width: 20, height: 20, quality: 90) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        frontmatter {
          title
        }
      }
    }
  }
  projects: allMdx(filter: {fileAbsolutePath: {regex: "/projects/"}, frontmatter: {visible: {eq: "true"}}}, sort: {fields: [frontmatter___position], order: ASC}) {
    edges {
      node {
        body
        frontmatter {
          title
          category
          emoji
          external
          github
          screenshot {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tags
          position
        }
      }
    }
  }
  contact: allMdx(filter: {fileAbsolutePath: {regex: "/contact/"}}) {
    edges {
      node {
        body
        frontmatter {
          title
          name
          email
          phone
          profileImage {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`
