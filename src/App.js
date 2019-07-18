import React, { createRef, useEffect, useState } from 'react';
import './App.css';
import { SketchProvider } from './state';
import { initialState, reducer } from './reducer';

import Main from './Main';
import Header from './Header';
import Canvas from './Canvas';

const App = () => {

  return (
    <SketchProvider initialState={initialState} reducer={reducer}>
      <Header />
      <Main />      
      <Canvas />  
    </SketchProvider>
  );
}

export default App;
