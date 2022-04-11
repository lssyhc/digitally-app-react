import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="missing">
      <h1>404</h1>
      <p>Halaman belum jadi, hanya berisi teks dummy ^_^</p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div>Kembali ke home</div>
      </Link>
    </main>
  );
};

export default Missing;
