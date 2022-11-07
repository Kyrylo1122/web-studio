import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import "./sass/main.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/studio" element={<h1>Studio</h1>}></Route>
          <Route path="/portfolio" element={<h1>Portfolio</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
