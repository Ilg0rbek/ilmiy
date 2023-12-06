import IslomKarimovStipendiants from "./Stipendiants2021-2022/IslomKarimovStipendiants";
import NavoiyStipendiants from "./Stipendiants2021-2022/NavoiyStipendiant";
import PresidentStipendiant from "./Stipendiants2021-2022/PrezidentStipenDiant";
import UlugbekStipendaint from "./Stipendiants2021-2022/UlugbekStipendiants";

 const Routes20212022 = [
    {
        id:1,
        name:"Prezident-stipendiyasi",
        component:<PresidentStipendiant/>,
        title:"Prezident stipendiyasi"
    },
    {
        id:2,
        name:"Navoiy-nomli-davlat-stipendiyasi",
        component:<NavoiyStipendiants/>,
        title:"Navoiy nomli davlat stipendiyasi"
    },
    {
        id:3,
        name:"Islom-Karimovich-nomli-davlat-stipendiyasi",
        component:<IslomKarimovStipendiants/>,
        title:"Islom Karimovich nomli davlat stipendiyasi"
    },
    {
        id:4,
        name:"Ulug'bek-nomli-davlat-stipendiyasi",
        component:<UlugbekStipendaint/>,
        title:"Ulug'bek nomli davlat stipendiyasi"
    }
]

export default Routes20212022