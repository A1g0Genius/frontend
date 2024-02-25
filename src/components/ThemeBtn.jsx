import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../features/Theme/themeSlice";

const ThemeBtn = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.themeState);
  const handleAppTheme = () => {
    dispatch(changeMode());
  };
  return (
    <div>
      <button
        style={{ fontSize: "1rem", marginRight: ".5rem" }}
        onClick={handleAppTheme}
      >
        {theme === "light" ? "dark" : "light"}: Mode
      </button>
    </div>
  );
};

export default ThemeBtn;
