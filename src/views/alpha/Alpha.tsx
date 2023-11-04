import React from 'react';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';

import { Context } from '../../components/context/Context';
import { Alpha as StyledAlpha } from './Alpha.styled';
import { Sphere } from '../../components/sphere/Sphere';

extend({ THREE });

export const Alpha: React.FC = () => {
  console.log('Alpha');
  return (
    <StyledAlpha>
      <Context>
        {/** @react-three objs*/}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Sphere />
      </Context>
    </StyledAlpha>
  );
};
