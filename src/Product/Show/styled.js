import styled from 'styled-components';

export const Product = styled.div`
  padding: 1.5em 1em 5em;
  @media only screen and (min-width: 992px) {
    padding: 1.5em 1.5em 10em;
  }
`;

export const Info = styled.header`
  @media only screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Title = styled.div`
  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 10;
  }
`;

export const Sets = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 0;
  @media only screen and (min-width: 992px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    position: relative;
    z-index: 10;
    padding: 20px 15px 0 0;
  }
`;

export const ColourSale = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: 992px) {
    flex-direction: row;
  }
`;
