import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import "./sass/main.scss";
import Studio from "./Components/Studio/Studio";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="studio" element={<Studio />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;