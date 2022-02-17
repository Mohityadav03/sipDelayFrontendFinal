import React from "react";
import BackButton from "./backButton";
import SlidersComponent from "./slidersComponent";

// our calculator componenet (SIP DELAY )
function SipDelayCal() {
  return (
    <>
      <div style={{ margin: " 2rem 7rem" }}>
        {/* back button component */}
        <div className="back-btn" style={{ marginLeft: "6rem" }}>
          <BackButton />
        </div>

        <div
          className="container"
          style={{
            boxShadow: "2px  2px 10px 0px rgb(0 0 0/66%)",
            margin: "5rem",
            marginTop: "1rem",
            overflowX: "scroll",
            height: "40rem",
          }}
        >
          {/* call slider component */}
          <div
            className="sliders"
            style={{ marginLeft: "0rem", padding: "4rem , 0rem" }}
          >
            <SlidersComponent />
          </div>
        </div>
      </div>
    </>
  );
}
export default SipDelayCal;
