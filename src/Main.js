import React, { useState } from 'react';
import { useStateValue } from './state';

const Main = () => {
  const [{ name }, dispatch] = useStateValue();

  // <div ref={renderRef}></div>
  // const [sketch, setSketch] = useState();
  const [count, setCount] = useState(0);
  // const [title, setTitle] = useState('');

  const handleChange = (event) => {
    dispatch({
      type: 'updateName',
      name: event.target.value
    });
  };

  return (
    <div>
      <p>From box: {name}</p>
      <p>Clicked {count} times</p>
      <input type="text" onChange={handleChange}/>
      <button type="button" onClick={() => setCount(count - 1)}>Decrementar</button>
      <button type="button" onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default Main;
