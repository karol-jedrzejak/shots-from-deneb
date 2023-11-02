// React Components
import React from "react";

import TourData from "./TourData";

const Tour = () => {
  return (
    <>
      <div className="textBox">
        <table id="tour-table-pc">
          <tr>
            <th>Data</th>
            <th>Godzina</th>
            <th>Miejsce</th>
            <th>Nazwa</th>
            <th>Bilety</th>
            <th>Zespoły</th>
            <th>Plakat</th>
          </tr>
          {TourData.reverse().map(
            ({ date, time, place, price, bands, poster, title }) => (
              <tr>
                <td>{date}</td>
                <td>{time}</td>
                <td>
                  {place.map((value) => {
                    return (
                      <>
                        {value},
                        <br />
                      </>
                    );
                  })}
                </td>
                <td>{title}</td>
                <td>{price}</td>
                <td>
                  {" "}
                  {bands.map((value) => {
                    return (
                      <>
                        {value},
                        <br />
                      </>
                    );
                  })}
                </td>
                <td>
                  <img src={poster} className="tour-poster zoom-source"></img>
                  <img src={poster} className="zoom-destination"></img>
                </td>
              </tr>
            )
          )}
        </table>
        <table id="tour-table-mobile">
          <tr>
            <th>Info</th>
            <th>Plakat</th>
          </tr>
          {TourData.reverse().map(
            ({ date, time, place, price, bands, poster, title }) => (
              <tr>
                <td>
                  {title}
                  <br />
                  <br />
                  <span className="grey">Data: </span>
                  {date} - {time}
                  <br />
                  <span className="grey">Miejsce: </span>
                  {place.map((value) => {
                    return <>{value}, </>;
                  })}
                  <br />
                  <span className="grey">Bilety: </span>
                  {price}
                  <br />
                  <br />
                  <span className="grey">Kapele: </span>
                  <br />
                  {bands.map((value) => {
                    return <>{value}, </>;
                  })}
                </td>
                <td>
                  <img src={poster} className="tour-poster"></img>
                </td>
              </tr>
            )
          )}
        </table>
      </div>
      <span>
        <br />
      </span>
    </>
  );
};

export default Tour;
