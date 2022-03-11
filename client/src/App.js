import "./App.css";
import { Routes, Route } from "react-router-dom";
import CardDetails from "./components/details/CardDetails";
import NavBar from "./components/navBar/NavBar";
import Cards from "./components/cards/Cards";

function App() {
  return (
    <div className="App">
      <Routes>
        {/*         <Route path={"/"} element={<NavBar />} /> */}
        <Route path={"/"} element={<Cards />} />
        <Route path={"/detail/:id"} element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
