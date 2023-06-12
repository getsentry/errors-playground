import reactIcon from "platformicons/svg/react.svg";

import { PlatformCard } from "./platform-card";
import "./App.css";

const platforms = [
  {
    name: "React",
    url: import.meta.env.VITE_REACT_URL,
    icon: reactIcon,
  },
];

function App() {
  return (
    <div className="container">
      <h1>Errors playground</h1>
      <div className="platforms-grid">
        {platforms.map(({ name, url, icon }) => (
          <PlatformCard key={icon} name={name} url={url} icon={icon} />
        ))}
      </div>
    </div>
  );
}

export default App;
