import React, { useState, useEffect, Component } from "react";
import potrait_1 from "images/potrait-1.jpg";

/*
<div className="container">
        <div className="competition-awards">
          <h1>Awards</h1>
          <div className="awards1">
            <div className="aw-be">
              <img src={potrait_1} />
              <h3>Team Champion</h3>
              <h4>IDR</h4>
            </div>
            <div className="aw-be">
              <img src={potrait_1} />
              <h3>Best Team Prize</h3>
              <h4>IDR</h4>
            </div>
            <div className="aw-be">
              <img src={potrait_1} />
              <h3>Best Speaker</h3>
              <h4>IDR</h4>
            </div>
          </div>
          <div className="awards2">
            <div className="aw-be">
              <img src={potrait_1} />
              <h3>1st Individual Winner of Operation</h3>
              <h4>IDRinisengaja panjang banget hehehe</h4>
            </div>
            <div className="aw-be">
              <img src={potrait_1} />
              <h3>1st Individual Winner of Marketing</h3>
              <h4>IDR</h4>
            </div>
            <div className="aw-be">
              <img src={potrait_1} />
              <h3>1st Individual Winner of EHS</h3>
              <h4>IDR</h4>
            </div>
          </div>
          <h2>Benefits</h2>
          <div className="benefits">
            <div className="aw-be2">
              <img src={potrait_1} />
              <h4>Connect with game-changers from all over Indonesia</h4>
            </div>
            <div className="aw-be2">
              <img src={potrait_1} />
              <h4>Mentored by the experts in their respective field</h4>
            </div>
            <div className="aw-be2">
              <img src={potrait_1} />
              <h4>Internship opportunity on case contributor’s company</h4>
            </div>
            <div className="aw-be2">
              <img src={potrait_1} />
              <h4>e-Certificate</h4>
            </div>
          </div>
        </div>
      </div>
*/

const awards = () => {
    return (
        <div className="competition-awards">
            <h1>Awards</h1>
            <div className = "awards-list">
                <div className = "awards-lists">
                    <Winners kal1={"Team Champion"} kal2="IDR" image={potrait_1} />
                    <Winners kal1={"Best Team Prize"} kal2="IDR" image={potrait_1} />
                    <Winners kal1={"Best Speaker"} kal2="IDR" image={potrait_1} />
                </div>
                <div className = "awards-lists">
                    <Winners kal1={"1st Individual Winner of Operation"} kal2="IDR" image={potrait_1} />
                    <Winners kal1={"1st Individual Winner of Marketing"} kal2="IDR" image={potrait_1} />
                    <Winners kal1={"1st Individual Winner of EHS"} kal2="IDR" image={potrait_1} />
                </div>
            </div>
        </div>
    );
}


const benefits = () => {
    return (
        <div className="competition-awards">
            <h2>Benefits</h2>
            <div className = "benefits-list">
                <Winners kal1={"a"} kal2={"Connect with game-changers from all over Indonesia"} image={potrait_1} />
                <Winners kal1={"a"} kal2={"Mentored by the experts in their respective field"} image={potrait_1} />
                <Winners kal1={"a"} kal2={"Internship opportunity on case contributor’s company"} image={potrait_1} />
                <Winners kal1={"a"} kal2={"e-Certificate"} image={potrait_1} />
            </div>
        </div>
    );
}

const Winners = p => {
    if (p.kal1 !== "a") {
        return (
            <div className ="winners">
                <div className = "the-winners">
                    <h3>{p.kal1}</h3>
                    <h4>{p.kal2}</h4>
                </div>
            </div>
        ); 
    } else {
        return (
            <div className ="winners">
                <div className = "the-benefits">
                    <h4>{p.kal2}</h4>
                </div>
            </div>
        );
    }
}

export const Awards = awards;
export const Benefits = benefits;
