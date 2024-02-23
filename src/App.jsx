import { useSelector } from "react-redux";
import SelectTimeZone from "./components/SelectTimeZone";
import TimeList from "./components/TimeList";
import "./css/app.scss";

function App() {
  const theme = useSelector((state) => state.theme.themeState);
  console.log("hello");
  return (
    <main>
      <section>
        <div className={theme}>
          <div className="container">
            <div className="head"></div>
            <div className="content">
              <SelectTimeZone />
              <TimeList />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
