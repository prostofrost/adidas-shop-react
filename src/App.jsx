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

export default () => (
  <Router>
    <Layout>
      <Sidebar />
      <section className="wrapper">
        <Route exact path="/" component={List} />
        <Route path="/item" component={Product} />
      </section>
    </Layout>
  </Router>
);
