import { createRoot } from "react-dom/client";
import Header from "./Header.jsx";
import Entry from "./Entry.jsx";
import data from "./data.js";

const root = createRoot(document.getElementById("root"));

const entryElements = data.map((entry) => {
  return <Entry key={entry.id} {...entry} />;
});

root.render(
  <>
    <Header />
    <main className="container">
      {/* will automatically render arrays */}
      {entryElements}
    </main>
  </>
);
