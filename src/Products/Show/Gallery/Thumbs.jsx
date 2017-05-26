import React from 'react';

import styled from 'styled-components';

const Thumbnails = styled.div`
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

const Thumb = styled.div`
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

export default props => (
  <Thumbnails>
    {props.images.map((image, index) => (
      <Thumb
        key={image.id}
        onClick={() => props.onClick(index)}
        isActive={index === props.selectedImageIndex}
      >
        <img src={image.src} alt={image.alt} />
      </Thumb>
    ))}
  </Thumbnails>
);
