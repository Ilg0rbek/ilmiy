import React from "react";

const OzbekistosnTarihi = () => {
    return (
        <div className="container overflow-auto" style={{ marginTop: "200px" }}>
            <h3 className="text-center mb-5">O'zbekiston tarixi</h3>
            <table className=" table-bordered">
                <thead>
                    <tr className="text-center">
                        <th scope="col">Ilmiy kengash shifri va nomi</th>
                        <th scope="col">Ilmiy kengash (qayta) ochilgan sanasi, OАK buyrugʼining №</th>
                        <th scope="col">Ilmiy darajalar beriladigan fan sohasi, ixtisosliklar shifri va nomi</th>
                        <th scope="col">Kengash raisining F.I.Sh., ilmiy darajasi va unvoni, ish joyi, lavozimi, tel.</th>
                        <th scope="col">Ilmiy Kengash kotibi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td>Аndijon davlat universiteti xuzuridagi Tarix fanlari boʼyicha ilmiy darajalar beruvchi DSc.03/31.12.2020.Tar.60.01. raqamli ilmiy kengash</td>
                        <td>30.12.2021 OАK 310/2 sonli qarori </td>
                        <td>07.00.01-"Oʼzbekiston tarixi"</td>
                        <td>Shamsutdinov Rustambek Temirovich, Tarix fanlari doktori, professor +99890-253-26-32</td>
                        <td>Аlixojiev Muhammadjon Odiljon oʼgʼli +99893-428-63-62</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OzbekistosnTarihi