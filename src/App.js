import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/pages/home";
import Stipendiants from "./components/pages/stipendiants";
import GrandPage from "./components/pages/stipendiants/grands";
import Login from "./constants/login";
import Admin from "./admin/admin";
import StudentProlie from "./components/pages/docktarant-profile";
import Footer  from "./components/pages/footer/footer";
import "./app.css"

function App() {
  const { pathname } = useLocation();
  // console.log(pathname.slice(1, 6));
  return (
    <div className="warpper">
      {(pathname.slice(1, 6) !== "admin" &&
        pathname.slice(1, 6) !== "dokta" &&  pathname.slice(1, 7) !== "login") && <Header />}
    <div className="main_contentt">
    <Routes>
        <Route exact path="/main" element={<Home />} />
        <Route exact path="/stipendiants" element={<Stipendiants />} />
        <Route exact path="/grands" element={<GrandPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/doktarants/profile" element={<StudentProlie/>} />
        <Route path="admin" element={<Admin />}>
          <Route path="stipendiants">
            <Route path="user-list" />
          </Route>
          <Route path="settings" />
          <Route path="profile" />
          <Route path="news" />
        </Route>
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
    </div>
      {(pathname.slice(1, 6) !== "admin" &&
        pathname.slice(1, 6) !== "dokta" &&  pathname.slice(1, 7) !== "login") &&   <Footer/>}

    </div>
  );
}

export default App;
