import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTimeZones,
  reorderTimeZones,
} from "../features/Timer/timeZoneSlice";
import TimeComponent from "./TimeComponent";
import { changeMode } from "../features/Theme/themeSlice";

const TimeList = () => {
  const timeZones = useSelector(getTimeZones);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.themeState);

  const handleReorder = () => {
    const startIndex = 0;
    const endIndex = timeZones.length - 1;
    dispatch(reorderTimeZones({ startIndex, endIndex }));
  };

  const handleAppTheme = () => {
    console.log("Clciked");
    dispatch(changeMode());
  };

  return (
    <div className="time-zone-list">
      <h2>Timezones</h2>
      <button onClick={handleAppTheme}>{theme}: Mode</button>
      <button onClick={handleReorder}>Alter Timezone</button>
      <ul>
        {timeZones.map((tz, index) => (
          <div key={index}>
            <TimeComponent index={index} offset={tz.offset} name={tz.name} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TimeList;
