import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Stipendiants from "./components/pages/stipendiants";
import GrandPage from "./components/pages/stipendiants/grands";
import Login from "./constants/login";
import Admin from "./admin/admin";
import StudentProlie from "./components/pages/docktarant-profile";
import "./app.css";
import Layout from "./layouts/Layout";
import React from "react";
import PrivateRoute from "./layouts/PrivateRoute";
import Routes20212022 from "./components/pages/stipendiants/StipendiantsRoutes";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout> <Home /> </Layout>} />
      <Route exact path="/stipendiants/*" element={<Layout><Stipendiants /></Layout>}/>
      
      {
          Routes20212022.map((item, index) => (
            <Route key={index} path={`/stipendiants/${item.name}`} element={<Layout>{item.component}</Layout>} />
            // console.log(item.component)
           ))
        } 
      {/* <Route key={index} path={`/stipendiants/${item.name}`} element={<Layout>{item.component}</Layout>} /> */}
      <Route exact path="/grands" element={<Layout> <GrandPage /></Layout>} />
      <Route path="/login" element={<Layout hideFooter={false} hideHeader={false}> <Login /></Layout>}></Route>
      <Route element={<PrivateRoute />}> <Route exact path="/doktarants/profile" element={<StudentProlie />} /></Route>
      <Route element={<PrivateRoute />}>
        <Route path="admin/*" element={<Layout hideFooter={false} hideHeader={false}> <Admin /> </Layout>}>
          <Route path="stipendiants">
            <Route path="user-list" />
          </Route>
          <Route path="settings" />
          <Route path="profile" />
          <Route path="news" />
          <Route path="doctorantlist" />
        </Route>
      </Route>
      <Route path="*" element={<h1 style={{ paddingTop: "180px", textAlign: "center" }}> Not found page 404 </h1>} />
      <Route path="/" elemen={"/main"} />
    </Routes>
  );
}

export default App;
