import React from "react";
import strategicc_landing from "images/strategicc-landing.jpg";
import giccclass_landing from "images/gicclass-landing.jpg";
import dialogicc_landing from "images/dialogicc-landing.jpg";
import minicc_landing from "images/minicc-landing.jpg";

const Landing_Preevent = () => {
  return (
    <div className="container">
      <div className="preevent">
        <ul>
          <li>
            <img src={strategicc_landing} alt="StrateGICC landing" />
            <h3>StrateGICC</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              temporibus error consectetur eveniet nisi veritatis numquam quidem
              hic commodi ex.
            </p>
            <h3>Our Speakers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio cum eum voluptatum nemo iusto earum ut repellendus sint
              quisquam officiis.
            </p>
            <a href="#" className="learn-more">
              {"Learn More >"}
            </a>
          </li>
          <li>
            <img src={giccclass_landing} alt="GICClass landing" />
            <h3>GICClass</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              temporibus error consectetur eveniet nisi veritatis numquam quidem
              hic commodi ex.
            </p>
            <h3>Our Speakers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio cum eum voluptatum nemo iusto earum ut repellendus sint
              quisquam officiis.
            </p>
            <a href="#" className="learn-more">
              {"Learn More >"}
            </a>
          </li>
          <li>
            <img src={dialogicc_landing} alt="DialoGICC landing" />
            <h3>DialoGICC</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              temporibus error consectetur eveniet nisi veritatis numquam quidem
              hic commodi ex.
            </p>
            <h3>Our Speakers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio cum eum voluptatum nemo iusto earum ut repellendus sint
              quisquam officiis.
            </p>
            <a href="#" className="learn-more">
              {"Learn More >"}
            </a>
          </li>
          <li>
            <img src={minicc_landing} alt="MiniGICC landing" />
            <h3>MiniCC</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              temporibus error consectetur eveniet nisi veritatis numquam quidem
              hic commodi ex.
            </p>
            <h3>Our Speakers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio cum eum voluptatum nemo iusto earum ut repellendus sint
              quisquam officiis.
            </p>
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
