import styled from 'styled-components';

export const LoginContainer = styled.main`
  
  width: 100%;
  margin: auto;
  display: flex;

  @media screen and (max-width: 767px) {
    padding: 20px 10px;
    max-width: 600px;
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    margin-top: 50px;
    max-width: 800px;
    padding: 20px;
    flex-direction: row;
  }
`;
