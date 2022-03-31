import styled, { css } from 'styled-components';

const formContainerStyles = css`
  margin-top: 15px;
`;

const getFormContainerStyles = props => {
  return props.formcontainer ? formContainerStyles : null;
};

export const SignUpContainer = styled.section`
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 10px;
  width: 100%;

  ${getFormContainerStyles}
`;

export const SignUpTitle = styled.h1`
  font-size: 2.4rem;
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
