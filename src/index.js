import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import "./index.css";
import App from "./App";
import { Provider } from "./context/context";

ReactDOM.render(
  <SpeechProvider appId={process.env.REACT_APP_SPEECHLY_API_KEY} language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
