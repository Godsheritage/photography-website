import React, { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Pricing = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div className="container">
      <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=31610483"
        title="Schedule Appointment"
        width="100%"
        height="800"
        frameBorder="0"
      ></iframe>
      <script
        src="https://embed.acuityscheduling.com/js/embed.js"
        type="text/javascript"
      ></script>
    </div>
  );
};

export default Pricing;
