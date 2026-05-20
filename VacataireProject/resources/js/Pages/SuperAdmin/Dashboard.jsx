// import React from "react";
// import { Link } from "@inertiajs/react";

// export default function Dashboard({
//     totalAdmins,
//     totalVacataires
// }) {

//     return (
//         <div className="container mt-5">

//             <div className="d-flex justify-content-between align-items-center mb-5">

//                 <h1>Super Admin Dashboard</h1>

//                 <Link
//                     href="/logout"
//                     method="post"
//                     as="button"
//                     className="btn btn-danger"
//                 >
//                     Logout
//                 </Link>

//             </div>

//             <div className="row">

//                 <div className="col-md-6 mb-4">
//                     <div className="card shadow border-0">
//                         <div className="card-body text-center">

//                             <h3>Total Admins</h3>

//                             <h1 className="text-primary mt-3">
//                                 {totalAdmins}
//                             </h1>

//                             <Link
//                                 href="/superadmin/admins"
//                                 className="btn btn-dark mt-3"
//                             >
//                                 Gérer les Admins
//                             </Link>

//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-md-6 mb-4">
//                     <div className="card shadow border-0">
//                         <div className="card-body text-center">

//                             <h3>Total Vacataires</h3>

//                             <h1 className="text-success mt-3">
//                                 {totalVacataires}
//                             </h1>

//                             <Link
//                                 href="/vacataires"
//                                 className="btn btn-success mt-3"
//                             >
//                                 Gérer les Vacataires
//                             </Link>
// {/*  */}
//                         </div>
//                     </div>
//                 </div>

//             </div>

//         </div>
//     );
// }


import React from "react";
import { Link } from "@inertiajs/react";

export default function Dashboard({
    totalAdmins,
    totalVacataires
}) {

    return (
        <div className="d-flex">

            {/* SIDEBAR */}

            <div
                className="text-white d-flex flex-column p-4"
                style={{
                    width: "270px",
                    minHeight: "100vh",
                    background: "#1e293b"
                }}
            >

                <div>

                    <h3 className="fw-bold mb-1">
                        Directeur
                    </h3>

                    <p
                        className="small mb-5"
                        style={{
                            color: "#cbd5e1"
                        }}
                    >
                        Espace Super Administration
                    </p>

                    <ul className="nav flex-column gap-2">

                        <li>
                            <Link
                                href="/superadmin/dashboard"
                                className="btn w-100 text-start text-white py-3 border-0"
                                style={{
                                    background: "#334155"
                                }}
                            >
                                📊 Tableau de bord
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/vacataires"
                                className="btn w-100 text-start text-white py-3"
                                style={{
                                    background: "transparent",
                                    border: "1px solid #475569"
                                }}
                            >
                                👨‍🏫 Gestion des Vacataires
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/superadmin/admins"
                                className="btn w-100 text-start text-white py-3"
                                style={{
                                    background: "transparent",
                                    border: "1px solid #475569"
                                }}
                            >
                                👨‍💼 Gestion des Admins
                            </Link>
                        </li>

                    </ul>

                </div>

                <div className="mt-auto">

                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="btn btn-danger w-100 py-3"
                    >
                        Déconnexion
                    </Link>

                </div>

            </div>

            {/* CONTENT */}

            <div
                className="flex-grow-1 p-5"
                style={{
                    backgroundColor: "#f1f5f9",
                    minHeight: "100vh"
                }}
            >

                {/* HEADER */}

                <div className="mb-5">

                    <h2 className="fw-bold">
                        Tableau de bord Directeur
                    </h2>

                    <p className="text-muted">
                        Gestion centralisée des administrateurs et vacataires
                    </p>

                </div>

                {/* CARDS */}

                <div className="row g-4">

                    <div className="col-md-6">

                        <div
                            className="card border-0 shadow-sm rounded-4"
                        >

                            <div className="card-body p-5">

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>

                                        <p
                                            className="text-muted mb-2"
                                        >
                                            Nombre des Admins
                                        </p>

                                        <h1
                                            className="fw-bold"
                                            style={{
                                                color: "#0f172a",
                                                fontSize: "55px"
                                            }}
                                        >
                                            {totalAdmins}
                                        </h1>

                                    </div>

                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                            background: "#dbeafe",
                                            fontSize: "30px"
                                        }}
                                    >
                                        👨‍💼
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-6">

                        <div
                            className="card border-0 shadow-sm rounded-4"
                        >

                            <div className="card-body p-5">

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>

                                        <p
                                            className="text-muted mb-2"
                                        >
                                            Nombre des Vacataires
                                        </p>

                                        <h1
                                            className="fw-bold"
                                            style={{
                                                color: "#0f172a",
                                                fontSize: "55px"
                                            }}
                                        >
                                            {totalVacataires}
                                        </h1>

                                    </div>

                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                            background: "#dcfce7",
                                            fontSize: "30px"
                                        }}
                                    >
                                        👨‍🏫
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}