import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  padding: 10px 15px 0 0;
  margin: 15px 5px 25px 5px;
  position: relative;

  &:after {
    content: '';
    width: 0;
    right: 0;
    top: 10%;
    position: absolute;
    height: calc(100% - 30%);
    border: 1px solid #f9f9f9;
    border-radius: 40%;
    box-shadow: 0px 0px 4px 2px #f9f9f9;
  }

  h3 {
    margin: 0;
    height: 75px;
    line-height: 1.2;
    font-size: 1.9rem;
  }

  @media screen and (min-width: 1200px) {
    margin: 15px 5px;
  }

`;

export const CollectionItemDetail = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    border-bottom: 1px dashed #d3d3d3;
  }

  @media screen and (min-width:768) and (max-width: 1199px) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const CollectionItemImage = styled.img`
  width: 50%;

  @media screen and (min-width: 1200px) {
    width: 100%;
  }
`;

export const CollectionItemDescriptionContainer = styled.div`

  @media screen and (max-width:768px) {
    padding-bottom: 5px;
  }
  
  @media screen and (min-width:768px) {
    background-color: #ededed;
    padding: 6px 10px;
  }
  
  @media screen and (min-width:1200px) {
    margin: 10px 0;
  }
`;

export const CollectionItemDescription = styled.p`
  margin: 0;
  overflow: hidden;
  font-size: 1.4rem;

  @media screen and (max-width: 767px) {
    padding: 5px 8px 8px;
    margin-bottom: 30px;
    background-color: #ededed;
    max-height: 9.3rem;
    overflow: hidden;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    height: 7rem;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
  }
  
  @media screen and (min-width: 1200px) {
    height: 72px;  
  }

`;

export const CollectionFooterContainer = styled.footer`
  width: 100%;
  display: flex;
  margin-top: 5px;
  align-items: center;
  padding-bottom: 10px;
  box-sizing: border-box;
  justify-content: space-between;
  border-bottom: 1px dashed #d3d3d3;
`;

export const PriceContainer = styled.p`
  font-size: 1.4rem;
  margin: 0;
  padding: 0;
`;

export const AddButton = styled(CustomButton)`
  min-width: 97px;
  padding: 0px 10px;
  line-height: 38px;
  height: 38px;

  @media screen and (min-width: 1200px) {
    width: auto;
    max-width: 100px;
  }
`;