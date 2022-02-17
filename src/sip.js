import React from "react";
import SipCal from "./sip_cal";
import SipDelayCal from "./sip_delay_cal";
import SipStepupCal from "./sip_stepup_cal";
import Navigation from "./navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//  react router which navigates to different calculator component
class Sip extends React.Component {
  render() {
    return (
      <div>
        <div className="Sip">
          <Router>
            <Routes>
              <Route path="/" element={<Navigation />} />
              <Route path="/sipCal" element={<SipCal />} />
              <Route path="/sipDelayCal" element={<SipDelayCal />} />
              <Route path="/sipStepupCal" element={<SipStepupCal />} />
            </Routes>
          </Router>
        </div>
      </div>
    );
  }
}
export default Sip;
