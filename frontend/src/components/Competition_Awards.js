import React, { useState, useEffect, Component } from "react";
import potrait_1 from "images/potrait-1.jpg";

const awards = () => {
    return (
        <div className="competition-awards">
            <h1>Awards</h1>
            <div className = "awards-list">
                <div className = "awards-lists">
                    <Winners kal1={"Team Champion"} kal2="IDR 3.000.000" image={potrait_1} />
                    <Winners kal1={"Best Speaker"} kal2="IDR 500.000" image={potrait_1} />
                </div>
                <div className = "awards-lists">
                    <Winners kal1={"Individual Winner of Operation"} kal2="IDR 1.000.000" image={potrait_1} />
                    <Winners kal1={"Individual Winner of Marketing"} kal2="IDR 1.000.000" image={potrait_1} />
                    <Winners kal1={"Individual Winner of EHS"} kal2="IDR 1.000.000" image={potrait_1} />
                </div>
            </div>
        </div>
    );
}


const benefits = () => {
    return (
        <div className="competition-awards">
            <h1>Benefits</h1>
            <div className = "benefits-list">
                <Winners kal1={""} kal2={"Connect with game-changers from all over Indonesia"} image={potrait_1} />
                <Winners kal1={""} kal2={"Mentored by the experts in their respective field"} image={potrait_1} />
                <Winners kal1={""} kal2={"Internship opportunity on case contributor’s company"} image={potrait_1} />
                <Winners kal1={""} kal2={"e-Certificate"} image={potrait_1} />
            </div>
        </div>
    );
}

const Winners = p => {
    if (p.kal1 !== "") {
        return (
            <div className ="winners">
                <div className = "the-winners">
                    <div style={{margin: "auto"}}>
                      <h3>{p.kal1}</h3>
                      <h4>{p.kal2}</h4>
                    </div>
                </div>
            </div>
        ); 
    } else {
        return (
            <div className ="winners">
                <div className = "the-winners">
                    <div style={{margin: "auto"}}>
                      <h3>{p.kal2}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export const Awards = awards;
export const Benefits = benefits;
