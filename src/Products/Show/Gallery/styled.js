import styled from 'styled-components';

export const Gallery = styled.div`
  margin-top: 0;
  @media only screen and (min-width: 992px) {
    padding-top: 130px;
  }
  @media only screen and (min-width: 1200px) {
    padding-top: 50px;
  }
`;

export const BigImg = styled.div`
  margin-bottom: 30px;
  > img {
    max-height: 740px;
    max-width: 100%;
  }
  @media only screen and (min-width: 992px) {
    margin-bottom: 0;
  }
`;

export const Thumbnails = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (min-width: 768px) {
    padding: 0 20px;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0 80px;
  }
`;

export const Thumb = styled.div`
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
