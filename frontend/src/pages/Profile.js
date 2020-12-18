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
      await this.props.authctx.updateInfo();
    }
  }

  render(){
      return(
        <div className="textbox">
          <h4>{this.titleString()}</h4>
          <input type="file" className="checkbox" name={this.props.name} onChange={e => {this.onFileChange(e)}}/>
          <div className="checkbox flex-horizontal" >
            <p className="button" onClick={() => {this.submit()}}>Upload</p>
            {this.getFile()}
          </div>
        </div>
    );
  }
}

const Textfield = (props) => {
  return(
    <div className="textbox">
      <h4>{props.title}</h4>
      <input type="text" defaultValue={props.default} />
    </div>
  );
}

const Profile = (props) => {
  return (
    <div className="content">
      <div className="container">
        <AuthContext.Consumer>
          {auth =>{
          return (<div className="profile">
            <Title text={`Hi, ${auth.user.first_name}`} />
            <div className="flex-container">
              <div className="flex-left">
                <h3>Biodata</h3>
                <Textfield title="Name" default={auth.user.first_name}/>
                <Textfield title="Full Name" default={auth.user.last_name}/>
                <Textfield title="University" default={auth.uni}/>
                <Textfield title="Major" default={auth.phone_no}/>

                <h3>Contact Information</h3>
                <Textfield title="Phone number" default={auth.phone_no}/>
                <Textfield title="LINE ID" default={auth.line}/>

              </div>
              <div className="flex-right">
                <h3>Files</h3>
                <FileSubmit name="TRF" authctx={auth}/>
                <FileSubmit name="PRO" authctx={auth}/>
                <FileSubmit name="KTM" authctx={auth}/>
                <FileSubmit name="TWB" authctx={auth}/>
              </div>
            </div><button onClick={auth.logout}>Logout</button>
          </div>);}}  
        </AuthContext.Consumer>
      </div>
    </div>
  );
};

export default Profile;
