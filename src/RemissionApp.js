// React
import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Menu from "./Menu";
import News from "./News";
import Tour from "./Tour";
import Music from "./Music";
import Video from "./Video";
import History from "./History";
import Contact from "./Contact";

const RemissionApp = () => {
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path="*" element={<News></News>} />
        <Route path="/tour" element={<Tour></Tour>} />
        <Route path="/music" element={<Music></Music>} />
        <Route path="/video" element={<Video></Video>} />
        <Route path="/history" element={<History></History>} />
        <Route path="/contact" element={<Contact></Contact>} />
      </Routes>
    </>
  );
};

export default RemissionApp;
