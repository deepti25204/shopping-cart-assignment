import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  HeaderLeftContainer
} from './header.styles';

import './header.styles.scss';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>

    <HeaderLeftContainer>
      <LogoContainer to='/'>
        <img className="logo__img" src="/static/images/logo.png" alt="Sabka Bazaar" width="auto" height="auto" />
      </LogoContainer>
      { 
        window.innerWidth <= 767 
        ? null
        :
        <OptionsContainer>
          <OptionLink to='/' navbuttons={"true"}>Home</OptionLink>
          <OptionLink to='/product' navbuttons={"true"}>Products</OptionLink>
        </OptionsContainer>
      }
    </HeaderLeftContainer>

    <OptionsContainer column>
      { window.innerWidth <= 767 
        ? null 
        : currentUser ? (
          <OptionLink as='div' onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <nav>
            <OptionLink to='/login'>SignIn</OptionLink>
            <OptionLink to='/register'>Register</OptionLink>
          </nav>
        )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
