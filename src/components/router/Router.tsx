import React from 'react';
import { Alpha } from '../../views/alpha/Alpha';
import { RouteNodes } from './constants';
import { Routes, Route } from 'react-router-dom';
import type { RouteNode } from './types';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Alpha />} key={'home'} />
      {RouteNodes.map((route: RouteNode, index: number) => (
        <Route
          path={route.pathname}
          element={<route.component />}
          key={`route${index}`}
        />
      ))}
    </Routes>
  );
};
