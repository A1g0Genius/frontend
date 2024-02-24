import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { updateDate } from "../features/Timer/timeZoneSlice";

const DatePickerComp = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  return (
    <div>
      <DatePicker
        className="date-pick"
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          dispatch(updateDate(date));
        }}
      />
    </div>
  );
};

export default DatePickerComp;
