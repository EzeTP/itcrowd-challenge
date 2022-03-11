import "./App.css";
import { Routes, Route } from "react-router-dom";
import CardDetails from "./components/details/CardDetails";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/detail/:id"} element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
