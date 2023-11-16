import React from 'react';
import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import {routes} from "./router";
import Header from "./components/Header";

function App() {
    const location = useLocation();

  return (
      <div className={'app'}>
          {location.pathname == '/'?
              <Header/>
              :
              <></>
          }
          <Routes>
              {routes.map((x) => (
                  <Route
                      key={x.path}
                      path={x.path}
                      element={<x.Component/>}
                  />
              ))}
          </Routes>
      </div>
  );
}

export default App;
