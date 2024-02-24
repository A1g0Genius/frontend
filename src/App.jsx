import { useSelector } from "react-redux";
import SelectTimeZone from "./components/SelectTimeZone";
import SwapBtn from "./components/SwapBtn";
import TimeList from "./components/TimeList";
import ThemeBtn from "./components/ThemeBtn";
import "./css/app.scss";
import DatePickerComp from "./components/DatePickerComp";

function App() {
  const theme = useSelector((state) => state.theme.themeState);
  return (
    <main>
      <section>
        <div className={`${theme}`}>
          <div className="container">
            <div className="head">
              <div className="left">
                <SelectTimeZone />
              </div>
              <div className="mid">
                <DatePickerComp />
              </div>

              <div className="right">
                <SwapBtn />
                <ThemeBtn />
              </div>
            </div>
            <div className="content">
              <TimeList />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
