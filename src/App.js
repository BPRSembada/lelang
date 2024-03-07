import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// page
import Lelang from "./page/lelang";
import DetailLelang from "./page/detail_lelang";
import NewFooter from "./page/footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Lelang />} />
        <Route path="/Detail" element={<DetailLelang />} />
      </Routes>
      <NewFooter />
    </div>
  );
}

export default App;
