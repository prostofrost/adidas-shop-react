import styled from 'styled-components';

export const Product = styled.div`
  margin: 6em 1em 5em;
  position: relative;
  @media only screen and (min-width: 768px) {
    margin: 1.5em 1.5em 10em;
    max-width: 1200px;
  }
`;

export const Title = styled.div`
  @media only screen and (min-width: 992px) {
    position: absolute;
    display: flex;
    flex-direction: column;
  }
`;

export const Sets = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 0;
  width: 100%;
  @media only screen and (min-width: 992px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    position: absolute;
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
