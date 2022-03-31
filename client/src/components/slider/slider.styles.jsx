import styled, { css } from 'styled-components';

export const SlideshowContainer = styled.section`
  position: relative;
  margin-top: 50px;
  box-shadow: 0 8px 8px -4px #c8ccce;
  
`;

export const SlideshowImage = styled.img`
  width: 100%;
  height: 25%;
`;


const NavNext = css`
right: 0;
`;

const getNavButtonPosition = props => {
  return props.next ? NavNext : null;
};

export const SlideshowNavButton = styled.span`
  cursor: pointer;
  position: absolute;
  top: 35%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  font-weight: bold;
  transition: 1s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  background-color: #e8ebefb8;
  font-size: 1.8rem;
  color: #6f6767;

  ${getNavButtonPosition}
`;

export const Slideshow = styled.div`
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 10px;
`;

const dotActive = css`
  background-color: #f00;
`;

const dotInactive = css`
  background-color: #bbb;
`;

const getDotStyles = props => {
  return props.classActiveInactive === 'active' ?  dotActive : dotInactive;
};

export const SlideshowDot = styled.span`
  cursor: pointer;
  height: 7px;
  width: 7px;
  margin: 0 2px;
  border-radius: 50%;
  display: inline-block;
  font-size: 1rem;
  transition: background-color 1s ease;

  &:hover {
    background-color: #f00;
    transition: background-color 1s ease;
  }

  ${getDotStyles}
`;
