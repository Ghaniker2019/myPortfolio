import React from "react";

function Fouter() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: 100,
        paddingBottom: 100,
        backgroundColor: "#615494",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h3
        style={{
          color: "#FFFFFF",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        Site réalisé par Ghani Kerkoub © 2020
      </h3>
    </div>
  );
}

export default Fouter;
