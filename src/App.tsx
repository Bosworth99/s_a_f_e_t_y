import React, { type FC } from 'react';
import { createPortal } from 'react-dom';
import {
  App as StyledApp,
  ViewContainer as StyledViewContainer,
} from './App.styled';
import { Alpha } from './views/alpha/Alpha';
import { Beta } from './views/beta/Beta';
import { Header } from './components/header/Header';
import './styles/global.css';
import './styles/reset.css';

const App: FC = () => {
  const overlay: Element = document.getElementById('overlay') as Element;
  return (
    <StyledApp>
      {createPortal(<Header />, overlay)}
      <StyledViewContainer>
        <Beta />
      </StyledViewContainer>
    </StyledApp>
  );
};

export default App;
