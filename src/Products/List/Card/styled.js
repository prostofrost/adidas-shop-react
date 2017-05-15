import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  background: #f4f4f4;
  margin: 15px 0;
  padding: 8px;
  z-index: 1;
  & img {
    width: 100%;
  }
  > .product-sets-sale-badge {

    position: absolute;
    top: 15px;
    right: 15px;
  }
`;

export const Price = styled.div`
  & a {
    width: 100%;
    padding: 27px 0;
    background: #fff;
    color: #000;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-image: linear-gradient(17deg, #0c09bf, #966dd8);
    color: #fff;
    &:hover {
      background: #f4f4f4;
      background-image: linear-gradient(17deg, #966dd8, #0c09bf);
    }
  }
`;
