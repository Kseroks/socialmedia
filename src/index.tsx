import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import {App} from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
const app = (
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

root.render(app);
