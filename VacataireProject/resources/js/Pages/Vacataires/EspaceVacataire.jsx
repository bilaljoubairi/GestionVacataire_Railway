import React from "react";
import { useForm } from "@inertiajs/react";

export default function EspaceVacataire() {

    const { data, setData, post, errors } = useForm({
        email: "",
        cin: "",
    });

    function submit(e) {
        e.preventDefault();

        post("/espace-vacataire/recherche");
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f4f7fb",
            }}
        >
            <div
                style={{
                    width: "500px",
                    background: "white",
                    padding: "40px",
                    borderRadius: "20px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        marginBottom: "30px",
                    }}
                >
                    Espace Vacataire
                </h1>

                <form onSubmit={submit}>

                    <div className="mb-3">
                        <label>Email</label>

                        <input
                            type="email"
                            className="form-control"
                            value={data.email}
                            onChange={(e) =>
                                setData("email", e.target.value)
                            }
                        />
                    </div>

                    <div className="mb-3">
                        <label>CIN</label>

                        <input
                            type="text"
                            className="form-control"
                            value={data.cin}
                            onChange={(e) =>
                                setData("cin", e.target.value)
                            }
                        />
                    </div>

                    {errors.message && (
                        <div className="alert alert-danger">
                            {errors.message}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Consulter mon dossier
                    </button>

                </form>
            </div>
        </div>
    );
}