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
import StipendiantDeatail from "./components/pages/stipendiants/Stipendiants2021-2022/StipendiantsDetail";
import Patents from "./components/pages/Panents/PatentsUser";
import PresidentStipendiant from "./components/pages/stipendiants/Stipendiants2021-2022/PrezidentStipenDiant";
import Guvohnoma from "./components/pages/Guvohnomalar/GuvohnomaUser";
import PatentUserlist from "./components/pages/Panents/PatentUserList";
import GuvohnomaUserList from "./components/pages/Guvohnomalar/GuvohnomaUserList";
import FanTogarakUser from "./components/pages/FantogarakUser/FanTogarakUser";
import FanTogarakKafedraUser from "./components/pages/FantogarakUser/FanTogarakKafedraUser";
import FanTogarakDetailUser from "./components/pages/FantogarakUser/FanTogarakDetailUser";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout> <Home /> </Layout>} />
      <Route exact path="/guvohnoma" element={<Layout ><Patents/></Layout>}/>
      <Route exact path="/patents" element={<Layout ><Guvohnoma/></Layout>}/>
      <Route exact path="/guvohnoma/user-list" element={<Layout ><GuvohnomaUserList/></Layout>}/>
      <Route exact path="/patents/user-list" element={<Layout ><PatentUserlist/></Layout>}/>
      <Route exact path="/stipendiants/*" element={<Layout><Stipendiants /></Layout>}/>
      <Route  path={`/stipendiants/students`} element={<Layout><PresidentStipendiant/></Layout>} />
      <Route path={`/stipendiants/students/detail/:id`} element={<Layout><StipendiantDeatail/></Layout>} />

      <Route exact path="/cources" element={<Layout><FanTogarakUser /></Layout>}/>
      <Route exact path="/cources/kafedra" element={<Layout><FanTogarakKafedraUser /></Layout>}/>
      <Route exact path="/cources/kafedra/detail/:id" element={<Layout><FanTogarakDetailUser /></Layout>}/>

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
          <Route path="all-stipends" />
        </Route>
      </Route>
      <Route path="*" element={<h1 style={{ paddingTop: "180px", textAlign: "center" }}> Not found page 404 </h1>} />
      <Route path="/" elemen={"/main"} />
    </Routes>
  );
}

export default App;
