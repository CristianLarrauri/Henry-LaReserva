import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
