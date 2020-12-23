import React from "react";
import Logo_KM from "../images/logo_km.png";
import Logo_Kabinet from "../images/logo_kabinet.png";
import Logo_Growthlabs from "../images/logo_growthlabs.png";

const Landing_Title = () => {
  return (
    <div>
      <div className="title-top">
        <h1>GANESHA INTEGRATION CASE COMPETITION</h1>

        <div className="green-bar">1</div>
      </div>
      <div className="title-quote">
        <p>
          "I think I'm about to go <span>insane</span>. Nah really, I'm having a
          mental breakdown <span>right now</span>."
        </p>
      </div>
      <div className="title-logo">
        <img className="logo-km" src={Logo_KM} />
        <img className="logo-kabinet" src={Logo_Kabinet} />
        <img className="logo-growthlabs" src={Logo_Growthlabs} />
      </div>
      <style>
        {`
            .title-top {
                margin-top: 6rem;
                width: 45rem;
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

            .title-quote {
                margin: 3.5rem 0;
                width: 30rem;
                font-size: 1.5rem;
                line-height: 2;
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
          `}
      </style>
    </div>
  );
};

export default Landing_Title;