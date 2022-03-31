import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems, selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
  CartDropdownContainer,
  CartDropdownHeader,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
  CartPriceMessage
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, itemCount, toggleCartHidden }) => {
  return (
  <CartDropdownContainer>
    <CartDropdownHeader>
      <div>My Cart&nbsp;
        <span>
          ({itemCount} Item{itemCount > 1 ? 's' : null})
        </span>
      </div>
    </CartDropdownHeader>
    <CartItemsContainer empty={itemCount === 0 ? true : false}>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <>
        <EmptyMessageContainer>
          No items in your cart
        </EmptyMessageContainer>
        <p>Your favourite items are just a click away</p>
        </>
      )}
    </CartItemsContainer>

    {
      itemCount === 0
      ? null
      : (
        <CartPriceMessage>
        <img src="/static/images/lowest-price.png" 
            alt="Lowest price" 
            width="auto" height="38px" />
        <p>You won't find it cheaper anywhere</p>
        </CartPriceMessage>
      )
    }
    

    <CartDropdownButton onClick={toggleCartHidden}>
      {
        itemCount === 0
        ? <span style={{width: "100%"}}>Start Shopping</span>
        : (
          <>
            <span>Proceed to Checkout</span>
            <span>
              ${
                cartItems.length ? (
                  cartItems.reduce((acc, cartItem) => {
                    return acc + (cartItem.price* cartItem.quantity);
                  }, 0)
                ) : null
              }
            </span>
          </>
        )
      }
      
    </CartDropdownButton>
  </CartDropdownContainer>
);
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
