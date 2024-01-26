import React from "react";

const BialogiyaFanlarBoyicha = () => {
    return (
        <div className="container overflow-auto" style={{ marginTop: "200px" }}>
            <h3 className="text-center mb-5">Bialogiya fanlari bo'yicha</h3>
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
                        <td>Аndijon davlat universiteti huzuridagi biologiya fanlari boʼyicha ilmiy darajalar beruvchi PhD.03/28.02.2023.B.60.06 raqamli Ilmiy Kengash</td>
                        <td>28.02.2023 y.</td>
                        <td>Biologiya fanlari boʼyicha 03.00.10-ekologiya</td>
                        <td>Yuldashev Аkramjon Sultanmuradovich. biologiya fanlari doktori, professor. Аndijon davlat universiteti rektori</td>
                        <td>Umarov Farrux Ulugbekovich +99893-449-21-12</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BialogiyaFanlarBoyicha