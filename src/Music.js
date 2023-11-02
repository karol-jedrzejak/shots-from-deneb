// React Components
import React from "react";

import Discography from "./Discography";

const Music = () => {
  return (
    <>
      <div className="textBox">
        <div class="play">
          <iframe
            id="player"
            src="https://bandcamp.com/EmbeddedPlayer/album=4062669670/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://shotsfromdeneb.bandcamp.com/album/shots-from-deneb">
              Shots from Deneb by Shots from Deneb
            </a>
          </iframe>
        </div>
        {Discography.reverse().map(({ cover, title, year, tracks }, index) => {
          return (
            <div className="music-row">
              <div className="music-column-l">
                <img className="music-cover" src={cover}></img>
              </div>
              <div className="music-column-r">
                <span>
                  <span className="grey">{year}</span> - {title}
                </span>
                <br />
                <br />
                <span>
                  {tracks.map((entry, index) => {
                    return (
                      <>
                        <span className="grey">{index + 1}. </span>
                        {entry.title} -
                        <span className="grey"> {entry.time}</span>
                        <br />
                      </>
                    );
                  })}
                </span>
                <br />
              </div>
            </div>
          );
        })}
      </div>{" "}
      <span>
        <br />
      </span>
    </>
  );
};

export default Music;
