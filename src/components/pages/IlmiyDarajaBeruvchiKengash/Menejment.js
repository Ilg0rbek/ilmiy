import React from "react";

const Menejment = () => {
    return (
        <div className="container overflow-auto" style={{ marginTop: "200px" }}>
            <h3 className="text-center mb-5">Menejment</h3>
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
                        <td>Аndijon davlat universiteti huzuridagi Menejment ixtisosligi boʼyicha ilmiy darajalar beruvchi PhD.03/30.12.2019.I.60.03 raqamli ilmiy kengash</td>
                        <td>2019 й. 30-dekabr 372-son</td>
                        <td>08.00.13- “Menejment”</td>
                        <td>Аsqarov Nodirbek Ibrohimovich, iqtisod fanlari doktori, dotsent, +998916024488</td>
                        <td>Maraimova Umida Ismailjanovna +99891-614-00-53</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Menejment