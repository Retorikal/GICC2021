import React, { useState, useEffect, Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext, UseAuth } from "context/Auth";
import { PopupContext, UsePopup } from "context/Popup";

const Timeline = () => {
	return (
		<div className="container timeline">
			<Timebox title={"Open Registration"} date="27 December 2020"/>
			<Timebox title={"Close Registration (Early bird)"} date="10 January 2021"/>
			<Timebox title={"Close Registration"} date="17 January 2021"/>
			<Timebox title={"Preliminary Case Deployment"} date="23 January 2021"/>

			<Timebox title={"Case Submission"} date="5 February 2021"/>
			<Timebox title={"Finalist Announcement"} date="13 February 2021"/>
			<Timebox title={"Technical Meeting"} date="14-15 February 2021"/>
			<Timebox title={"Final Case Deployment"} date="17 February 2021"/>

			<Timebox title={"Team Discussion, Preparation, & Mentoring"} date="17-19 Feb 2021"/>
			<Timebox title={"Final Presentation"} date="20 February 2021"/>
			<Timebox title={"Company Visit & Winner Announcement"} date="21 January 201"/>
		</div>
	);
}

const Timebox = p => {
	return (
		<div className="timebox">
			<div className="timebox-dotbox"/>
			<div className="timebox-circle">
				<div className="timebox-content">				
					<span>{p.title}</span>
					<br/>
					{p.date}
				</div>
			</div>
			<div className="timebox-dotbox"/>
		</div>
	);
}

export default Timeline;