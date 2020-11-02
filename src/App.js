import React from 'react';
import './App.css';

import Sidebar from './Component/Sidebar/Sidebar';
import Chat from './Component/Chat/Chat';

const App = () => {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
