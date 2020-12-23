import React, { useState, useEffect, Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext, UseAuth } from "context/Auth";
import { PopupContext, UsePopup } from "context/Popup";
import Title from "components/Title";

class FileSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
    };
  }

  onFileChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  titleString() {
    switch (this.props.name) {
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

  getFile() {
    let files = this.props.authctx.files;

    for (let i = 0; i < files.length; i++) {
      if (files[i].purpose == this.props.name) {
        return (
          <a style={{ width: "100%" }} href={files[i].file}>
            <p>Download file</p>
          </a>
        );
      }
    }

    return <p>No file has been uploaded.</p>;
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
      }

      await this.props.authctx.getInfo();
    }
  }

  render() {
    return (
      <div className="textbox">
        <h4>{this.titleString()}</h4>
        <input
          type="file"
          className="checkbox"
          name={this.props.name}
          onChange={(e) => {
            this.onFileChange(e);
          }}
        />
        <div className="checkbox flex-horizontal">
          <p
            className="button clickable"
            onClick={() => {
              this.submit();
            }}
          >
            Upload
          </p>
          {this.getFile()}
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
          onChange={(e) => {
            this.onTextChange(e);
          }}
        />
      </div>
    );
  }
}

const sec_cho = {
  OP: "Operations",
  MA: "Marketing",
  EH: "Enviromental Health Safety",
};

const fields_name = {
  first_name: "First Name",
  last_name: "Full Name",
  uni: "University",
  major: "Major",
  sector: "Sector",
  phone_no: "Phone number",
  line: "LINE ID",
};

const Profile = () => {
  const [data, setData] = useState({ user: {} });
  const [redirect, setRedirect] = useState(null);

  const popup = UsePopup();
  const auth = UseAuth();

  const onTextChange = (name, value) => {
    let tmp_data = data;
    tmp_data[name] = value;

    setData(tmp_data);
  };

  const onUserChange = (name, value) => {
    let tmp_user = data.user;
    tmp_user[name] = value;

    let tmp_data = data;
    tmp_data.user = tmp_user;

    setData(tmp_data);
  };

  const updateInfo = () => {
    auth.updateInfo(data).then((result) => {
      if (result.error == 0) {
        popup.showPopup("Information updated.", "success");
      } else {
        let err = Object.entries(result);
        popup.showPopup(fields_name[err[0][0]] + ": " + err[0][1], "error");
      }
    });
  };

  let content;
  if (auth.agree_terms == false)
    content = (
      <div className="agreement">
        <h4>
          Please read the terms before proceeding. By clicking proceed, you
          state that you have agreed to all the terms written in the document.
        </h4>
        <div className="flex-horizontal button-container">
          <p
            className="button clickable"
            onClick={() => {
              auth.updateInfo({ agree_terms: true });
            }}
          >
            Proceed
          </p>
          <a>
            <p className="secondary-button">Download File</p>
          </a>
        </div>
      </div>
    );
  else
    content = (
      <div className="flex-container">
        <div className="flex-left">
          <h3>Biodata</h3>
          <Textfield
            name="first_name"
            title="First Name"
            default={auth.user.first_name}
            updateText={(a, b) => onUserChange(a, b)}
          />
          <Textfield
            name="last_name"
            title="Full Name"
            default={auth.user.last_name}
            updateText={(a, b) => onUserChange(a, b)}
          />
          <Textfield
            name="uni"
            title="University"
            default={auth.uni}
            updateText={(a, b) => onTextChange(a, b)}
          />
          <Textfield
            name="major"
            title="Major"
            default={auth.major}
            updateText={(a, b) => onTextChange(a, b)}
          />
          <Textfield
            name="sector"
            title="Sector"
            default={sec_cho[auth.sector]}
            updateText={(a, b) => onTextChange(a, b)}
          />

          <h3>Contact Information</h3>
          <Textfield
            name="phone_no"
            title="Phone number"
            default={auth.phone_no}
            updateText={(a, b) => onTextChange(a, b)}
          />
          <Textfield
            name="line"
            title="LINE ID"
            default={auth.line}
            updateText={(a, b) => onTextChange(a, b)}
          />

          <button className="clickable" onClick={updateInfo}>
            Update information
          </button>
        </div>
        <div className="flex-right">
          <h3>Files</h3>
          <FileSubmit name="TRF" authctx={auth} popupctx={popup} />
          <FileSubmit name="KTM" authctx={auth} popupctx={popup} />
          <FileSubmit name="TWB" authctx={auth} popupctx={popup} />
        </div>
      </div>
    );

  if (auth.error != 0 && auth.ready) {
    // Wait for auth to complete initial componentDidMount before determining if redirecting is necessary
    return <Redirect to={"/login"} />;
  }
  return (
    <div className="content">
      <div className="container">
        <div className="profile">
          <Title text={`Hi, ${auth.user.first_name}`} />
          {content}
          <button className="clickable secondary-button" onClick={auth.logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
