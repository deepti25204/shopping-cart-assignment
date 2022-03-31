import React, { useCallback } from 'react';
import { connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useSearchParams } from 'react-router-dom';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCategoryItems } from '../../redux/category/category.selectors';

import { selectedCollection } from '../../redux/product/product.selectors';
import { 
  CollectionsOverviewContainer, 
  SidebarContainer, 
  SidebarList,
  CategorySelectForm
} from './collections-overview.styles';

const CollectionsOverview = ({ categoryItems }) => {
  
  const [params, setParams] = useSearchParams();
  const categoryParam = params.get('category') || '';
  const selected = ((categoryItems || []).find(category => category.key === categoryParam) || {}).id || '';
  const collection = useSelector(selectedCollection(selected));

  const updateCategory = useCallback((newCategoryKey)=>{
    let newParams= {category: newCategoryKey};
    const categoryParam = params.get('category') || '';
    if( categoryParam === newCategoryKey || !newCategoryKey) newParams = {};
    setParams(newParams);
  }, [params]);

  return (
  <CollectionsOverviewContainer>
    {categoryItems && categoryItems.length &&
      (
        <>
        { window.innerWidth > 767 
          ?
          <SidebarContainer>
            <SidebarList>
              { categoryItems.filter(category => category.enabled).map((category) => (
                <li
                  key={category.id}  
                  id={category.id} 
                  onClick={(e)=>updateCategory(category.key)}
                  style={{color: selected === category.id ? '#d10157' : 'inherit'}}
                >
                  {category.name}
                </li>
              ))}
            </SidebarList>
          </SidebarContainer>
          :
          <CategorySelectForm>
            <label htmlFor="category">Category</label>
            <select
              name='category'
              id='category'
              onChange={(e) => updateCategory(e.target.value || '')}
              defaultValue={categoryParam}
            >
              <option value=''>Select Category</option>
              { categoryItems.filter(category => category.enabled).map((category) => (
                <option
                  key={category.id}
                  id={category.id} 
                  value={category.key} 
                  >
                  {category.name}
                </option>
              ))}
            </select>
          </CategorySelectForm>
        }
      </>
    )
    }

    <CollectionPreview items={collection} />
  </CollectionsOverviewContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  categoryItems: selectCategoryItems
});

export default connect(mapStateToProps)(CollectionsOverview);
