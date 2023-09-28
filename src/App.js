import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/pages/home";
import Stipendiants from "./components/pages/stipendiants";
import GrandPage from "./components/pages/stipendiants/grands";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/stipendiants" element={<Stipendiants />} />
        <Route exact path="/grands" element={<GrandPage/>} />
      </Routes>
    </>
  );
}

export default App;
