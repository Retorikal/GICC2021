import React from "react";
import strategicc_landing from "images/strategicc-landing.jpg";
import giccclass_landing from "images/gicclass-landing.jpg";
import dialogicc_landing from "images/dialogicc-landing.jpg";
import minicc_landing from "images/minicc-landing.jpg";
import { Dimen } from "styles/dimen";

const Landing_Preevent = () => {
  return (
    <div className="container">
      <div className="preevent row">
        <div className="preevent-card col-lg-3 col-md-6 col-sm-12">
          <div className="preevent-img">
            <img src={strategicc_landing} alt="StrateGICC landing" />
          </div>
          <h3>StrateGICC</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            temporibus error consectetur eveniet nisi veritatis numquam quidem
            hic commodi ex.
          </p>
          <h3>Our Speakers</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            cum eum voluptatum nemo iusto earum ut repellendus sint quisquam
            officiis.
          </p>
          <div className="learn-more">
            <a href="#" className="learn-more">
              {"Learn More >"}
            </a>
          </div>
        </div>
        <div className="preevent-card col-lg-3 col-md-6 col-sm-12">
          <div className="preevent-img">
            <img src={giccclass_landing} alt="GICClass landing" />
          </div>
          <h3>GICClass</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            temporibus error consectetur eveniet nisi veritatis numquam quidem
            hic commodi ex.
          </p>
          <h3>Our Speakers</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            cum eum voluptatum nemo iusto earum ut repellendus sint quisquam
            officiis.
          </p>
          <div className="learn-more">
            <a href="#" className="learn-more">
              {"Learn More >"}
            </a>
          </div>
        </div>
        <div className="preevent-card col-lg-3 col-md-6 col-sm-12">
          <div className="preevent-img">
            <img src={dialogicc_landing} alt="DialoGICC landing" />
          </div>
          <h3>DialoGICC</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            temporibus error consectetur eveniet nisi veritatis numquam quidem
            hic commodi ex.
          </p>
          <h3>Our Speakers</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            cum eum voluptatum nemo iusto earum ut repellendus sint quisquam
            officiis.
          </p>
          <div className="learn-more">
            <a href="#" className="learn-more">
              {"Learn More >"}
            </a>
          </div>
        </div>
        <div className="preevent-card col-lg-3 col-md-6 col-sm-12">
          <div className="preevent-img">
            <img src={minicc_landing} alt="MiniGICC landing" />
          </div>
          <h3>MiniCC</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            temporibus error consectetur eveniet nisi veritatis numquam quidem
            hic commodi ex.
          </p>
          <h3>Our Speakers</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            cum eum voluptatum nemo iusto earum ut repellendus sint quisquam
            officiis.
          </p>
          <div className="learn-more">
            <a href="#" className="learn-more">
              {"Learn More >"}
            </a>
          </div>
        </div>
      </div>
      <style>
        {`
        .preevent img {
          width: 100%;
        }
        
        .preevent h3 {
          font-size: 2em;
          font-weight: 700;
          margin: 0.4em 0;
        }
        
        .preevent p {
          margin-top: -1em;
          font-size: 1.2em;
        }

        .preevent .learn-more {
          display: flex;
          justify-content: center;
        }
        .preevent a {
          font-size: 1.2em;
          font-weight: 700;
          
        }

        @media only screen and (max-width: ${Dimen.mdBreakpoint}) {
          .preevent p {
            font-size: 1em;
          }
        
          .preevent img {
            width: 70%;
          }

          .preevent-img {
            display: flex;
            justify-content: center;
          }

          .preevent h3, .preevent p {
            text-align: center;
          }
        }

        @media only screen and (max-width: ${Dimen.lgBreakpoint}) {
          .preevent-card {
            margin-bottom: 3rem;
          }
        }
        `}
      </style>
    </div>
  );
};

export default Landing_Preevent;
