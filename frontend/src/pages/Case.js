import BlueContainer from "components/BlueContainer";
import Landing_Competition2 from "components/Landing_Competition2";
import { Link, Redirect } from "react-router-dom";
import Footer from "components/Footer";
import Title from "components/Title";
import React, { useState, useEffect, Component } from "react";
import Guidebook from "files/GICC_2021_Guidebook.pdf"
import Case_EH from "files/Preliminary Case (EH).pdf"
import Case_MA from "files/Preliminary Case (MA).pdf"
import Case_OP from "files/Preliminary Case (OP).pdf"
import Originality from "files/Statement of Originality.docx"
import { AuthContext, UseAuth } from "context/Auth";
import { PopupContext, UsePopup } from "context/Popup";

class FileSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      showUpload: true,
    };
  }

  componentDidMount(){
    let file = this.getFile();
    console.log("Mounted");

    if(file.file != null)
      this.setState({showUpload: false});
  }

  onFileChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  titleString() {
    switch (this.props.name) {
      case "PRO":
        return "Proposal";
    }
  }

  getFile(){
    let files = this.props.authctx.files;

    for (let i = 0; i < files.length; i++) {
      if (files[i].purpose == this.props.name) {
        return files[i];
      }
    }

    return {file:null};
  }

  getFileLink(file) {
    if(file.file != null)
      return (
          <a style={{ width: "100%" }} href={file.file}>
            <p>{file.verified? "File has been verified (Download here).":"File has been uploaded (Download)."}</p>
          </a>
        );
    else
      return <p>No file has been uploaded.</p>;
  }

  button(){
    if(this.state.showUpload)
      return (
        <p
          className="button clickable"
          onClick={() => {this.submit();}}
        >
          Upload
        </p>
      )
    else
      return (
        <p
          className="button clickable"
          onClick={() => {this.setState({showUpload: true});}}
        >
          Update
        </p>
      )
  }

  async submit() {
    console.log("submitting");
    console.log(this.state.file);

    if (this.state.file != "") {
      let url = "/app/user/files/";
      let formData = new FormData();
      formData.append(
        "file",
        this.state.file,
        this.props.name + this.state.file.name
      );
      formData.append("purpose", this.props.name);
      let init = {
        method: "POST",
        body: formData,
        headers: {},
      };
      await this.props.authctx.authenticator(init);

      let response = await fetch(url, init);
      let data = await response.json();

      if (response.status >= 400) {
        this.props.popupctx.showPopup("Upload failed: " + data.error, "error");
      } else {
        this.props.popupctx.showPopup("Upload successful", "success");
        this.setState({showUpload: false});
      }

      await this.props.authctx.getInfo();
    }
  }

  render() {
    let file = this.getFile()

    return (
      <div className="textbox">
        <h4>{this.titleString()}</h4>
        {(!file.verified && this.state.showUpload?
          <input
            type="file"
            className="checkbox"
            name={this.props.name}
            onChange={(e) => {this.onFileChange(e);}}
          /> : null
        )}
        <div className="checkbox flex-horizontal">
          {!file.verified ? this.button() : null}
          {this.getFileLink(file)}
        </div>
      </div>
    );
  }
}

const sec_cho = {
  OP: Case_OP,
  MA: Case_MA,
  EH: Case_EH,
};

const Case = () => {

  const popup = UsePopup();
  const auth = UseAuth();

  if ((!auth.is_verified || auth.error != 0) && auth.ready) {
    // Wait for auth to complete initial componentDidMount before determining if redirecting is necessary
    if(!auth.is_verified)
      popup.showPopup("Seems like your registration isn't complete. Please contact us to check what's wrong.", "error");
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className="content">
      <div className="container">
        <div className="userfacing competition-hero">
          <Title text={"Case"} />
          <div>
            <p>
              Please check the <a href={Guidebook}><span>updated guidebook</span></a> first, then <span>you can start working on the provided case below.</span> Good luck!
            </p>
          </div>
          <div className="flex-fullscreen">
            <div className="flex-left">
              <div className="participant-id">
                Your participant ID is <span>{auth.verify_code}</span>.
              </div>
              <a href={sec_cho[auth.sector]}><button className="clickable guidebook-button">Download Case</button></a>
              <a href={Originality}><button className="clickable guidebook-button">Originality statement</button></a>
            </div>
            <div className="flex-right">
              <h3>Upload</h3>
              <FileSubmit name="PRO" authctx={auth} popupctx={popup} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;
