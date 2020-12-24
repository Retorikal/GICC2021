import React from "react";
import strategicc_landing from "images/strategicc-landing.jpg";
import giccclass_landing from "images/gicclass-landing.jpg";
import dialogicc_landing from "images/dialogicc-landing.jpg";
import minicc_landing from "images/minicc-landing.jpg";
import strategicc_1 from "images/IG Post.png"
import strategicc_2 from "images/S2_IG Post.png"
import dialogicc_1 from "images/IG_DialoGICC2-.png"
import dialogicc_2 from "images/feeds with logo-03.jpg"
import gicclass_1 from "images/Feeds GICClass 1.png"
import gicclass_2 from "images/GICC Workshop 2 Feeds.png"
import minicc_1 from "images/minicc_poster-01.jpg"
import minicc_2 from "images/minicc2-01.jpg"

const Landing_Preevent = () => {
  return (
    <div className="container">
      <div className="preevent">
        <ul>
          <li>
            <img src={strategicc_landing} alt="StrateGICC landing" />
            <h3>StrateGICC</h3>
            <p>
              StrateGICC is the series of webinars that invite speakers with various professional expertise.
              Glorifying experience-based knowledge from experts and their take about it.
            </p>
            <h3>Our past StrateGICC</h3>
            <img src={strategicc_1} alt="StrateGICC1" />
            <img src={strategicc_2} alt="StrateGICC2" />
            <a href="#" className="learn-more">
              {"Learn More >"}
            </a>
          </li>
          <li>
            <img src={giccclass_landing} alt="GICClass landing" />
            <h3>GICClass</h3>
            <p>
              GICClass is a series of online workshops that value hands-on experience by learning new skills
              via an online platform. Here participants are thought and mentored by the speakers to learn
              practical skills to boost their future career.
            </p>
            <h3>Our past GICClass</h3>
            <img src={gicclass_1} alt="GICClass1" />
            <img src={gicclass_2} alt="GICClass2" />
            <a href="#" className="learn-more">
              {"Learn More >"}
            </a>
          </li>
          <li>
            <img src={dialogicc_landing} alt="DialoGICC landing" />
            <h3>DialoGICC</h3>
            <p>
              DialoGICC is a series of online interviews on Instagram Live platform, in which selected
              speakers talk about their career experiences and professional life. Through Instagram Live,
              audiences are able to have more intimate interactive experience, as if the speaker is their
              personal mentor.
            </p>
            <h3>Our past DialoGICC</h3>
            <img src={dialogicc_1} alt="DialoGICC1" />
            <img src={dialogicc_2} alt="DialoGICC2" />
            <a href="#" className="learn-more">
              {"Learn More >"}
            </a>
          </li>
          <li>
            <img src={minicc_landing} alt="MiniGICC landing" />
            <h3>MiniCC</h3>
            <p>
              MiniCC is a mini-case competition on Instagram that is aimed to introduce case competition to
              beginners. The participant should fit their solution to the case given in a single Instagram story.
            </p>
            <h3>Our past MiniCC</h3>
            <img src={minicc_1} alt="MiniCC1" />
            <img src={minicc_2} alt="MiniCC2" />
            <a href="#" className="learn-more">
              {"Learn More >"}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Landing_Preevent;
