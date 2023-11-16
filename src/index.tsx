import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <div className={"container"}>
              <div className={"main-content"}>
                  <App/>
              </div>
          </div>
      </BrowserRouter>
  </React.StrictMode>
);