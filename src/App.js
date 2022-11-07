import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to="/" element={<Layout />}>
          <Route index element={<h1>Studio</h1>}></Route>
          <Route to="portfolio" element={<h1>Portfolio</h1>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
