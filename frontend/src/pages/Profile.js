import React, { Component } from "react";
import Title from "components/Title";
import { AuthContext } from "context/Auth";

class FileSubmit extends Component{
  constructor(props){
    super(props);
    this.state={
      file: ""
    }
  }

  onFileChange(e){
    this.setState({file: e.target.files[0]});
  }

  titleString(){
    switch(this.props.name){
      case "TRF":
        return "Payment";
      case "PRO":
        return "Proposal";
      case "KTM":
        return "Student's card";
      case "TWB":
        return "Twibbon";
    }
  }

  getFile(){
    let files = this.props.authctx.files;
    
    for(let i = 0; i < files.length; i++){
      if(files[i].purpose == this.props.name){
        return(<a style={{width: "100%"}} href={files[i].file}><p>Download file</p></a>);
      }
    }

    return(<p>No file has been uploaded.</p>);
  }

  async submit(){
    console.log("submitting");

    if(this.state.file != ""){
      let url = "/app/user/files/";
      let formData = new FormData();
      formData.append("file", this.state.file, this.props.name);
      formData.append("purpose", this.props.name);
      let init = {
        method: 'POST',
        body: formData,
        headers: {}
      };
      await this.props.authctx.authenticator(init);

      await fetch(url, init);
      await this.props.authctx.getInfo();
    }
  }

  render(){
      return(
        <div className="textbox">
          <h4>{this.titleString()}</h4>
          <input type="file" className="checkbox" name={this.props.name} onChange={e => {this.onFileChange(e)}}/>
          <div className="checkbox flex-horizontal" >
            <p className="button clickable" onClick={() => {this.submit()}}>Upload</p>
            {this.getFile()}
          </div>
        </div>
    );
  }
}

class Textfield extends Component{
  onTextChange(e){
    this.props.updateText(this.props.name, e.target.value);
  }  

  render() {
    return(
      <div className="textbox">
        <h4>{this.props.title}</h4>
        <input type="text" defaultValue={this.props.default} onChange={e => {this.onTextChange(e)}}/>
      </div>
    );
  }
}


class Profile extends Component{
  constructor(props){
    super(props);
    this.state={
      data: {}
    };
  }

  onTextChange(name, value){
    let data = this.state.data;
    data[name] = value;

    this.setState(data);
  }

  render() {
    return (
      <div className="content">
        <div className="container">
          <AuthContext.Consumer>
            {auth =>{
              let content;
              if(auth.agree_terms == false)
                content = (
                  <div className="agreement">
                    <h4>Please read the terms before proceeding. By clicking proceed, you state that you have agreed to all the terms written in the document.</h4>
                    <div className="flex-horizontal button-container">
                      <p className="button clickable" onClick={() => {auth.updateInfo({agree_terms: true})}}>Proceed</p>
                      <a><p>Download File</p></a>
                    </div>
                  </div>
                );
              else
                content = (
                  <div className="flex-container">
                    <div className="flex-left">
                      <h3>Biodata</h3>
                      <Textfield name="first_name" title="Name" default={auth.user.first_name} updateText={(a, b) => this.onTextChange(a,b)}/>
                      <Textfield name="last_name" title="Full Name" default={auth.user.last_name} updateText={(a, b) => this.onTextChange(a,b)}/>
                      <Textfield name="uni" title="University" default={auth.uni} updateText={(a, b) => this.onTextChange(a,b)}/>
                      <Textfield name="major" title="Major" default={auth.major} updateText={(a, b) => this.onTextChange(a,b)}/>
                      <Textfield name="category" title="Category" default={auth.category} updateText={(a, b) => this.onTextChange(a,b)}/>
                      
                      <h3>Contact Information</h3>
                      <Textfield name="phone_no" title="Phone number" default={auth.phone_no} updateText={(a, b) => this.onTextChange(a,b)}/>
                      <Textfield name="line" title="LINE ID" default={auth.line} updateText={(a, b) => this.onTextChange(a,b)}/>

                      <button className="clickable" onClick={() => {auth.updateInfo(this.state.data)}}>Update information</button>
                    </div>
                    <div className="flex-right">
                      <h3>Files</h3>
                      <FileSubmit name="TRF" authctx={auth}/>
                      <FileSubmit name="KTM" authctx={auth}/>
                      <FileSubmit name="TWB" authctx={auth}/>
                    </div>
                  </div>
                );

                return (<div className="profile">
                  <Title text={`Hi, ${auth.user.first_name}`} />
                  {content}
                  <button className="clickable secondary-button" onClick={auth.logout}>Logout</button>
                </div>
              );
            }}  
          </AuthContext.Consumer>
        </div>
      </div>
    );
  }; 
}

export default Profile;
