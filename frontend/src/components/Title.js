import React from "react";

const Title = (props) => {
	if(props.center == null) 
	  return (
	    <div className="title">
	      <div>{props.text}</div>
	      <div className="shadow-1">{props.text}</div>
	      <div className="shadow-2">{props.text}</div>
	    </div>
	  );
	else {
  	let centerStyle={
	 		textAlign: 'center',
	 		width: '100%'
	  }
	  return (<div className="title">
	      <div style={centerStyle}>{props.text}</div>
	      <div className="shadow-1" style={centerStyle}>{props.text}</div>
	      <div className="shadow-2" style={centerStyle}>{props.text}</div>
	    </div>
	  );
	 }
};

export default Title;
