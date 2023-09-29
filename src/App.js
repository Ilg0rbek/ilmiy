import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/pages/home";
import Stipendiants from "./components/pages/stipendiants";
import GrandPage from "./components/pages/stipendiants/grands";
import Login from "./admin/login";
import Admin from "./admin/admin";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname.slice(1, 6) !== "admin" ? (
        <>
          <Header />
          <Routes>
            <Route exact path="/main" element={<Home />} />
            <Route exact path="/stipendiants" element={<Stipendiants />} />
            <Route exact path="/grands" element={<GrandPage />} />
            <Route
              path="*"
              element={
                <h1 style={{ paddingTop: "180px", textAlign: "center" }}>
                  Not found page 404
                </h1>
              }
            />
            <Route path="/" element={<Navigate to={"/main"} />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route exact path="/admin/login" element={<Login />} />
            <Route exact path="/admin/profile" element={<Admin />} />
            <Route
              path="*"
              element={
                <h1 style={{ paddingTop: "180px", textAlign: "center" }}>
                  Not found page 404
                </h1>
              }
            />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
