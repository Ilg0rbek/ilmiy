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
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
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
import TavarlarKimyosi from "./components/pages/IlmiyDarajaBeruvchiKengash/TavarlarKimyosi";
import OzbekistosnTarihi from "./components/pages/IlmiyDarajaBeruvchiKengash/OzbekistosnTarihi";
import Menejment from "./components/pages/IlmiyDarajaBeruvchiKengash/Menejment";
import OzbekTili from "./components/pages/IlmiyDarajaBeruvchiKengash/OzbekTili";
import OzbekAdabiyoti from "./components/pages/IlmiyDarajaBeruvchiKengash/OzbekAdabiyoti";
import IjtimoiyFalsafa from "./components/pages/IlmiyDarajaBeruvchiKengash/IjtimoiyFalsafa";
import BialogiyaFanlarBoyicha from "./components/pages/IlmiyDarajaBeruvchiKengash/BialogiyaFanlarBoyicha";
import UniversitetGranti from "./components/pages/IlmiyLoyihalar/UniversitetGranti";
import DavlatGranti from "./components/pages/IlmiyLoyihalar/DavlatGranti";
// const EducationYear = React.lazy(() => import("./components/pages/MDI/educationYear/EducationYear"));
// const Faculty = React.lazy(() => import("./components/pages/MDI/faculty/Faculty"));
// const Department = React.lazy(() => import("./components/pages/MDI/department/Department"));
// const Theme = React.lazy(() => import("./components/pages/MDI/theme/Theme"));
// const TeacherForm = React.lazy(() =>import("./components/pages/MDI/teacherForm/TeacherForm"));
const AcademicYears = React.lazy(() => import("./components/pages/md-themes/academicYears/AcademicYears"));
const Faculty = React.lazy(() => import("./components/pages/md-themes/faculty/Faculty"));
const Department = React.lazy(() => import("./components/pages/md-themes/department/Department"));

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout> <Home /> </Layout>} />
      <Route exact path="/academic-years" element={<Layout><AcademicYears/></Layout>} />
      <Route exact path="/faculties/:academic_year_id" element={<Layout><Faculty/></Layout>} />
      <Route exact path="/departments/:academic_year_id/:faculty_id" element={<Layout><Department/></Layout>} />
      {/* <Route exact path="/education-year" element={<Layout><EducationYear/></Layout>} />
      <Route exact path="/faculty/:date" element={<Layout><Faculty/></Layout>}/>
      <Route exact path="/department/:id" element={<Layout><Department/></Layout>}/>
      <Route exact path="/theme/:id" element={<Layout><Theme/></Layout>}/>
      <Route exact path="/teacher-form/:teacherId/:id" element={<Layout hideFooter={false} hideHeader={false}><TeacherForm/></Layout>}></Route> */}
      <Route exact path="/guvohnoma" element={<Layout ><Patents/></Layout>}/>
      <Route exact path="/patents" element={<Layout ><Guvohnoma/></Layout>}/>
      <Route exact path="/guvohnoma/user-list" element={<Layout ><GuvohnomaUserList/></Layout>}/>
      <Route exact path="/patents/user-list" element={<Layout ><PatentUserlist/></Layout>}/>
      <Route exact path="/stipendiants/*" element={<Layout><Stipendiants /></Layout>}/>
      <Route path={`/stipendiants/students`} element={<Layout><PresidentStipendiant/></Layout>} />
      <Route path={`/stipendiants/students/detail/:id`} element={<Layout><StipendiantDeatail/></Layout>} />
      <Route exact path="/guvohnoma" element={<Layout ><Patents/></Layout>}/>
      <Route path={`/tavarlar kimyosi va halq tabobati`} element={<Layout><TavarlarKimyosi/></Layout>} />
      <Route path={`/Ozbekiston tarixi`} element={<Layout><OzbekistosnTarihi/></Layout>} />
      <Route path={`/Menejment`} element={<Layout><Menejment/></Layout>} />
      <Route path={`/Ozbek tili`} element={<Layout><OzbekTili/></Layout>} />
      <Route path={`/Ozbek adabiyoti`} element={<Layout><OzbekAdabiyoti/></Layout>} />
      <Route path={`/Ijtimoiy falsafa`} element={<Layout><IjtimoiyFalsafa/></Layout>} />
      <Route path={`/Bialogiya fanlari boyicha`} element={<Layout><BialogiyaFanlarBoyicha/></Layout>} />
      <Route path={`/Davlat granti`} element={<Layout><DavlatGranti/></Layout>} />
      <Route path={`/Universitet granti`} element={<Layout><UniversitetGranti/></Layout>} />


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
