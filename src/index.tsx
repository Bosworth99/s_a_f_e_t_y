import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("index.tsx");
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);


