import React, { useContext, useState } from 'react';
import { Context } from './context';
import UploadImage from './uploadImage';
import Images from './Images';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false); // State to track editing mode
  const [userInfo, setUserInfo] = useState({
    // Sample user information (replace with actual user data)
    name: 'John Doe',
    email: 'john@example.com'
  });

  const handleEditClick = () => {
    setIsEditing(true); // Set editing mode to true when edit button is clicked
  };

  const handleSaveClick = () => {
    // Save changes and exit editing mode
    setIsEditing(false);
  };

  return (
    <section className="personal-profile">
      <div className="profile-container">
        <div className="profile-avatar">
            <UploadImage />
            <div>
                {isEditing ? (
                  <button onClick={handleSaveClick}>Save</button>
                ) : (
                  <button onClick={handleEditClick}>Edit Profile</button>
                )}
            </div>
        </div>
        <div className="profile-details">
          <div className="info-section">
            <h6>Information</h6>
            <hr />
            {isEditing ? (
              <div className="info-row">
                <div className="info-item">
                  <input
                    type="text"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                  />
                </div>
                <div className="info-item">
                  <input
                    type="text"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                  />
                </div>
              </div>
            ) : (
              <div className="info-row">
                <div className="info-item">{userInfo.name}</div>
                <div className="info-item">{userInfo.email}</div>
              </div>
            )}
          </div>
          <div className="social-media">
            <h6>Social Media</h6>
            <hr />
            <div className="social-icons">
              <a href="#!"><i className="fab fa-facebook-f"></i></a>
              <a href="#!"><i className="fab fa-twitter"></i></a>
              <a href="#!"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
