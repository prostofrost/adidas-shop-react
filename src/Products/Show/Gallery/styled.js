import styled from 'styled-components';

export const Gallery = styled.div`
  @media only screen and (min-width: 992px) {
    margin-top: -8em;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: -12em;
  }
`;

export const BigImg = styled.div`
  margin-bottom: 30px;
  > img {
    width: 100%;
  }
  @media only screen and (min-width: 992px) {
    margin-bottom: 0;
    > img {
      width: 80%;
    }
  }
`;

export const Thumbnails = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (min-width: 992px) {
    justify-content: space-between;
  }
`;

export const Item = styled.div`
  border: none;
  background: none;
  margin-right: 10px;
  flex: 0 0 17%;
  cursor: pointer;
  outline: 5px solid #fff;
  transition: all 0.3s ease;
  > img {
    width: 100%;
  }
  &:hover {
    outline: 5px solid #e5e5e7;
  }
  ${props => props.isActive && `
    outline: 5px solid #e5e5e7;
  `};
`;

export const Decor = styled.div`
  display: none;
  flex: 0 0 20%;
  padding: 0 5px;
  @media only screen and (min-width: 992px) {
    display: block;
  }
`;

export const Lines = styled.div`
  width: 100%;
  height: 3px;
  background: #e7e7e7;
  position: relative;
  &::before, &::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background: #e7e7e7;
    position: relative;
    top: 6px;
  }
  &::after {
    top: -9px;
  }
`;

export const More = styled.div`
  display: none;
  flex: 0 0 8%;
  font-family: 'AvenirNext';
  text-align: left;
  font-size: 14px;
  color: #c0c0c0;
  background: none;
  border: none;
  @media only screen and (min-width: 992px) {
    display: block;
  }
`;
