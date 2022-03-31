import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem } from '../../redux/cart/cart.actions';

import {
  CartItemContainer,
  ItemDetailsContainer,
  ItemDetails,
  QuantityPriceContainer,
  QuantityContainer,
  RemoveButton,
  AddButton,
  Quantity,
  Price,
  TotalItemPrice,
  CartItemImage
} from './cart-item.styles';

const CartItem = ({ item, addItem, removeItem }) => {
  const { imageURL, price, name, quantity } = item;
  return (
  <CartItemContainer>
    <CartItemImage src={imageURL} alt={`cart item - ${name}`} />
    <ItemDetailsContainer>
      <ItemDetails>
        <h4>{name}</h4>

        <QuantityPriceContainer>
          <QuantityContainer>
            <RemoveButton onClick={()=> removeItem(item)}>&#10134;</RemoveButton>
            <Quantity>{quantity}</Quantity>
            <AddButton onClick={()=> addItem(item)}>&#10133;</AddButton>
            <span> X </span>
            <Price>${price}</Price>
          </QuantityContainer>
          <TotalItemPrice>$ {quantity * price}</TotalItemPrice>
        </QuantityPriceContainer>
        

      </ItemDetails>

      {/* <ItemTotalPrice>
      </ItemTotalPrice> */}

    </ItemDetailsContainer>
  </CartItemContainer>
)
    }

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CartItem);
