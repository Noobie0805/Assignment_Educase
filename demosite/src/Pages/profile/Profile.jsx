import React, { useEffect } from 'react'
import Style from "./Profile.module.css"
import { useLocation, useNavigate } from "react-router-dom"

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state || JSON.parse(localStorage.getItem("user"));


  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);


  useEffect(() => {
    const handleUnload = () => {
      localStorage.removeItem("user");
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div className={Style.Profile}>
      <div className={Style.Profile_header}>
        Account Settings
      </div>
      <div className={Style.Profile_content}>
        <div className={Style.Profile_content_item}>
          <div className={Style.Profile_content_item_img}>
            <img src={require("../../media/defaultProfile.png")} alt="Profile" />
          </div>
          <span className={Style.edit_icon}>
            <img src={require("../../media/editProfile.png")} alt="Edit" />
          </span>
          <div className={Style.Profile_content_item_info}>
            <span>{user.fullName}</span>
            <span>{user.email}</span>
          </div>
        </div>
        <div className={Style.Profile_content_para}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
          Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </div>
      </div>
    </div>
  )
}

export default Profile;
