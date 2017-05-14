import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styled from 'styled-components';

import Sidebar from './Sidebar';
import List from './List';
import Product from './Product';

const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

const Wrapper = styled.section`
  padding-top: 70px;
  overflow: auto;
  @media only screen and (min-width: 768px) {
    padding-top: 0;
    flex: 1 1 auto;
    overflow: auto;
  }
`;

export default () => (
  <Router>
    <Layout>
      <Sidebar />
      <Wrapper>
        <Route exact path="/" component={List} />
        <Route path="/item" component={Product} />
      </Wrapper>
    </Layout>
  </Router>
);
