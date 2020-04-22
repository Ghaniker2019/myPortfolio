import React from "react";
import "./img/PhotoGhani.jpg";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#5C48D3",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={require("./img/PhotoGhani.jpg")}
            alt="ma_photo"
            style={{
              width: 144,
              height: 144,
              borderWidth: 12,
              borderRadius: 100,
            }}
          />

          <h1 style={{ color: "#FFFFFF" }}>Mon Portfolio</h1>
          <p style={{ color: "#FFFFFF", justifyContent: "center" }}>
            Voici mon travail en tant que développeur Web & Mobile.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
