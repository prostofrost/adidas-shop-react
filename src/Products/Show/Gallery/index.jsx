import React, { Component } from 'react';

import styled from 'styled-components';

import Thumbs from './Thumbs';

const Wrapper = styled.div`
  margin-top: 0;
  @media only screen and (min-width: 992px) {
    padding-top: 130px;
  }
  @media only screen and (min-width: 1200px) {
    padding-top: 50px;
  }
`;

const BigImg = styled.div`
  margin-bottom: 30px;
  text-align: center;
  > img {
    max-height: 740px;
    max-width: 100%;
  }
  @media only screen and (min-width: 992px) {
    margin-bottom: 30px;
  }
`;

const images = [
  {
    id: '01',
    src: require('../../List/shoes-1@3x.jpg'),
    alt: 'Utra Boost first',
  },
  {
    id: '02',
    src: require('../../List/shoes-2@3x.jpg'),
    alt: 'Utra Boost second',
  },
  {
    id: '03',
    src: require('../../List/shoes-3@3x.jpg'),
    alt: 'Utra Boost third',
  },
  {
    id: '04',
    src: require('../../List/shoes-1@3x.jpg'),
    alt: 'Utra Boost fouth',
  },
  {
    id: '05',
    src: require('../../List/shoes-2@3x.jpg'),
    alt: 'Utra Boost fifth',
  },
];

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedImageIndex: 0 };
    this.handleChangeImage = this.handleChangeImage.bind(this);
  }

  handleChangeImage(selectedImageIndex) {
    this.setState({ selectedImageIndex, isActive: true });
  }
  render() {
    return (
      <Wrapper>
        <BigImg>
          <img
            src={images[this.state.selectedImageIndex].src}
            alt={images[this.state.selectedImageIndex].alt}
          />
        </BigImg>
        <Thumbs
          images={images}
          onClick={this.handleChangeImage}
          isActive={this.state.selectedImageIndex}
        />
      </Wrapper>
    );
  }
}

export default Gallery;
