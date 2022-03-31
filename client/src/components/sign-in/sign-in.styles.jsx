import styled, { css } from 'styled-components';

const formContainerStyles = css`
  margin-top: 15px;
`;

const getFormContainerStyles = props => {
  return props.formcontainer ? formContainerStyles : null;
};

export const SignInContainer = styled.section`
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 10px;
  width: 100%;

  ${getFormContainerStyles}
`;

export const SignInTitle = styled.h1`
  margin: 10px 0;
  font-size: 2.4rem;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
