import styled, { css } from 'styled-components';

const transformLabel = css`
  transform: translateY(-3em);
  color: #89cff0;
`;

export const GroupContainer = styled.div`
  margin-bottom: 10px;
  transition: all 0.3s;
  width: 100%;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  box-shadow: none;
  width: 100%;
  border-style: none none solid none;
  border-color: #d3d3d3;
  transition: all 0.5s;
  padding: 8px 5px;

  &:focus {
    outline: none;
    box-shadow: none;
    outline: none;
    border-color: #89cff0;
    
    + label {
      ${transformLabel}
    }
  }

  &::placeholder {
    color: transparent;
  }

  &:focus-within {
    transform: scale(1, 1);
  }

  &:not(:placeholder-shown) + label {
    ${transformLabel}
  }

`;

export const FormInputLabel = styled.label`
  font-size: 1.6rem;
  display: block;
  opacity: 1;
  transform: translateY(-1.5em);
  transform-origin: 0 0;
  transition: all 0.3s;
`;

export const FormInputError = styled.div`
  color: red;
  font-size: 1.4rem;
  margin-top: -15px;
  padding-bottom: 10px;
`;