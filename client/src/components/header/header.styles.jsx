import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;
  box-shadow: 0 10px 10px -4px #c8ccc9;

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

export const HeaderLeftContainer = styled.div`
  display: flex;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 115px;
  
  @media screen and (min-width: 768px) {
    width: 230px;
    padding: 0;
  }
`;

const navButtons = css`
  color: #4e4d4d;
  padding: 10px 15px;
`;

const loginRegisterButtons = css`
  color: #5c5c5c;
  padding: 5px 7px;
  font-size: 1.6rem;
`;

const getSectionButtonStyles = props => {
  return props.navbuttons ? navButtons : loginRegisterButtons;
};

const rowFlex = css`
  flex-direction: row;
  justify-content: flex-end;
`;

const columnFlex = css`
  flex-direction: column;
  justify-content: space-between;
`;

const getOptionContainerStyles = props => {
  return props.column ? columnFlex : rowFlex;
}

export const OptionsContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: flex-end;

  ${getOptionContainerStyles}

  @media screen and (min-width: 768px) {
    width: 50%;
  }

`;

export const OptionLink = styled(Link)`
  font-size: 1.8rem;
  cursor: pointer;
  font-weight: 600;

  ${getSectionButtonStyles}
`;
