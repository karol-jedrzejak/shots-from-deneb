// React Components
import React from "react";

const Video = () => {
  return (
    <>
      <div className="textBox">
        <div className="videos">
          <iframe
            className="ytlink"
            src="https://www.youtube.com/embed/dmbeMhSdl5g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <br></br> <br></br>
          <iframe
            class="ytlink"
            src="https://www.youtube.com/embed/uJn_ztaZ2FY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <br></br> <br></br>
          <iframe
            class="ytlink"
            src="https://www.youtube.com/embed/vNjcWXxACIg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>{" "}
      <span>
        <br />
      </span>
    </>
  );
};

export default Video;
