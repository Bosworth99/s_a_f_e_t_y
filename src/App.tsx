import React, { type FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './styles/reset.css';
import './styles/global.css';
import { Header } from './components/app/Header';
import { Alpha } from './views/alpha/Alpha';
import { App as StyledApp } from './App.styled';

const App: FC = () => {
  useEffect(() => {
    console.log('hello world');
  }, []);

  const overlay: Element = document.getElementById('overlay') as Element;

  return (
    <StyledApp>
      {createPortal(<Header />, overlay)}
      <Alpha />
    </StyledApp>
  );
};

export default App;
