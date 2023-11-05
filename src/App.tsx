import React, { type FC } from 'react';
import { createPortal } from 'react-dom';
import { Header } from './components/header/Header';
// import { Router } from './components/router/Router';
import {
  App as StyledApp,
  ViewContainer as StyledViewContainer,
} from './App.styled';
import './styles/global.css';
import './styles/reset.css';
import { Gamma } from './views/gamma/Gamma';

const App: FC = () => {
  const overlay: Element = document.getElementById('overlay') as Element;
  return (
    <StyledApp>
      {createPortal(<Header />, overlay)}
      <StyledViewContainer>
        <Gamma />
      </StyledViewContainer>
    </StyledApp>
  );
};

export default App;
