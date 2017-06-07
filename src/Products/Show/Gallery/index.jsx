import React, { Component } from 'react';

import styled from 'styled-components';

import Thumbs from './Thumbs';

import imageLink from '../../../constants/imageLink';

const Wrapper = styled.div`
  margin-top: 0;
  @media only screen and (min-width: 992px) {
    padding-top: 130px;
  }
  @media only screen and (min-width: 1200px) {
    padding-top: 50px;
  }
`;

const ImgWrap = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const BigImg = styled.img`
  max-height: 740px;
  max-width: 100%;
`;

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedImageIndex: 0 };
    this.handleChangeImage = this.handleChangeImage.bind(this);
  }

  handleChangeImage(selectedImageIndex) {
    this.setState({ selectedImageIndex });
  }

  render() {
    const images = this.props.images;
    const index = this.state.selectedImageIndex;
    return (
      <Wrapper>
        {images &&
          <div>
            <ImgWrap>
              <BigImg
                src={imageLink(images[index].id, images[index].fileName, 1024)}
                alt={images[index].fileName}
              />
            </ImgWrap>
            <Thumbs images={images} onClick={this.handleChangeImage} selectedImageIndex={index} />
          </div>}
      </Wrapper>
    );
  }
}

export default Gallery;
