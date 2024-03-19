import React, { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Pricing = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full overflow-hidden relative" style={{ paddingTop: "56.25%" }}>
        <iframe
          src="https://app.acuityscheduling.com/schedule.php?owner=31610483"
          title="Schedule Appointment"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
        ></iframe>
      </div>
      <script
        src="https://embed.acuityscheduling.com/js/embed.js"
        type="text/javascript"
      ></script>
    </div>
  );
};

export default Pricing;
