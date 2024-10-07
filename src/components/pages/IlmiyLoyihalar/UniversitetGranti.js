import React from "react";

const UniversitetGranti = () => {
    return (
        <div className="container overflow-auto" style={{ marginTop: "200px", marginBottom:"50px" }}>
            <h3 className="text-center mb-5">Andijon davlat universitetida bajarilayotgan xorijiy loyihalar toʻgʻrisida
                <br />
                MAʼLUMOT
            </h3>
            <table className="mb-3 table-bordered">
                <thead>
                    <tr className="text-center">
                        <th scope="col">Loyiha muddati</th>
                        <th scope="col">Loyiha nomi</th>
                        <th scope="col">Moliyalashtirish xajmi</th>
                        <th scope="col">Qisqacha ma’lumot</th>
                        <th scope="col">Loyiha rahbari</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td>01.11.2023-01.11.2026</td>
                        <td>
                            “DEBSEUz” xalqaro Erasmus+loyihasi
                        </td>
                        <td>58 898 EUR</td>
                        <td>O‘zbekistonda quyosh energetikasi bo‘yicha bakalavrlar uchun maqsadli ta’lim dasturini ishlab chiqish,
                            laboratoriya jixozlari bazasini rovojlantirish, ishchi dasturlarni yaratish boyicha 2024 yil 22-24 yanvar
                            sanalarida mahalliy va xorijiy  hamkor OTMlar bilan TATU da
                            uchrashuv bo’lib o’tdi va unda barcha bajarilishi kerak bo’lgan ishlar kelishildi va loyihada qatnashayotgan
                            OTMlarga taqsimlandi.
                        </td>
                        <td>
                            Professor R.Aliyev
                        </td>
                    </tr>
                    <tr className="text-center">
                        <td>15.01.2023 14.01.2026 </td>
                        <td>
                            Oziq-ovqat ilmi va va texnologiyasida o‘zbek olimlari uchun Yevropa butun jahon iqtidorlar lageri  (ECAMPUZ)
                        </td>
                        <td>57 783 EUR</td>
                        <td>Andijon davlat universiteti ERASMUSQ dasturi ECAMPUZ loyixasida xamkor sifatida ishtirokni 2023 yil 15 yanvardan boshladi. Loyixani grandxolderi bo‘lim Toshkent kimyo texnologiyalar instituti hisoblanidi.
                            Andijon davlat universitetiga loyixaning WP6 (Project plan security and assurance of the quality of results) vazifa sifatida yuklatilgan bo‘lib, belgilangan muddatida Sifatni nazoratini rejasi ishlab chiqildi va reja asosida 2013 yilda sifatni ta’minlash yuzasidan rejani bajarilishini hisoboti tayyorladi. Shu bilan birga loyixani logotipini tayyorlab berdi.
                            2023 yil 16-18 fevral kunlari Toshkent kimyo texnologiya institutida The Pre-kick Off Meetingda universitetda 3 nafar loyixa a’zolari ishtirok etishdi.
                            2023 yil 12 -14 aprel kunalri Toshkent kimyo texnologiya institutida Kick-off Meetingda universitetda 2 nafar loyixa a’zolari ishtirok etishdi.

                        </td>
                        <td>
                            Dotsent D.Nurmatov
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UniversitetGranti