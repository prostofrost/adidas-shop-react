import styled from 'styled-components';

export const Filters = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 0 25px;
  @media only screen and (min-width: 880px) {
    margin: 0 0 15px;
  }
  @media only screen and (min-width: 880px) {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  & button {
    border: none;
    padding: 0;  
  }
`;

export const Gender = styled.div`
  margin: 0 0 15px;
  @media only screen and (min-width: 880px) {
    margin: 0 35px 0 0;
  }
  @media only screen and (min-width: 992px) {
    margin: 0 35px 0 20px;
  }
  @media only screen and (min-width: 1200px) {
    margin: 0 65px 0 20px;
  }
  & button {
    margin-right: 15px;
  }
`;

export const Size = styled.div`
  & button {
    padding: 0 8px 0 0;
  }
`;

export const Icon = styled.div`
  display: none;
  width: 55px;
  height: 55px;
  box-sizing: border-box;
  padding-top: 8px;
  background: #ebebeb;
  text-align: center;
  @media only screen and (min-width: 992px) {
    display: block;
  }
  > img {
    width: 40px;
    height: 33px;
    padding-top: 5px;
  }
`;

export const Item = styled.button`
  font-family: 'AvenirNext_bold';
  background: none;
  font-size: 24px;
  text-transform: uppercase;
  color: ${props => (props.isActive ? '#4d42f8' : '#d6d6d6')};
  transition: all 0.4s ease;
  &:hover {
    color: #4d42f8;
  }
`;

export const Label = styled.div`
  display: inline-block;
  color: #4d42f8;
  margin-right: 15px;
  font-size: 24px;
  text-transform: uppercase;
`;
