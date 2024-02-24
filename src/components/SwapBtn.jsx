import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTimeZones,
  reorderTimeZones,
} from "../features/Timer/timeZoneSlice";

const SwapBtn = () => {
  const dispatch = useDispatch();
  const timeZones = useSelector(getTimeZones);
  const handleReorder = () => {
    const startIndex = 0;
    const endIndex = timeZones.length - 1;
    dispatch(reorderTimeZones({ startIndex, endIndex }));
  };
  return (
    <div>
      <button
        style={{ fontSize: "1rem", marginRight: ".5rem" }}
        onClick={handleReorder}
      >
        Alter Timezone
      </button>
    </div>
  );
};

export default SwapBtn;
