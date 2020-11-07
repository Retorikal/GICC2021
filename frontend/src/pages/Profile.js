import React from "react";
import Title from "../components/Title";

const Profile = () => {
  const username = "adminadminadmin";
  const email = "admin@company.com";
  const fullname = "Admin Admin";
  const paymentStatus = true;
  const fileSubmission = true;
  return (
    <div className="content">
      <div className="container">
        <div className="profile">
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
              <div className="textbox">
                <h4>Payment Status</h4>
                <div className="checkbox">
                  <p>Received</p>
                </div>
                <p>Your invoice link is ready</p>
              </div>
              <div className="textbox">
                <h4>File Submission</h4>
                <div className="checkbox">
                  <p>We've received your file</p>
                </div>
                <p>Click to upload</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
