import BlueContainer from "components/BlueContainer";
import Landing_Competition2 from "components/Landing_Competition2";
import Footer from "components/Footer";
import Title from "components/Title";
import potrait_1 from "images/potrait-1.jpg";
import React, { useState, useEffect, Component } from "react";
import Timeline from "components/Competition_Timeline"
import FAQ from "components/Competition_FAQ"
import Guidebook from "files/GICC_2021_Guidebook.pdf"
import { Awards, Benefits } from "components/Competition_Awards"
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
        case "CASE":
          return "Case";
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
class Textfield extends Component {
  onTextChange(e) {
    this.props.updateText(this.props.name, e.target.value);
  }

  render() {
    return (
      <div className="textbox">
        <h4>{this.props.title}</h4>
        <input
          type="text"
          defaultValue={this.props.default}
          readOnly={this.props.readOnly}
          onChange={(e) => {
            this.onTextChange(e);
          }}
        />
      </div>
    );
  }
}
class Selectfield extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: this.props.default,
    };
  }

  onTextChange(e) {
    this.props.updateText(this.props.name, e.target.value);
    this.setState({select: e.target.value});
  }

  render() {
    return (
      <div className="textbox">
        <h4>{this.props.title}</h4>
        <select
          value={this.state.select}
          onChange={(e) => {
            this.onTextChange(e);
          }}
        >
          <option value="NO">---</option>
          <option value="EH">Enviromental Health Safety</option>
          <option value="OP">Operational</option>
          <option value="MA">Marketing</option>
        </select>
      </div>
    );
  }
}
const Case = () => {

  const popup = UsePopup();
  const auth = UseAuth();

  return (
    <div className="content">
      <div className="container">
        <div className="competition-hero">
          <Title text={"Case"} />
          <div>
            <p>
              <span>Ganesha Integration Case Competition 2021</span> is a program that prepares ITB students to face
              real-world industrial problems and innovate an advancement that improves the key sectors of
              companies. <br/><br/>

              In the preliminary phase, participants must develop a strategy-based solution for the distributed
              case to help companies achieve their goals. Five most eligible participants of each sector will be
              chosen to be finalists and combined into a team of three.<br/><br/>
            </p>
          </div>
          <br/>
          <div className="flex-fullscreen">
            <div className="flex-left">
              <br/>
              <br/>
                <a href="/"><div className="guidebook-button">
                  <button class="clickable">Download Case</button>
                </div></a>
            </div>
            <div className="flex-right">
              <h3>Upload</h3>
              <FileSubmit name="CASE" authctx={auth} popupctx={popup} />
            </div>
          </div>
          <div>
            <p>
              
              Finalist teams are then to develop a solution for
              the issues given by the case contributor together and present it to the judges and company
              stakeholders to win the final prize.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;
