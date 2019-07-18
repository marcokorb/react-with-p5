import React, { createRef, useEffect, useState } from 'react';
import { useStateValue } from './state';
import Sketch from './sketch/Sketch';
import Square from './sketch/Square';

const Canvas = () => {

  const [{ canvas }, dispatch] = useStateValue();

  const [renderRef, setRenderRef] = useState();

  useEffect(() => setRenderRef(createRef()), []);

  useEffect(() => {

    if(renderRef) {
      dispatch({
        type: 'setCanvas',
        canvas: new Sketch({ renderRef })
      });
    }

  }, [dispatch, renderRef]);

  const addItem = () => {

    dispatch({
      type: 'addItem',
      item: new Square({ canvas })
    });
  }

  return (
    <div style={{textAlign: 'center'}}>
      <button type="button" onClick={addItem}>Adicionar nova box</button>
      <div ref={renderRef}></div>
    </div>
  );
}

export default Canvas;