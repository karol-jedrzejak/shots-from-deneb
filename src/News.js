// React Components
import React from "react";
import gig_26042015 from "../src/assets/tour/20150426.jpg"; // with import

const News = () => {
  return (
    <>
      <div className="textBox">
        <div className="newsBox">
          <div className="news-left">
            <div className="news-title">
              01.01.2016 - 19:00 - Zawieszenie działalności
            </div>
            <div className="news-text">
              Rok 2016 zaczynamy od smutnych dla was wieści (pewnie zdążyliśćie
              się domyśleć po braku oznak życia ze strony zespołu) o zawieszeniu
              zespołu Shots From Deneb. W zeszłym roku nasze szeregi opuścił
              jeden z założycieli zespołu basista "Rzeźniu". Próbowaliśmy
              pociągnąć granie dalej ale z uwagi na brak czasu oraz rozjechanie
              się człónków zespołu po świecie nie jesteśmy w stanie grać.
              Dziekujemy wam za wszystkie koncerty które mieliśmy okazję zgrać i
              za pozytywny feedback od strony społeczności. Na pocieszenie mamy
              jeszcze w zanadrzu 6 utworów instrumentalnych ktore tworzyliśmy z
              myślą o kolejnej płycie. Planujemy wypuścić je w formie do
              darmowego pobrania. Jak tylko uda nam się zmiksować je do
              sluchalnej wersji to damy znać. Trzymajcie się !
            </div>
          </div>
        </div>
        <div className="newsBox">
          <div className="news-left">
            <div className="news-title">
              18.07.2015 - 13:00 - Teledysk do "War Never Changes"
            </div>
            <div className="news-text">
              Jak coś nie umarliśmy i jesteśmy w trakcie nagrywania kolejnej
              płytki. W międzyczasie możecie sobie zobaczyć teledysk do utworu
              "War Never Changes" z naszej debiutanckiej płyty.
            </div>
          </div>
          <div className="news-right news-right-50">
            <iframe
              className="news-video"
              src="https://www.youtube.com/embed/dmbeMhSdl5g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="newsBox">
          <div className="news-left">
            <div className="news-title">
              22.03.2015 - 17:00 - Koncert w Poznaniu
            </div>
            <div className="news-text">
              Już za miesiąc gramy koncert jako support przed zespołem Tsima.
              Koncert odbędzie się w znanym poznaniakom klubie "U Bazyla". Start
              koncertu około godziny 18.00. Wlotka 20 zł. Ostanio rzadziej gramy
              koncerty (ostatni rok temu) także wbijajcie tłumnie bo nie wiadomo
              kiedy uda nam się kolejny raz zagrać :)
            </div>
          </div>
          <div className="news-right">
            <img src={gig_26042015} className="news-img zoom-source"></img>
            <img src={gig_26042015} className="zoom-destination"></img>
          </div>
        </div>
      </div>
      <span>
        <br />
      </span>
    </>
  );
};

export default News;
