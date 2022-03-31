import styled from 'styled-components';

export const CollectionPreviewContainer = styled.section`
  display: grid;
  flex-wrap: wrap;
  padding: 10px 0 10px 10px;

  @media screen and (max-width: 767px) {
    align-items: center;
    max-width: 600px;
    margin: auto;
  }
  
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

`;