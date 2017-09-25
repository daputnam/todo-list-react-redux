import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// setTimeout(()=>{
//   store.dispatch({type: 'TODO_ADD', payload: {id: 4, name: "neww", isComplete: false}});
// }, 1000);

registerServiceWorker();
