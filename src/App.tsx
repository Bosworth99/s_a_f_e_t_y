import React, { type FC, useEffect } from 'react';
import './styles/reset.css';
import './styles/global.css';
import { Header } from './components/app/Header';
import { Alpha } from './views/alpha/Alpha';
import { App as StyledApp } from './App.styled';

const App: FC = () => {
  useEffect(() => {
    console.log('hello world');
  }, []);

  return (
    <StyledApp>
      <Header />
      <Alpha />
    </StyledApp>
  );
};

export default App;
