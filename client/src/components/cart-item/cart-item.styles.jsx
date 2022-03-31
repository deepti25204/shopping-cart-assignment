import styled from 'styled-components';

export const CartItemContainer = styled.article`
  width: 100%;
  display: flex;
  height: 80px;
  background-color: #fff;
  margin-top: 12px;
  padding: 0 10px;
  align-items: center;
  
  p {
    text-align: center;
  }
`;

export const CartItemImage = styled.img.attrs(props => ({
  width: "75px",
  height: "75px"
}))`
  width: 75px;
`;

export const ItemDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;

export const ItemDetails = styled.div`
  
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-grow: 1;

  h4 {
    font-weight: 600;
    font-size: 1.6rem;
    margin: auto; 
  }
`;

export const QuantityPriceContainer = styled.section`
  display:flex;
  align-items: center;
  margin-top: 12px; 
  justify-content: space-between;
`;

export const QuantityContainer = styled.div`
  display:flex;
  align-items: center;
  font-size: 1.2rem;
`;

export const RemoveButton = styled.div`
  background-color: #d10157;
  border-radius: 50%;
  padding: 3px;
  font-size: 10px;
  margin-right: 12px;
`;

export const AddButton = styled.div`
  background-color: #d10157;
  border-radius: 50%;
  padding: 3px;
  font-size: 10px;
  margin-right: 12px;
`;

export const Quantity = styled.span`
  margin-right: 12px;
`;

export const Price = styled.span`
  margin-right: 12px;
  margin-left: 12px;
`;

export const TotalItemPrice = styled.div`
  font-size: 1.4rem;
`;