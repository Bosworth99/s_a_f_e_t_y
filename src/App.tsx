import React, { type FC, useEffect } from 'react';
import './styles/reset.css';
import './styles/global.css';
import { App as StyledApp } from './App.styled';

import { Header } from './components/app/Header';
import { Alpha } from './views/alpha/Alpha';

const App: FC = () => {
  useEffect(() => {
    console.log('hello world');
  }, []);

  return (
  <StyledApp>
    <Header />
    <Alpha />
  </StyledApp>);
};

export default App;
