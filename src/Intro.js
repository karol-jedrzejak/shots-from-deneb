// React Components
import React from "react";
import { useContext } from "react";

// React Router Components
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Context
import { DataContext } from "./DataProvider";

import logo from "../src/assets/logos/logo_no_background.png"; // with import

// import Rainfall from "react-rainfall-animation/src/Rain";

const Intro = () => {
  const { state, actions } = useContext(DataContext);
  const setInside = actions.setInside;

  function enterWebsite() {
    setInside(true);
  }

  return (
    <>
      <img id="logo" src={logo} onClick={enterWebsite}></img>
    </>
  );
};

export default Intro;
