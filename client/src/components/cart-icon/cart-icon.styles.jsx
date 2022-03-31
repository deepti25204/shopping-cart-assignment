import styled from 'styled-components';

export const CartContainer = styled.button`
  width: 120px;
  background-color: #80808026;
  border: none;
  font-size: 1.5rem;
  margin: 0;
  padding: 5px 13px;
  color: #4f4638;
  cursor: pointer;
  height: 50px;

  @media screen and (min-width: 768px) {
    height: 46px;
  }
`;

export const CartIconImage = styled.img.attrs(props => ({
  src: props.imgSrc,
  alt:"Cart icon",
  width: "24px",
  height: "24px"
}))`
  vertical-align: middle;
  width: 24px;
  height: 24px;
`;

export const ItemCountContainer = styled.span`
  padding-left: 10px;
  line-height: 2rem;
`;
