import React from "react";
import Logo_KM from "../images/logo_km.png";
import Logo_Kabinet from "../images/logo_kabinet.png";
import Logo_Growthlabs from "../images/logo_growthlabs.png";

const Landing_Title = () => {
  return (
    <div>
      <div className="landing-title-container">
        <div className="title-top">
          <h1>GANESHA INTEGRATION CASE COMPETITION</h1>
          <div className="green-bar">1</div>
        </div>
        <div className="title-quote">
          <ul>
            <li>
              <p>
              "GICC will open your eyes on how real-world industrial problems are solved
              and how innovations are generated, including the ethics and conflicts behind it."
              </p>
            </li>
            <li>
              <p>
              "GICC is set to make you cooperate with people you have never met and collaborate with
              colleagues from different backgrounds. Mimicking a professional environment to prepare you, to
              change the game in the future."
              </p>
            </li>
          </ul>
        </div>
        <div className="title-logo">
          <img className="logo-km" src={Logo_KM} />
          <img className="logo-kabinet" src={Logo_Kabinet} />
          <img className="logo-growthlabs" src={Logo_Growthlabs} />
        </div>
      </div>
      <style>
        {`
          .title-top {
              margin-top: 6rem;
              width: 40.1rem;
          }
          .title-top h1 {
              font-weight: 700;
              font-size: 3.5rem;
              margin-bottom: 1rem;
              position: relative;
              z-index: 3;
          }

          .title-top .green-bar {
              width: 23rem;
              position: absolute;
              background: #78EEDD;
              color: #78EEDD;
              top: 13rem;
              left: 27rem;
              z-index: -1;
          }

          .title-quote ul {
              margin: 3.5rem 0;
              width: 30rem;
              line-height: 2;
          }

          .title-quote p {
              font-size: 1.5rem;
          }

          .title-quote span {
              font-weight: 700;
          }

          .title-logo {
              display : flex;
              justify-content: space-between;
              width: 50%;
              margin-bottom: 6rem;
          }

          .title-logo .logo-km {
              width: 6rem;
          }

          .title-logo .logo-kabinet {
              width: 12rem;
          }

          .title-logo .logo-growthlabs {
              width: 15rem;
          }

          @media only screen and (max-width: 868px) {
            .title-top {
              margin-top: 3rem;
              width: 20.1rem;
            }

            .title-top .green-bar {
              width: 26rem;
              top: 14rem;
              left: 10rem;
              
            }
          }



          @media only screen and (max-width: 768px) {
            .landing-title-container {
              padding: 2em;
            }

            .title-top .green-bar {
              left: 2rem;
              
            }
          }
        `}
      </style>
    </div>
  );
};

export default Landing_Title;
