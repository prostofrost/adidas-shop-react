import styled from 'styled-components';

export const Product = styled.div`
  margin: 6em 1em 5em;
  position: relative;
  @media only screen and (min-width: 768px) {
    margin: 1.5em 1.5em 10em;
    max-width: 1200px;
  }
`;

export const Info = styled.div`
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const Price = styled.h2`
  font-size: 70px;
  margin: 0 0 10px;
  color: ${props => props.color};
  transition: all 0.5s ease;
  @media only screen and (min-width: 380px) {
    font-size: 80px;
  }
  @media only screen and (min-width: 992px) {
    padding: 0;
    margin: 35px 0 0;
  }
`;

export const SaveBtn = styled.button`
  display: none;
  background: ${props => props.color};
  border: none;
  color: #fff;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  text-transform: uppercase;
  transition: all 0.5s ease;
  cursor: pointer;
  @media only screen and (min-width: 992px) {
    display: block;
  }
`;
