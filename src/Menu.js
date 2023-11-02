// React Components
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

// React Router Components
import logo from "./assets/logos/logo_no_background.png";

// Context
import { DataContext } from "./DataProvider";

const linkStyle = {
  textDecoration: "none",
};

const Menu = () => {
  const { state, actions } = useContext(DataContext);
  const setMobile = actions.setMobile;

  function changemobile(newstate) {
    setMobile(newstate);
  }

  return (
    <>
      <div id="menu-container">
        <div className="special-font" id="menu">
          <Link to="" className="menu-button menu-mobile-hide">
            news
          </Link>
          <Link to="/tour" className="menu-button menu-mobile-hide">
            trasa
          </Link>
          <Link to="/music" className="menu-button menu-mobile-hide">
            muzyka
          </Link>
          <img src={logo} id="menu-logo" />
          <Link to="/video" className="menu-button menu-mobile-hide">
            video
          </Link>
          <Link to="/history" className="menu-button menu-mobile-hide">
            historia
          </Link>
          <Link
            to="/contact"
            className="menu-button menu-mobile-hide"
            onClick={() => changemobile(false)}
          >
            kontakt
          </Link>
          <div
            id="menu-hamb"
            className="menu-button"
            onClick={() => changemobile(true)}
          >
            menu
          </div>
        </div>
      </div>
      {state.mobile ? (
        <>
          <div id="menu-mobile" className="special-font">
            <Link
              to=""
              className="menu-button"
              onClick={() => changemobile(false)}
            >
              news
            </Link>
            <Link
              to="/tour"
              className="menu-button"
              onClick={() => changemobile(false)}
            >
              trasa
            </Link>
            <Link
              to="/music"
              className="menu-button"
              onClick={() => changemobile(false)}
            >
              muzyka
            </Link>
            <Link
              to="/video"
              className="menu-button"
              onClick={() => changemobile(false)}
            >
              video
            </Link>
            <Link
              to="/history"
              className="menu-button"
              onClick={() => changemobile(false)}
            >
              historia
            </Link>
            <Link
              to="/contact"
              className="menu-button"
              onClick={() => changemobile(false)}
            >
              kontakt
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default Menu;
