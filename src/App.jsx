import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import styled from 'styled-components';

import Sidebar from './Sidebar';
import List from './Products/List';
import Show from './Products/Show';

const Demo = styled.div`
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  height: 70px;
  padding: 0 20px;
  background-image: linear-gradient(17deg, #f5f5f5, #ccc);
  color: #3a3a3a;
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
  @media only screen and (min-width: 992px) {
    font-size: 18px
  }
  & p {
    margin-top: 10px;
  }
  & a {
    color: #3a3a3a;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`;

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  padding-top: 0;
  @media only screen and (min-width: 768px) {
    padding-top: 70px;
  }
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
      <Demo>
        <p>Сайт магазина Adidas выполнен исключительно в демонстрационных целях.<br />
          Проект написан на <a href="https://facebook.github.io/react/">React</a>;
           стили через <a href="https://www.styled-components.com/">Styled Components</a>;
         данные через <a href="https://github.com/evgenyrodionov/adidas-fake-api">API</a>;
          исходный код на <a href="https://github.com/prostofrost/adidas-shop-react">GitHub</a>.</p>
      </Demo>
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
