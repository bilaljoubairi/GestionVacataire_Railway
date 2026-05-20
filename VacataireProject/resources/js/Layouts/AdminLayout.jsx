import React from "react";
import { Link, router, usePage } from "@inertiajs/react";

export default function AdminLayout({ children }) {

    const { url } = usePage();

    function logout(e) {

        e.preventDefault();

        router.post('/logout');

    }

    return (

        <div
            className="d-flex"
            style={{
                minHeight: "100vh",
                background: "#f4f7fb"
            }}
        >

            {/* SIDEBAR */}

            <div
                style={{
                    width: "270px",
                    background: "linear-gradient(180deg, #111827 0%, #1f2937 100%)",
                    color: "white",
                    padding: "30px 22px",
                    boxShadow: "4px 0 20px rgba(0,0,0,0.08)"
                }}
            >

                {/* LOGO */}

                <div className="mb-5">

                    <h2
                        className="fw-bold"
                        style={{
                            fontSize: "28px",
                            letterSpacing: "0.5px"
                        }}
                    >
                        Vacataire
                    </h2>

                    <p
                        style={{
                            color: "#9ca3af",
                            marginTop: "-5px",
                            fontSize: "14px"
                        }}
                    >
                        Administration Panel
                    </p>

                </div>

                {/* MENU */}

                <div className="d-flex flex-column gap-2">

                    <Link
                        href="/dashboard"
                        className={`text-decoration-none px-3 py-3 rounded-3 fw-semibold ${
                            url === "/dashboard"
                                ? "bg-primary text-white"
                                : "text-light"
                        }`}
                        style={{
                            transition: "0.2s"
                        }}
                    >
                        📊 Dashboard
                    </Link>

                    <Link
                        href="/vacataires"
                        className={`text-decoration-none px-3 py-3 rounded-3 fw-semibold ${
                            url.startsWith("/vacataires")
                                ? "bg-primary text-white"
                                : "text-light"
                        }`}
                        style={{
                            transition: "0.2s"
                        }}
                    >
                        👨‍🏫 Vacataires
                    </Link>

                </div>

                {/* LOGOUT */}

                <div
                    style={{
                        position: "absolute",
                        bottom: "30px",
                        width: "225px"
                    }}
                >

                    <button
                        onClick={logout}
                        className="btn w-100 fw-semibold"
                        style={{
                            background: "#dc2626",
                            color: "white",
                            borderRadius: "12px",
                            padding: "12px",
                            border: "none",
                            transition: "0.2s",
                            boxShadow: "0 4px 12px rgba(220,38,38,0.25)"
                        }}
                    >
                        Logout
                    </button>

                </div>

            </div>

            {/* CONTENT */}

            <div
                className="flex-grow-1"
                style={{
                    padding: "35px"
                }}
            >

                {/* TOP BAR */}

                <div
                    className="d-flex justify-content-between align-items-center mb-4"
                >

                    <div>

                        <h3
                            className="fw-bold mb-1"
                            style={{
                                color: "#111827"
                            }}
                        >
                            Dashboard
                        </h3>

                        <p
                            className="text-muted mb-0"
                        >
                            Gestion des vacataires et administration
                        </p>

                    </div>

                    <div
                        className="d-flex align-items-center gap-3"
                    >

                        <div
                            className="bg-white shadow-sm rounded-circle d-flex justify-content-center align-items-center"
                            style={{
                                width: "48px",
                                height: "48px",
                                fontSize: "18px",
                                fontWeight: "bold",
                                color: "#111827"
                            }}
                        >
                            A
                        </div>

                    </div>

                </div>

                {/* PAGE */}

                <div
                    className="bg-white p-4 rounded-4 shadow-sm"
                    style={{
                        minHeight: "85vh"
                    }}
                >

                    {children}

                </div>

            </div>

        </div>

    );

}