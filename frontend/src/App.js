import React from "react";
import "./App.css";
import pic1 from "./img/pic1.jpeg";
import compImg from "./img/competition.jpg";

function App() {
  return (
    <body>
      <header>
        <div class="container">
          <div id="home">
            <h1>GICC</h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Pre-Events</a>
              </li>
              <li>
                <a href="">Competition</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="description">
        <div class="container">
          <h1>Logo GICC</h1>
          <div class="desc-box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              purus velit, placerat sed vestibulum vel, egestas vitae tellus.
              Mauris condimentum ut mauris eget pretium.
            </p>
          </div>
          <div class="desc-box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              purus velit, placerat sed vestibulum vel, egestas vitae tellus.
              Mauris condimentum ut mauris eget pretium.
            </p>
          </div>
          <div class="desc-box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              purus velit, placerat sed vestibulum vel, egestas vitae tellus.
              Mauris condimentum ut mauris eget pretium.
            </p>
          </div>
        </div>
      </section>
      <section id="pre">
        <div class="title">
          <h1>Pre Events</h1>
        </div>
        <div class="container">
          <div class="pre-boxes">
            <div class="pre-box">
              <img src={pic1} />
              <div class="pre-box-subtitle">
                <h1>StrateGICC</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                purus velit, placerat sed vestibulum vel
              </p>
              <div class="pre-box-subtitle">
                <h1>Our Speakers</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                purus velit
              </p>
            </div>
            <div class="pre-box">
              <img src={pic1} />
              <div class="pre-box-subtitle">
                <h1>GICClass</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                purus velit, placerat sed vestibulum vel
              </p>
              <div class="pre-box-subtitle">
                <h1>Our Speakers</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                purus velit
              </p>
            </div>
            <div class="pre-box">
              <img src={pic1} />
              <div class="pre-box-subtitle">
                <h1>DialoGICC</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                purus velit, placerat sed vestibulum vel
              </p>
              <div class="pre-box-subtitle">
                <h1>Our Speakers</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                purus velit
              </p>
            </div>
            <div class="pre-box">
              <img src={pic1} />
              <div class="pre-box-subtitle">
                <h1>MiniGICC</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                purus velit, placerat sed vestibulum vel
              </p>
              <div class="pre-box-subtitle">
                <h1>Our Speakers</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                purus velit
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="competition">
        <div class="title">
          <h1>Competition</h1>
        </div>
        <div class="container">
          <p>
            "The competition itself is lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Biggest event of the millennium."
          </p>
          <img src={compImg} />
        </div>
      </section>
      <section id="awards">
        <div class="title">
          <h1>Awards</h1>
        </div>
      </section>
      <section id="timeline">
        <div class="title">
          <h1>Timeline</h1>
        </div>
      </section>
      <section id="supported">
        <div class="title">
          <h1>Supported By</h1>
        </div>
      </section>
    </body>
  );
}

export default App;
