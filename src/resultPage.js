import React from "react";
import SlidersComponent from "./slidersComponent";
import { useState } from "react";
import BarChart from "./BarChart";

// component called for result page
function Graph(props) {
  const UserData = props.graphData;

  // graph start

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.key),
    datasets: [
      {
        label: "SIP Delay Projections",
        data: UserData.map((data) => data.value),
        backgroundColor: ["#e58cdb", "#c9fdd7", "#ff0000"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  // graph end

  // RE-calculate button styles
  const btnStyle = {
    marginTop: "1rem",
    fontSize: "1em",
    padding: "0.7rem 1.7rem",
    fontWeight: "500",
    textAlign: "center",
    textTransform: "uppercase",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "3px solid #00d7c3",
    borderRadius: "50px",
    transition: "all .15s ease-in-out",
    color: "00d7c3",
    textColor: "red",
    boxShadow: "2px  2px 10px 0px rgb(0 0 0/26%)",
  };
  const [isGraph, setIsGraph] = useState(true);
  // change state function
  function changeState() {
    setIsGraph(false);
  }

  return (
    <>
      {isGraph === true && (
        <div
          className="container"
          style={{
            backgroundColor: "#fafafa",
            width: "60rem",
            marginLeft: "6rem",
          }}
        >
          {/* barchart Component */}

          <div
            style={{
              padding: "3rem",
              margin: "3rem",
              marginBottom: "3rem",
              backgroundColor: "white",
              boxShadow: "2px  2px 10px 0px rgb(0 0 0/26%)",
            }}
          >
            <span
              style={{
                transform: "rotate(-90deg)",
                fontSize: "1.3rem",
                fontStyle: "bold",
              }}
            >
              Amount in &#40;Rs.&#41;
            </span>

            <BarChart chartData={userData} />
          </div>

          <div
            className="result-container"
            style={{
              marginTop: "0.2rem",
              padding: "1rem",
              backgroundColor: "white",
              boxShadow: "2px  2px 10px 0px rgb(0 0 0/26%)",
            }}
          >
            <header
              style={{
                padding: "1rem",
                backgroundColor: "#bef2ff",
                margin: " -1rem ",
                marginBottom: "1.8rem",
              }}
            >
              <span
                style={{
                  fontStyle: "italic",
                  fontSize: "1.8rem",
                  fontWeight: "680",
                  color: "#0092ca",
                }}
              >
                Result
              </span>
            </header>
            <div className="result-text">
              <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                Delay of&nbsp;{" "}
                <span
                  style={{
                    fontStyle: "italic",
                    fontSize: "1.3rem",
                    fontWeight: "680",
                    color: "#dc2f2f",
                  }}
                >
                  {props.delayMonths}
                </span>{" "}
                Months in starting your SIP will cause a notational Loss of :
                Rs.&nbsp;
                <span
                  style={{
                    fontStyle: "italic",
                    fontSize: "1.3rem",
                    fontWeight: "680",
                    color: "#dc2f2f",
                  }}
                >
                  {Math.round(props.lossFromDelay * 100) / 100}
                </span>{" "}
                in the final value of your investment.
              </p>
            </div>
            <footer>
              <p style={{ fontSize: "0.7rem", fontWeight: "500" }}>
                <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                  {" "}
                  Note :
                </span>{" "}
                <span style={{ color: "#dc2f2f", fontSize: "1.2rem" }}>
                  *
                </span>{" "}
                Based on monthly compounding.
              </p>
            </footer>
          </div>
          {/* recalculate button calling button component */}

          <button type="button" style={btnStyle} onClick={changeState}>
            re-calculate
          </button>
        </div>
      )}
      {isGraph === false && (
        <div>
          <SlidersComponent />
        </div>
      )}
    </>
  );
}

export default Graph;
