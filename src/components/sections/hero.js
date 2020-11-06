import React, { useEffect, useContext } from "react"
import PropTypes from "prop-types" // Typechecks props
import styled from "styled-components"
import Img from "gatsby-image" // Creates optimized images (allows multiple sizes of thumbnails for different devices)
import { MDXRenderer } from "gatsby-plugin-mdx" // Allows rendering of MDX files
import { motion, useAnimation } from "framer-motion" // Provides transition animations

import Context from "../../context/"

import ContentWrapper from "../../styles/ContentWrapper"
import StyledSection from "../../styles/StyledSection"

import Social from "../social"
import SplashScreen from "../splashScreen"

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 6rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-bottom: 12rem;
    }
    .greetings {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 3rem;
    }
    .emoji {
      margin-left: 0.75rem;
      width: 2.2rem;
      height: 2.2rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-left: 1rem;
        width: 3rem;
        height: 3rem;
      }
    }
    .title {
      margin-bottom: 1.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-bottom: 0;
      }
    }
    .subtitle {
      margin-top: -0.75rem;
    }
    .description {
      font-size: 1.125rem;
      margin-bottom: 2rem;
    }
  }
`

const Hero = ({ content }) => {
  const { frontmatter, body } = content[0].node
  const { isIntroDone } = useContext(Context).state

  // Controls to orchestrate animations of greetings, emoji, social profiles, highlighting
  const gControls = useAnimation()
  const eControls = useAnimation()
  const sControls = useAnimation()
  const hControls = useAnimation()

  // Start Animations after the splashScreen sequence is done
  useEffect(() => {
    const pageLoadSequence = async () => {
      if (isIntroDone) {
        eControls.start({
            rotate: [0, -10, 12, -10, 9, 0, 0, 0, 0, 0, 0],
          transition: { duration: 2.5, loop: 3, repeatDelay: 1 },
        })
        await gControls.start({
          opacity: 1,
          y: 0,
          transition: { delay: 0.4 },
        })
        await sControls.start({
          opacity: 1,
          x: 0,
        })
        // Animate underlining to hover state
        await hControls.start({
          boxShadow: "inset 0 -2rem 0 #CDF3E1",
          transition: { delay: 0.4, ease: "circOut" },
        })
      }
    }
    pageLoadSequence()
  }, [isIntroDone, eControls, gControls, sControls, hControls])

  return (
    <StyledSection id="hero">
      {/*{!isIntroDone && <SplashScreen />}*/}
      <StyledContentWrapper>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={gControls}>
          <h1 className="title">
            <div className="greetings">
              {frontmatter.greetings}
              <motion.div animate={eControls} style={{ originX: 0.7, originY: 0.7 }}>
                <Img className="emoji" fluid={frontmatter.icon.childImageSharp.fluid} />
              </motion.div>
            </div>
            {frontmatter.title}
          </h1>
          <h2 className="subtitle">
            {frontmatter.subtitlePrefix}{" "}
            <motion.span animate={hControls}>
              {frontmatter.subtitle}
            </motion.span>
          </h2>
          <div className="description">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={sControls}>
          <Social padding=".3rem" width="auto"/>
        </motion.div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

Hero.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Hero
