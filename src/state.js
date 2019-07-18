import React, { createContext, useContext, useReducer } from 'react';

export const SketchContext = createContext();

// Here props are unpacked
export const SketchProvider = ({reducer, initialState, children}) => (
  <SketchContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </SketchContext.Provider>
);

export const useStateValue = () => useContext(SketchContext);
