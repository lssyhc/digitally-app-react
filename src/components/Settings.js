import React from "react";
import { Link } from "react-router-dom";

const Settings = ({
  username,
  setUsername,
  bgColor,
  setBgColor,
  handleSubmitColor,
  handleSubmitUser,
}) => {
  return (
    <main className="settings">
      <div
        className="settingsBox"
        style={{ backgroundColor: bgColor ? bgColor : "#0ca678" }}
      >
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="backIcon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Link>
        <h1>Settings</h1>
      </div>
      <div className="settingsPrimary">
        <h1>App Settings</h1>
        <form action="/" className="nameForm" onSubmit={handleSubmitUser}>
          <input
            type="text"
            placeholder="Masukkan nama profile"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="submit"
            aria-label="Ganti Nama"
            style={{ background: bgColor ? bgColor : "#0ca678" }}
          >
            Ganti nama profile
          </button>
        </form>

        <form action="/" className="bgColorForm" onSubmit={handleSubmitColor}>
          <input
            type="text"
            placeholder="Masukkan nama warna"
            autoComplete="off"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value.toLowerCase())}
          />
          <button
            type="submit"
            aria-label="Ganti Warna Background"
            style={{ background: bgColor ? bgColor : "#0ca678" }}
          >
            Ganti warna background
          </button>
        </form>
      </div>
    </main>
  );
};

export default Settings;
