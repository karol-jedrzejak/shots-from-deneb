// React Components
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="textBox height100 relative">
        <div className="textBoxTitle special-font">KONTAKT</div>
        <div className="center">
          <span className="grey">e-mail: </span>
          <a href="mailto:shotsfromdeneb@gmail.com">shotsfromdeneb@gmail.com</a>
          <br />
          <span className="grey">tel: </span>
          <a href="tel: +48666666666;">+48 666 666 666</a>
        </div>
      </div>
    </>
  );
};

export default Contact;
