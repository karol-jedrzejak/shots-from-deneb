// React Components
import React from "react";
import krzychu from "../src/assets/history/krzychu.jpg"; // with import
import karol from "../src/assets/history/karol.jpg"; // with import
import rzezniu from "../src/assets/history/rzezniu.jpg"; // with import
import jan from "../src/assets/history/jan.jpg"; // with import
import first_photo_with_logo from "../src/assets/history/first_photo_with_logo.jpg"; // with import
import album_review from "../src/assets/history/album_review.jpg"; // with import

import logo_chainguns from "../src/assets/logos/logo_chainguns.png"; // with import

import cd_01 from "../src/assets/discography/2008.jpg"; // 01
import cd_03 from "../src/assets/discography/2013.jpg"; // 03

import gig_13 from "../src/assets/tour/20110813.jpg"; // 13

const History = () => {
  return (
    <>
      <div className="textBox">
        <div className="textBoxTitle">HISTORIA</div>
        <div className="history-stage">
          <img src={first_photo_with_logo} className="history-photo"></img>
          <p>
            Historia zespołu Shots From Deneb zaczyna się w 2006 roku. Czwórka
            znajomych zainspirowana metalem i stonerem zakłada zespół The
            Chainguns. W skład zespolku wchodzą Krzychu (gitara, wokal), Marmur
            (gitara), Rzeznik (bas) i Jan (perkusja). Po roku Marmura zastępuje
            Stachu. Pierwsze dwa lata mijają na tworzeniu debiutanckiego
            materiału.
          </p>
        </div>
        <div className="history-stage">
          <p>
            W 2008 roku zespół wydaje debiutancki materiał EP pod tytłum "Fire
            In The Sky". Na album składa się 5 utworów plus intro. W tym samym
            roku ma równiez miejsce pierwszy koncert zespołu i to nie byle jaki
            bo jako support legendarnego zespołu Budgie. Zespoł kończy rok
            koncertem w Poznaniu. 2009 roku mija głównie na koncertowaniu w
            Poznaniu i okolicach. W sumie The Chinguns w tym roku gra 4
            kocnerty.
          </p>
          <img src={cd_01} className="history-photo"></img>
        </div>
        <div className="history-stage">
          <img src={gig_13} className="history-photo"></img>
          <p>
            W 2010 roku z zespołu odchodzi Stachu. Jego miejsce na chwilę
            zajmuje Rybosh ale ostatecznie na stałe do zespołu dołącza Karol. W
            tym roku zespół gra też 3 koncerty i rejestruje materiał na kolejną
            płytę EP (z uwagi na przetasowania w składzie tylko w 3 osoby).
            Premeira materiału pod tytułem "Pnakotik" ma miejsce w 2011 roku. Na
            album składają się 2 nowe utowry jak rownież odświeżona wersja
            utworu "New Church Green" z pierwszej płyty. W tym roku zespół
            intensywanie koncertuje grają 6 koncertów w min. Poznaniu, Jarocinie
            i na Festiwalu Siekierzyn.W 2012 roku zespół przystępuje do nagrania
            swojego debiutanckiego albumu długogrającego. W miedzyczasie
            występuje na Festiwalu Mini woodstock.
          </p>
        </div>
        <div className="history-stage">
          <p>
            W 2013 przed wydaniem albumu zespoł podejmuje decyzję o zmianie
            nazwy z The Chainguns na Shots From Deneb. Zespół wydaje debiutancki
            album pod tym samym tytułem. Album jest bardzo dobrze przyjęty przez
            publiczoność. Otrzymuje również bardzo dobrą recenzję w czasoppiśmie
            muzycznym "Metal Hammer". Zespół promuje album trasą nad możem i
            koncertem w Poznaniu. Pod koniec roku gra jeszcze koncert w
            Gliwicach.
          </p>
          <img src={album_review} className="history-photo"></img>
        </div>
        <div className="history-stage">
          <p>
            W 2014 roku zespół gra 4 koncerty i nagrywa teledysk do utworu "War
            Never Changes". Zespół rozpoczyna rowniez pracę nad nowymi uworami
            na kolejną płytę. W 2015 roku w Poznaniu ma miejsce ostatni koncert
            zespołu. Z końcem 2015 roku zespół zawiesza działaność.
          </p>
        </div>
      </div>
      <div id="members" className="textBox">
        <div className="member">
          <img src={krzychu} className="member-photo"></img>
          <div className="member-desc">Krzychu - gitara, wokal</div>
        </div>
        <div className="member">
          <img src={karol} className="member-photo"></img>
          <div className="member-desc">Karol - gitara</div>
        </div>
        <div className="member">
          <img src={rzezniu} className="member-photo"></img>
          <div className="member-desc">Rzeźniu- bas</div>
        </div>
        <div className="member">
          <img src={jan} className="member-photo"></img>
          <div className="member-desc">Jan - perkusja</div>
        </div>
      </div>{" "}
      <span>
        <br />
      </span>
    </>
  );
};

export default History;
