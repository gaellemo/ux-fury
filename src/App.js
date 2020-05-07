import React from 'react';
import Main from "./components/MainComponent";
import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';

function App() {
  return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>

  );
}

export default App;
