import React, { Component } from 'react';
import Sidebar from './Sidebar';
import List from './List';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Sidebar />
        <section className="wrapper">
          <List />
          {/*<Product />*/}
        </section>
      </div>
    );
  }
}

export default App;
