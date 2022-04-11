import React from "react";
import { Link } from "react-router-dom";

const Home = ({ username, bgColor }) => {
  return (
    <main className="home">
      <Link to={"/missing"} style={{ textDecoration: "none" }}>
        <div className="profileBox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="profileIcon"
            viewBox="0 0 20 20"
            fill="currentColor"
            style={{ fill: bgColor ? bgColor : "#0ca678" }}
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
          <p
            className="profileText"
            style={{ color: bgColor ? bgColor : "#0ca678" }}
          >
            {username ? username : "Username"}
          </p>
        </div>
      </Link>
      <div className="container">
        <div
          className="box"
          style={{ backgroundColor: bgColor ? bgColor : "#0ca678" }}
        >
          <div className="primaryText">
            <h2>Digitally</h2>
            <p>Solusi bisnis digital Anda</p>
          </div>
          <div className="imgBox">
            <div className="imgText">
              <h3>Kami memberikan solusi untuk bisnis Anda</h3>
              <p>
                Digitally hadir sebagai solusi utama untuk mengembangkan bisnis
                Anda menjadi lebih modern dan kompeten
              </p>
              <Link to="/missing" style={{ textDecoration: "none" }}>
                <div style={{ color: bgColor ? bgColor : "#0ca678" }}>
                  Digitalisasi &rarr;
                </div>
              </Link>
            </div>
            <img
              src={process.env.PUBLIC_URL + "/img/model-1.png"}
              alt="Handsome model"
            />
          </div>
        </div>
        <div
          className="box"
          style={{ backgroundColor: bgColor ? bgColor : "#0ca678" }}
        >
          <div className="primaryText">
            <h2>Digitally</h2>
            <p>Solusi bisnis digital Anda</p>
          </div>
          <div className="imgBox">
            <div className="imgText">
              <h3>Kustomisasi bisnis Anda</h3>
              <p>
                Fitur custom digunakan untuk mengakomodir permintaan pemilik
                bisnis untuk mendigitalkan bisnisnya secara detail.
              </p>
              <Link to="/missing" style={{ textDecoration: "none" }}>
                <div style={{ color: bgColor ? bgColor : "#0ca678" }}>
                  Kustom &rarr;
                </div>
              </Link>
            </div>
            <img
              src={process.env.PUBLIC_URL + "/img/model-2.png"}
              alt="Handsome model"
            />
          </div>
        </div>
        <div
          className="box"
          style={{ backgroundColor: bgColor ? bgColor : "#0ca678" }}
        >
          <div className="primaryText">
            <h2>Digitally</h2>
            <p>Solusi bisnis digital Anda</p>
          </div>
          <div className="imgBox">
            <div className="imgText">
              <h3>Visi dan misi kami</h3>
              <p>
                Visi kami adalah melayani bisnis digitalife dan mampu bersaing
                dengan bisnis lain, yang diwujudkan dengan misi digitalisasi
              </p>
              <Link to="/missing" style={{ textDecoration: "none" }}>
                <div style={{ color: bgColor ? bgColor : "#0ca678" }}>
                  Digitalisasi &rarr;
                </div>
              </Link>
            </div>
            <img
              src={process.env.PUBLIC_URL + "/img/model-3.png"}
              alt="Handsome model"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
