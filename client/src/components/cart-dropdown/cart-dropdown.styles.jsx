import styled, { css } from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.section`
  position: absolute;
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 0;
  box-shadow: 0 8px 8px -4px #c8ccce;
  background-color: #eeeeee;
  top: 50px;
  right: 0;
  z-index: 5;
  height: calc(100vh - 50px);

  @media screen and (min-width: 768px) {
    top: 70px;
    height: calc(100vh - 70px);
  }

  @media screen and (min-width: 992px) {
    height: calc(100vh - 70px);
    top: 70px;
  }

  @media screen and (min-width: 992px) and (max-width: 1023px) {
    width: calc(50% - calc(calc(100% - 940px ) / 2 ));
    right: calc(calc(100% - 940px ) / 2 );
  }

  @media screen and (min-width: 1024px) and (max-width: 1199px) {
    width: calc(50% - calc(calc(100% - 1000px ) / 2 ));
    right: calc(calc(100% - 1000px ) / 2 );
  }

  @media screen and (min-width: 1200px) {
    width: calc(50% - calc(calc(100% - 1100px ) / 2 ));
    right: calc(calc(100% - 1100px ) / 2 );
  }
`;

export const CartDropdownHeader = styled.header`
  background-color: #fff;
  padding: 12px;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;
  margin-top: 30px;

  span {
    font-weight: 400;
    font-size: 1.3rem;
  }

  @media screen and (min-width: 992px) {
    margin-top:0;
    padding: 15px 10px;
    background-color: #000;
    color: #fff;
  }
`;

export const CartPriceMessage = styled.section`
  display: flex;
  align-items: center;
  max-width: 100%;
  margin: 12px;
  padding: 10px;
  background-color: #fff;

  img {
    width:auto;
    height: 35px;
    margin-right: 20px;
  }

  p {
    font-size: 1.4rem;
  }

`;

export const CartDropdownButton = styled(CustomButton)`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.strong`
  font-size: 1.8rem;
`;

const EmptyMessageStyles = css`
  height: 100%;
`;

const getFormContainerStyles = props => {
  return props.empty ? EmptyMessageStyles : null;
};

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  p {
    text-align:center;
    font-size: 1.4rem;
    margin-top: 5px;
  }

  ${getFormContainerStyles}
`;
