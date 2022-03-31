import styled, { css } from 'styled-components';

export const CategoryItem = styled.article`

  display: flex;
  box-sizing: border-box;
  box-shadow: 0 8px 8px -4px #c8ccce;
  width: 100%;
  align-items: center;

  @media only screen and (max-width: 989px) {
    padding: 40px 10px;
  }
  
  @media only screen and (min-width: 992px) {
    height: 300px;
    padding: 20px;
  }
`;

const evenOrder = css`
  order: 2;
  margin-left: 5px;
  margin-right: 0;
`;

const isEven = props => {
  return props.even ? evenOrder : null;
}

export const CategoryImage = styled.img.attrs(props => ({
  width: "25%",
  height: "min-content"
}))`
  width: 25%;
  height: min-content;
  margin-right: 5px;
  margin-left: 0;

  @media only screen and (min-width: 600px) and (max-width:989px) {
    width: 100%;
    height: 175px;
    max-width: 280px;
  }
  @media only screen and (min-width: 992px) {
    width: 100%;
    height: 250px;
    max-width: 400px;
  }

  ${isEven}
`;


export const CategoryDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

export const CategoryTitle = styled.h2`
  margin: 0;
  text-align: center;
  
  @media only screen and (max-width: 989px) {
    font-size: 2.4rem;
  }

  @media only screen and (min-width: 992px) {
    font-size: 3rem;
  }
`;

export const CategoryDescription = styled.p`
  font-size: 1.6rem;
  text-align: center;
  line-height: 1.5;

  @media only screen and (min-width: 600px) and (max-width:989px) {
    margin: 15px 0 18px 0;
  }

  @media only screen and (min-width: 992px) {
    margin: 22px 0;
  }
`;
