import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCategoryItems } from '../../redux/category/category.selectors';
import { fetchCategoryStart } from '../../redux/category/category.actions';
import { useNavigate, createSearchParams } from "react-router-dom";

import CustomButton from '../custom-button/custom-button.component';

import {
  CategoryItem,
  CategoryImage,
  CategoryDetails,
  CategoryTitle,
  CategoryDescription
} from './category.styles';

const Category = ({fetchCategoryStart, categoryItems}) => {

  const navigate = useNavigate();

  let evenOddFlag = true;
  const handleClick = (categoryKey) => {

    navigate({
      pathname: '/product',
      search: `${createSearchParams({category: categoryKey})}`
    });
  };
  
  useEffect(() => {
    fetchCategoryStart();
  }, []);
  
  return (
    <>
      { 
        categoryItems && categoryItems.length 
        ?
        categoryItems.map((list, idx) => {
          if (list.enabled) {
            evenOddFlag = !evenOddFlag;
            return (
              <CategoryItem key={idx}>
                <CategoryImage src={list.imageUrl} alt={list.name || 'category Item'} even={evenOddFlag} />
                <CategoryDetails>
                  <CategoryTitle>{list.name}</CategoryTitle>
                  <CategoryDescription>{list.description}</CategoryDescription>
                  <CustomButton 
                    type='submit'
                    style={{width:'auto', padding: '0 20px', minWidth: 'auto'}}
                    onClick={() => handleClick(list.key)}
                  >
                    Explore {list.key}
                  </CustomButton>
                </CategoryDetails>
              </CategoryItem>
            )  
          } else {
            return null
          } 
        })
        :
        null
      }

    </>    
  )
}

const mapStateToProps = createStructuredSelector({
  categoryItems: selectCategoryItems
});

const mapDispatchToProps = dispatch => ({
  fetchCategoryStart: () => dispatch(fetchCategoryStart())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
