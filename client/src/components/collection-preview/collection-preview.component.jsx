import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
} from './collection-preview.styles';

const CollectionPreview = ({ items }) => (
  <CollectionPreviewContainer>
      {items
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
  </CollectionPreviewContainer>
);

export default CollectionPreview;
