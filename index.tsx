import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// FIX: Removed the manual global JSX declaration. This declaration was overriding
// the default JSX types from React and types provided by @react-three/fiber,
// which caused all JSX elements to be unrecognized. The libraries handle this
// type augmentation automatically.

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
