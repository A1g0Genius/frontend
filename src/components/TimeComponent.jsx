import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDate,
  getGlobalTime,
  getTimeZones,
  removeTimeZone,
  updateTimeZone,
} from "../features/Timer/timeZoneSlice";
import "../css/timeComponent.scss";

const TimeComponent = ({ name, offset }) => {
  const globalTime = useSelector(getGlobalTime);
  const timeZonesList = useSelector(getTimeZones);
  const currDate = useSelector(getDate);
  const dispatch = useDispatch();

  const genDate = () => {
    let ind = 0;
    if (globalTime + offset >= 24) ind = 1;
    else if (globalTime + offset < 0) ind = -1;

    let tmp = new Date(currDate);
    tmp.setDate(tmp.getDate() + ind);

    const monthArr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    let day = tmp.getDate();
    let year = tmp.getFullYear();
    let month = tmp.getMonth();

    return day + " " + monthArr[month] + " " + year;
  };

  const genTime = (num) => {
    if (num < 0) num += 24;
    let numString = num.toString();
    let parts = numString.split(".");
    let res = parts[0];

    if (!isNaN(parts[1])) {
      let tmp = Number(parts[1]) * 0.6;
      res += ".";
      res += tmp.toString();
    }
    return Number(res);
  };

  const handleSliderChange = (event) => {
    const value = parseFloat(event.target.value);
    dispatch(
      updateTimeZone({
        newTime: value - parseFloat(offset),
      })
    );
  };

  const handleRemoveTimeZone = () => {
    dispatch(removeTimeZone({ name: name }));
  };

  return (
    <div className="time-zone-slider">
      <div className="top">
        <div className="zone-name">{name}</div>
        <div className="curr-time">
          Time: {genTime((globalTime + offset) % 24)}
        </div>
        {timeZonesList.length > 2 && (
          <button
            style={{ fontSize: ".8rem", marginRight: ".5rem" }}
            className="rm-btn"
            onClick={handleRemoveTimeZone}
          >
            Remove
          </button>
        )}
      </div>
      <div className="middle">
        <div className="timeformat">{`TimeFormat: ${name} ${offset}`}</div>
        <div className="datefromat">{`Date: ${genDate()}`}</div>
      </div>
      <div className="end">
        <input
          list="values"
          type="range"
          min={0}
          max={24}
          step={0.25}
          value={
            (globalTime + parseFloat(offset)) % 24 < 0
              ? 24 - Math.abs((globalTime + parseFloat(offset)) % 24)
              : (globalTime + parseFloat(offset)) % 24
          }
          onChange={handleSliderChange}
        />
        <datalist id="values">
          <option value="0" label="0"></option>
          <option value="12.5" label="3"></option>
          <option value="25" label="6"></option>
          <option value="37.5" label="9"></option>
          <option value="50" label="12"></option>
          <option value="62.5" label="15"></option>
          <option value="75" label="18"></option>
          <option value="87.5" label="21"></option>
          <option value="100" label="24"></option>
          {/* <option value="4" label="1"></option> */}
        </datalist>
      </div>
    </div>
  );
};

export default TimeComponent;
