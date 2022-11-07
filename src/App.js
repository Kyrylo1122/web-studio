import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import { HeaderNavNames } from "./Components/AppBar/HeaderNavNames";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path={`${HeaderNavNames.STUDIO}`}
            element={<h1>Studio</h1>}
          ></Route>
          <Route path={`${HeaderNavNames.PORTFOLIO}`} element={<Portfolio />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
