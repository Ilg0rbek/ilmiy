import React from "react";

const OzbekAdabiyoti = () => {
    return (
        <div className="container overflow-auto" style={{ marginTop: "200px" }}>
            <h3 className="text-center mb-5">O'zbek adabiyoti</h3>
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
                        <td>Аndijon davlat universiteti xuzuridagi filologiya fanlari boʼyicha ilmiy darajalar beruvchi DSc.03/05.05.2023.Fil.60.07 rakamli ilmiy kengash</td>
                        <td>2023 й. 5-may 337/2-son</td>
                        <td>10.00.02 - «O'zbek adabiyoti»</td>
                        <td>Kuronov Dilmurod Xaydaralievich, filologiya fanlari doktori, professor, +998 91 160 20 43</td>
                        <td>Аzizov Nurmuxdmmad Nematillaevich</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OzbekAdabiyoti