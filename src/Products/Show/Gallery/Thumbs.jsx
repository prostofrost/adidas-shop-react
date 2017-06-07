import React from 'react';

import styled from 'styled-components';

import imageLink from '../../../constants/imageLink';

const Thumbnails = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;
  @media only screen and (min-width: 768px) {
    padding: 5px;
    justify-content: flex-start;
  }
  @media only screen and (min-width: 992px) {
    padding: 5px 30px;
  }
`;

const Thumb = styled.div`
  border: none;
  background: none;
  margin-right: 10px;
  flex: 0 0 17%;
  cursor: pointer;
  border: 5px solid transparent;
  transition: all 0.3s ease;
  @media only screen and (min-width: 992px) {
    margin-right: 30px;
  }
  &:hover {
    border: 5px solid #e5e5e7;
  }
  ${props =>
    props.isActive &&
    `
    border: 5px solid #e5e5e7;
  `};
`;

const Img = styled.img`
  width: 100%;
  display: block;
`;

export default props =>
  (<Thumbnails>
    {props.images.map((image, index) =>
      (<Thumb onClick={() => props.onClick(index)} isActive={index === props.selectedImageIndex}>
        <Img src={imageLink(image.id, image.fileName, 128)} alt={image.id} />
      </Thumb>),
    )}
  </Thumbnails>);
