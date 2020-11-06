import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import config from "../config/"
import Icon from "./icons"

const { socialMedia } = config

const StyledSocialWrapper = styled.div`
  display: grid;
  /* Calculate columns, depending on how many profiles there are */
  grid-template-columns: repeat(${({ itemCount }) => itemCount + 1}, auto);
  justify-content: start;
  justify-items: start;

  margin-left: -2.5rem;
  margin-right: -2.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  /* Workaround: https://stackoverflow.com/questions/38993170/last-margin-padding-collapsing-in-flexbox-grid-layout */
  &::after {
    content: "";
    width: 2.5rem;
  }

  /* Show scrollbar if desktop and wrapper width > viewport width */
  /* @media (hover: hover) {
    &::-webkit-scrollbar {
      display: block;
      -webkit-appearance: none;
    }

    &::-webkit-scrollbar:horizontal {
      height: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      border: 0.2rem solid white;
      background-color: rgba(0, 0, 0, 0.5);
    }

    &::-webkit-scrollbar-track {
      background-color: #fff;
      border-radius: 8px;
    }
  } */

  a {
    margin-right: 0.5rem;
    margin-bottom: 0.75rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-right: 1rem;
    }
  }
`

const StyledSocialProfile = styled.a`
  width: ${({ width }) => (width ? width : "auto")};
  height: auto;
  padding: ${({ padding }) => padding};
  transition: all 0.1s ease-out;
  color: ${({ theme }) => theme.colors.secondary};
  svg {
    height: 2rem;
    width: 2rem;
    margin-right: 0.5rem;
    margin-bottom: -0.05rem;
  }
  /* For Grow Hover Effect */
  &:hover svg,
  &:focus svg,
  &:active svg {
      transform: scale(1.2);
  }
`

const Social = ({ width, padding, fontSize, fontWeight, withIcon }) => (
  <StyledSocialWrapper itemCount={socialMedia.length}>
    {socialMedia.map(({ name, url }, key) => {
      return (
        <StyledSocialProfile
          key={key}
          href={url}
          target="_blank"
          aria-label={name}
          width={width}
          padding={padding}
          fontSize={fontSize}
          fontWeight={fontWeight}
        >
          <Icon name={name}/>
        </StyledSocialProfile>
      )
    })}
  </StyledSocialWrapper>
)

Social.propTypes = {
  width: PropTypes.string,
  padding: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  withIcon: PropTypes.bool,
}

export default Social
