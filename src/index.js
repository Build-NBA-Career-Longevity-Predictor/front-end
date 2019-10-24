import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer } from "./Reducers";
import { SnackbarProvider } from "notistack";

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </Provider>,
  document.getElementById("root")
);
