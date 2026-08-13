import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

if (typeof window !== "undefined") {
  console.log(
    "%c+ AZY.01 %c— you opened the schematic\n%cLooking for something? github.com/Blaze414 · yusufalzadid@gmail.com",
    "color:#ff5a14;font-family:monospace;font-weight:bold;font-size:13px",
    "color:#8899a6;font-family:monospace;font-size:13px",
    "color:#8899a6;font-family:monospace;font-size:11px"
  );
}

createRoot(document.getElementById("root")!).render(<App />);
