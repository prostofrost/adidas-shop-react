import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import styled from 'styled-components';

import Sidebar from './Sidebar';
import List from './Products/List';
import Show from './Products/Show';

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Wrapper = styled.section`
  overflow: auto;
  @media only screen and (min-width: 768px) {
    flex: 1 1 auto;
    overflow: auto;
  }
`;

export default () =>
  (<Router>
    <Layout>
      <Sidebar />
      <Wrapper>
        <Switch>
          <Route exact path="/products/:section/:category" component={List} />
          <Route path="/products/:section/:category/:id" component={Show} />
          <Redirect from="/" to="/products/football/cleats" />
        </Switch>
      </Wrapper>
    </Layout>
  </Router>);
