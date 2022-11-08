import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import "./sass/main.scss";
import Portfolio from "./Components/Portfolio/Portfolio";
import Studio from "./Components/Studio/Studio";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Studio />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
