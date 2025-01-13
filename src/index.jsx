import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Header from "./Header.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Header />
    <App />
  </>
);
