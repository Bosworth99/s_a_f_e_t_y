import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

(function construct (): void {
  const container = document.getElementById('root');
  if (container !== null) {
    const root = createRoot(container);
    if (root !== null) {
      root.render(<App />);
    } else {
      console.warn('root dom node failed to resolve');
    }
  } else {
    console.warn('root dom node failed to resolve');
  }
})();
