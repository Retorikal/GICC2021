import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/onwhite_short.png";

const Footer = () => {
  return (
    <div>
      <div className="content">
        <div className="footer-top row">
          <div className="footer-logo col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center">
            <div className="footer-logo-container">
              <img src={Logo} />
            </div>
          </div>
          <div className="footer-nav col-lg-4 col-md-6 col-sm-6 col-6 d-flex justify-content-center">
            <div>
              <h3 className="footer-title">Navigation</h3>
              <div className="footer-link">
                <Link to="/">Home</Link>
              </div>
              <div className="footer-link">
                <Link to="/competition">Competition</Link>
              </div>
              <div className="footer-link">
                <Link to="/login">Register</Link>
              </div>
            </div>
          </div>
          <div className="footer-soc col-lg-4 col-md-6 col-sm-6 col-6 d-flex justify-content-center">
            <div>
              <h3 className="footer-title">Socials</h3>
              <div>
                <p>ganesha@ganeshaicc.my.id</p>
              </div>
              <div>
                <p><a href="https://www.instagram.com/ganesha.icc/">@ganesha.icc</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright d-flex justify-content-center">
          <p className="text-center">
            Copyright © 2020-2021 Ganesha Integration Case Competition
          </p>
        </div>
      </div>
      <style>
        {`
            .footer-logo img {
                width: 70%;
                min-width: 15rem;
                
            }

            .footer-title {
                font-weight: 700;
            }

            .footer-link {
                font-size: 1.2rem;
                margin: 1rem 0;
            }

            .footer-top p {
                font-size: 1.2rem;
                margin: 1rem 0;
            }

            @media only screen and (max-width: 960px) {
                .footer-logo-container {
                    display: flex;
                    justify-content: center;
                }

                .footer-logo img {
                    width: 55%;
                    
                }

                .footer-nav, .footer-soc {
                    margin-top : 1.5rem;
                }

                .footer-link {
                    font-size: 1rem;
                    margin: .7rem 0;
                }
    
                .footer-top p {
                    font-size: 1rem;
                    margin: .7rem 0;
                }
            }
            @media only screen and (max-width: 768px) {
                .footer-logo img {
                    width: 25%;
                    
                }
            }
          `}
      </style>
    </div>
  );
};

export default Footer;
