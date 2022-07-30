import React from "react";
import Mainpage from "./page/Mainpage";
import { Global, css } from "@emotion/react";
import dayjs from "dayjs";

function App() {
  dayjs.locale("ko");

  return (
    <div className="App">
      <Global
        styles={css`
          * {
            background-color: #e9ecef;
          }
        `}
      />
      <Mainpage />
    </div>
  );
}

export default App;
