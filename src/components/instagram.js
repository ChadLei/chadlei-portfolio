import React, { useState, useEffect, useRef } from "react"
import Image from 'gatsby-image'
import styled from "styled-components"
import { motion } from "framer-motion"
import './instagram.css'

import useInstagram from '../hooks/use-instagram'
import { useOnScreen } from "../hooks"
import config from "../config"

import StyledSection from "../styles/StyledSection"
import ContentWrapper from "../styles/ContentWrapper"
import Button from "../styles/Button"
import Icon from "./icons"

const { socialMedia } = config

const StyledDiv = styled.div`
  && {
    display: flex;
    margin-top: 0;
    margin-bottom: 2rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
      max-width: 25rem;
      margin-top: 2rem;
      padding-right: 5rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-shrink: 1;
      max-width: 62.5rem;
      margin-bottom: 6rem;
      padding-right: 0;
      /* Positioning of image and details should vary */
      flex-direction: ${({ position }) =>
        position % 2 !== 0 ? "row" : "row-reverse"};
    }
    .insta-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 1rem -0.5rem;
    }
    .instagram_pic {
      box-shadow: 0;
      margin: 0.5rem;
      width: 100%;
      max-width: calc(33% - 1rem);
      display: block;
      transition: 200ms box-shadow linear;
      :focus, :hover {
        transform: translate3d(0px, -0.125rem, 0px);
        box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.32);
      }
    }
    .instag-img {
      border-radius: ${({ theme }) => theme.borderRadius};
      box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);
      transition: all 0.3s ease-out;
    }
  }
`

const StyledGithubButton = styled(motion.a)`
    display: block;
    text-align: center;
    margin: 2rem auto;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin: 0 auto;
    }
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 0;
    padding-left: 0;
`

// Tutorial from: https://medium.com/@suprabhasupi/gatsby-instagram-user-posts-8c19822e1250
const Instagram = () => {
    const instaPics = useInstagram();
    const {username} = instaPics[0];

    // Required for animating the title
    const tRef = useRef()
    const tOnScreen = useOnScreen(tRef)
    const tVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }

    // Required for animating the button
    const bRef = useRef()
    const bOnScreen = useOnScreen(bRef)
    const bVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }

    return (
       <StyledSection>
         <StyledContentWrapper>
           <motion.div
             ref={tRef}
             variants={tVariants}
             animate={tOnScreen ? "visible" : "hidden"}
           >
            <h3 className="section-title">Latest Posts on Instagram 📸</h3>
          </motion.div>
          <StyledDiv className='insta-wrapper'>
              {/* we have done spread in useInstagram hook, so fluid is on top */}
              {instaPics.map(pic => (
                   <a href={`https://www.instagram.com/p/${pic.id}/`} className='instagram_pic' target='_blank'>
                      <Image className='instag-img' fluid={pic.fluid} alt={pic.caption} />
                   </a>
              ))}
          </StyledDiv>
        </StyledContentWrapper>
        <StyledGithubButton
          ref={bRef}
          variants={bVariants}
          animate={bOnScreen ? "visible" : "hidden"}
          className="github-btn"
          href={socialMedia.filter(profile => profile.name === "Instagram")[0].url}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="External Link"
        >
          <Button type="button" textAlign="center" color="primary" center>
            <Icon name="instagram" color="white" /> See More On Instagram
          </Button>
        </StyledGithubButton>
       </StyledSection>
    )
}

export default Instagram
