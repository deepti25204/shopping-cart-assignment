import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #d10157;
  color: white;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    color: #d10157;
    border: 1px solid #d10157;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const getButtonStyles = props => {
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: 100%;
  height: 44px;
  line-height: 44px;
  padding: 0 35px 0 35px;
  font-size: 1.5rem;
  
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
