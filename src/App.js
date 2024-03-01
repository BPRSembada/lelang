import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// page
import Lelang from "./page/lelang";
import DetailLelang from "./page/detail_lelang";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Lelang />} />
        <Route path="/Detail" element={<DetailLelang />} />
      </Routes>
      <h1>hellow world</h1>
    </div>
  );
}

export default App;
