import React from "react";

const OzbekistosnTarihi = () => {
    return (
        <div className="container overflow-auto" style={{ marginTop: "200px" }}>
            <h3 className="text-center mb-5">"TOVARLAR KIMYOSI" VA "XALQ TABOBATI"</h3>
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
                        <td>Аndijon davlat universiteti xuzuridagi kimyo va texnika fanlari boʼyicha ilmiy darajalar beruvchi DSc.03/29.10.2021.K/T.60.05 raqamli ilmiy kengash</td>
                        <td>2021 y. 30-oktyabrь 510-son</td>
                        <td>02.00.09 - "Tovarlar kimyosi" va 14.00.41 - "Xalq tabobati"</td>
                        <td>Isakov Xayatullo, Texnika fanlari doktori, dotsent.+998994330940</td>
                        <td>Isakov Xayatullo, Texnika fanlari doktori, dotsent. Moʼminjonov Mirjalol Muqimjon oʼgʼli +99899-917-07-86</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OzbekistosnTarihi