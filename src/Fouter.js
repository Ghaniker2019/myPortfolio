import React from "react";

function Fouter() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: 100,
        paddingBottom: 100,
        backgroundColor: "#5C48D3",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          color: "#FFFFFF",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          fontSize: "16px",
          fontWeight: "lighter",
        }}
      >
        Site réalisé par Ghani Kerkoub © 2020
      </p>
    </div>
  );
}

export default Fouter;
