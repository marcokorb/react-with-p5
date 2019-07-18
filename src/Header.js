import React from 'react';
import { useStateValue } from './state';

const Header = () => {
  const [{ name },] = useStateValue();

  return (
    <h1>{name}</h1>
  );
}

export default Header;