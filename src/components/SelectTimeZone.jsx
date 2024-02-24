import React, { useState } from "react";
import { data } from "../data.js";
import { addTimeZone } from "../features/Timer/timeZoneSlice.js";
import { useDispatch } from "react-redux";

const SelectTimeZone = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState("");

  const dispatch = useDispatch();

  const handleTimeZoneChange = (e) => {
    setSelectedTimeZone(e.target.value);
  };

  const AddTZ = () => {
    dispatch(
      addTimeZone({
        id: selectedTimeZone - 1,
        name: data[selectedTimeZone - 1].name,
        offset: data[selectedTimeZone - 1].offset,
      })
    );
  };

  return (
    <>
      <select
        name="timeZone"
        value={selectedTimeZone}
        onChange={handleTimeZoneChange}
        style={{ fontSize: "1rem" }}
      >
        {data.map((ele) => {
          return (
            <option key={ele.id} value={ele.id}>
              {ele.name} (UTC {ele.offset})
            </option>
          );
        })}
      </select>
      <button
        style={{ fontSize: "1rem", marginRight: ".5rem", marginLeft: ".5rem" }}
        onClick={AddTZ}
      >
        Add
      </button>
    </>
  );
};

export default SelectTimeZone;
