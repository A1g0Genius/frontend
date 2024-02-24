import React from "react";
import { useSelector } from "react-redux";
import { getTimeZones } from "../features/Timer/timeZoneSlice";
import TimeComponent from "./TimeComponent";
import "../css/timelist.scss";

const TimeList = () => {
  const timeZones = useSelector(getTimeZones);

  return (
    <div className="time-zone-list">
      {timeZones.map((tz, index) => (
        <div className="slider-comp" key={index}>
          <TimeComponent index={index} offset={tz.offset} name={tz.name} />
        </div>
      ))}
    </div>
  );
};

export default TimeList;
