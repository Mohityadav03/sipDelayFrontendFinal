import React from "react";
import Sip from "./sip";

function App() {
  return (
    <>
      <div className="wrapper">
        {/* calling component where react router is defined */}
        <Sip />
      </div>
    </>
  );
}

export default App;
// expoted in index.js
