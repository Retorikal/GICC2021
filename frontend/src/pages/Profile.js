import React, { Component } from "react";
import Title from "components/Title";
import { AuthContext } from "context/Auth";

class FileSubmit extends Component{
  onFileChange(e){
    this.setState({file: e.target.files[0]});
    console.log(e);
  }

  titleString(){
    switch(this.props.name){
      case "payment":
        return "Payment";
      case "proposal":
        return "Proposal";
      case "id_card":
        return "Student's card";
    }
  }

  async submit(){
    console.log("submitting");

    let url = "/app/user/files/";
    let formData = new FormData();
    formData.append("file", this.state.file, "payment");
    formData.append("type", this.props.name);
    formData.append("token", "uwu")
    let init = {
      method: 'POST',
      body: formData,
      headers: {}
    };
    this.props.authenticator(init);

    let response = await fetch(url, init);
  }

  render(){
      return(
        <div className="textbox">
          <h4>{this.titleString()}</h4>
          <input type="file" className="checkbox" name={this.props.name} onChange={e => {this.onFileChange(e)}}/>
          <div className="checkbox" onClick={() => {this.submit()}}>
            <p>Received</p>
          </div>
        </div>
    );
  }
}

const Profile = (props) => {
  const username = "adminadminadmin";
  const email = "admin@company.com";
  const fullname = "Admin Admin";
  const paymentStatus = true;
  const fileSubmission = true;

  return (
    <div className="content">
      <div className="container">
        <AuthContext.Consumer>
          {auth =>{
          return (<div className="profile">
            <Title text={`Hi, ${username}`} />
            <div className="profile-container">
              <div className="profile-left">
                <div className="textbox">
                  <h4>Username</h4>
                  <input type="text" value={username} />
                </div>
                <div className="textbox">
                  <h4>Email</h4>
                  <input type="text" value={email} />
                </div>
                <div className="textbox">
                  <h4>Fullname</h4>
                  <input type="text" value={fullname} />
                </div>
              </div>
              <div className="profile-right">
                <FileSubmit name="payment" authenticator={auth.authenticator}/>
                <FileSubmit name="proposal"/>
                <FileSubmit name="id_card"/>
              </div>
            </div><button onClick={auth.logout}>Logout</button>
          </div>);}}  
        </AuthContext.Consumer>
      </div>
    </div>
  );
};

export default Profile;
