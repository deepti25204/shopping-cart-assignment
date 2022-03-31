import styled from 'styled-components';

export const SidebarContainer = styled.section`
  width: 25%;
  min-width: 25%;
  background-color: #ededed;
  position: sticky;
  height: calc(100vh);
  top: 0;
`;

export const SidebarList = styled.ul`
  padding: 0 0 0 5px;
  margin: 0;

  li {
    list-style: none;
    padding: 12px 10px 12px 25px;
    border-bottom: 1px solid #d3cfcf;
    text-decoration: none;
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

export const CollectionsOverviewContainer = styled.main`
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: 768px) {
    max-width: 100%;
    flex-direction: row;
  }

  @media screen and (min-width: 992px) and (max-width: 1023px) {
    padding-left: calc(calc(100% - 940px ) / 2 );
    padding-right: calc(calc(100% - 940px ) / 2 );
  }

  @media screen and (min-width: 1024px) and (max-width: 1199px) {
    padding-left: calc(calc(100% - 1000px ) / 2 );
    padding-right: calc(calc(100% - 1000px ) / 2 );
  }

  @media screen and (min-width: 1200px) {
    padding-left: calc(calc(100% - 1100px ) / 2 );
    padding-right: calc(calc(100% - 1100px ) / 2 );
  }
`;

export const CategorySelectForm = styled.form`
  max-width: 600px;
  margin: 22px auto 0;
  width: 100%;

  label {
    display: none;
  }

  select {
    width: 100%;
    color: #fff;
    border: none;
    padding: 13px 18px;
    background-color: #d10157;
    box-shadow: 0 10px 10px -4px #c8ccc9;
  }
`