import "./App.css";
import { Routes, Route } from "react-router-dom";
import CardDetails from "./components/details/CardDetails";
import Cards from "./components/cards/Cards";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/home"} element={<Cards />} />
        <Route path={"/detail/:id"} element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
