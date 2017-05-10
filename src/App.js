import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import List from './List/List';

class App extends Component {
  render() {
    return (
      <div className="flex-fixed">
        <Sidebar />
        <List />
      </div>
    );
  }
}

export default App;
