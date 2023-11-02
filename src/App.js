import "./App.css";

// React
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Intro from "./Intro";
import RemissionApp from "./RemissionApp";
import Rain from "./Rain";

// Styles
import "./styles/global.css";

// Context
import { DataContext } from "./DataProvider";

import Rainfall from "react-rainfall-animation/src/Rain";

function App() {
  const { state, actions } = useContext(DataContext);

  if (state.inside === true) {
    return (
      <BrowserRouter>
        <Rain />
        <RemissionApp />
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <Rain />
                <Intro />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
