import React from 'react';
import './App.css';

import Sidebar from './Component/Sidebar/Sidebar';
import Chat from './Component/Chat/Chat';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
