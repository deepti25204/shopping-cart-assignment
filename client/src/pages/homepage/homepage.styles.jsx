import styled from 'styled-components';

export const HomePageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 70px;
    max-width: 100%;
  }

  @media screen and (min-width: 992px) {
    padding-left: calc(calc(100% - 940px ) / 2 );
    padding-right: calc(calc(100% - 940px ) / 2 );
  }

  @media screen and (min-width: 1024px) {
    padding-left: calc(calc(100% - 1000px ) / 2 );
    padding-right: calc(calc(100% - 1000px ) / 2 );
  }

  @media screen and (min-width: 1200px) {
    padding-left: calc(calc(100% - 1100px ) / 2 );
    padding-right: calc(calc(100% - 1100px ) / 2 );
  }
`;
