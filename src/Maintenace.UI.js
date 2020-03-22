import React from "react";

export default function Maintenance() {
  let mainStyle = {
    position: "relative"
  };
  let backgroundStyle = {
    zIndex: 1,
    display: "absolute",
    width: "100vw",
    height: "99vh"
  };

  let headingStyle = {
    color: "#F0F8FF",
    fontFamily: "'Josefin Sans', sans-serif",
    zIndex: 3,
    position: "absolute",
    fontSize: "27px",
    width: "100%",

    top: "81vh",
    textAlign: "center",
    letterSpacing: "9px"
  };

  return (
    <div className="main-container" style={mainStyle}>
      <h1 style={headingStyle}>Under Maintenance</h1>
      <img
        id="bg"
        src="assets/img/maintenance-background.jpg"
        alt="starfull sky by  Kai Pilger from Upsplash"
        style={backgroundStyle}
      />
    </div>
  );
}
