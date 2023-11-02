// React Components
import React from "react";
import Rainfall from "react-rainfall-animation/src/Rain";

const Rain = () => {
  return (
    <>
      <div id="Rain">
        <Rainfall dropletsAmount={50} />
      </div>
      <div id="foglayer_01" className="fog">
        <div className="image01"></div>
        <div className="image02"></div>
      </div>
      <div id="foglayer_02" className="fog">
        <div className="image01"></div>
        <div className="image02"></div>
      </div>
      <div id="foglayer_03" className="fog">
        <div className="image01"></div>
        <div className="image02"></div>
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default Rain;
