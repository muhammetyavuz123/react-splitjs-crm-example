import React from "react";
import "../Styles/Header.css";
import { Save } from "../Icons";
export const Header = () => {
  return (
    <div className="header">
      <div className="logo"> Logo</div>

      <div className="headerUser">
        <div className="saveText">
          <Save />
          <span>Çalışma Alanı 1</span>
        </div>
        <div className="userText">
          <div className="userLogo"></div>
          <span>Mehaba Ayhan Bey</span>
        </div>
      </div>
    </div>
  );
};
