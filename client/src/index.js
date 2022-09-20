import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "./redux/store/index";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Auth0Provider
          domain="dev-qx7hxe26.us.auth0.com"
          clientId="y04fJcPDPqqFHPwnROZZ9kp2JFJA5HoD"
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
