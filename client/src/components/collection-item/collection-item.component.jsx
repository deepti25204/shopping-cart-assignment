import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionItemDetail,
  CollectionItemImage,
  CollectionItemDescriptionContainer,
  CollectionItemDescription,
  CollectionFooterContainer,
  PriceContainer,
  AddButton
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => (
  <CollectionItemContainer key={item.id}>
    <h3>{item.name}</h3>
    
    <CollectionItemDetail>
      <CollectionItemImage src={item.imageURL} alt={item.name} />

      <CollectionItemDescriptionContainer>
        <CollectionItemDescription>{item.description}</CollectionItemDescription>

        {
          window.innerWidth < 768
          ?
          <AddButton type="submit" onClick={() => addItem(item)}>
            Buy Now 
          </AddButton>
          :
          null
        }
      </CollectionItemDescriptionContainer>
    </CollectionItemDetail>

    { (window.innerWidth >= 768) 
      ?
      <CollectionFooterContainer>
        { 
          window.innerWidth >= 1200 
          ? <PriceContainer>MRP Rs.{item.price}</PriceContainer>
          : null
        }
        <AddButton
          type="submit"
          onClick={() => addItem(item)}
        >
          Buy Now 
          { 
            window.innerWidth < 1200 
            ? ` @ MRP Rs.${item.price}`
            : null
          }
        </AddButton>
      </CollectionFooterContainer>
      : 
      null
    }
  </CollectionItemContainer>
);

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
