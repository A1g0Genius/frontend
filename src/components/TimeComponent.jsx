// TimeComponent.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGlobalTime,
  getTimeZones,
  removeTimeZone,
  updateTimeZone,
} from "../features/Timer/timeZoneSlice";
import "../css/timeComponent.scss";

function TimeComponent({ name, index, offset }) {
  // console.log("Index:", index, ", offset:", offset);
  const globalTime = useSelector(getGlobalTime);
  const timeZonesList = useSelector(getTimeZones);
  // const newTime = globalTime + parseFloat(offset);
  const dispatch = useDispatch();

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
      <label>{name}</label>
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
        <option value="4" label="1"></option>
        <option value="8" label="2"></option>
        <option value="12" label="3"></option>
        <option value="16" label="4"></option>
        <option value="20" label="5"></option>
        <option value="24" label="6"></option>
        <option value="28" label="7"></option>
        <option value="32" label="8"></option>
        <option value="36" label="9"></option>
        <option value="40" label="10"></option>
        <option value="44" label="11"></option>
        <option value="48" label="12"></option>
        <option value="52" label="13"></option>
        <option value="56" label="14"></option>
        <option value="60" label="15"></option>
        <option value="64" label="16"></option>
        <option value="68" label="17"></option>
        <option value="72" label="18"></option>
        <option value="76" label="19"></option>
        <option value="80" label="20"></option>
        <option value="84" label="21"></option>
        <option value="88" label="22"></option>
        <option value="92" label="23"></option>
        <option value="96" label=" "></option>
      </datalist>
      <div>{offset}</div>
      <div>Current: {Math.abs(globalTime + offset) % 24}</div>
      {timeZonesList.length > 2 && (
        <button onClick={handleRemoveTimeZone}>Remove</button>
      )}
    </div>
  );
}

export default TimeComponent;
