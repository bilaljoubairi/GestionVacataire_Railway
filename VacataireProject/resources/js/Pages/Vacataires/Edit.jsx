import React, { useState } from "react";
import { router } from "@inertiajs/react";
import AdminLayout from "../../Layouts/AdminLayout";

export default function Edit({ vacataire }) {

    const [values, setValues] = useState({

        nom: vacataire.nom || "",
        prenom: vacataire.prenom || "",
        cin: vacataire.cin || "",
        ppr: vacataire.ppr || "",
        email: vacataire.email || "",
        specialite: vacataire.specialite || "",

        statut: vacataire.statut || "en_attente",

        est_fonctionnaire:
            vacataire.est_fonctionnaire || false,

        lieu_travail:
            vacataire.lieu_travail || "",

        cin_file: null,
        arreter_file: null,
        autorisation_file: null,
        attestation_non_travail_file: null,

    });

    function handleSubmit(e) {

        e.preventDefault();

        router.post(

            `/vacataires/${vacataire.id}`,

            {
                ...values,
                _method: "put",
            },

            {
                forceFormData: true,
            }
        );
    }

    const isBlocked =
        vacataire.statut === "accepte";



    return (

        <AdminLayout>

            <div className="card shadow border-0">

                <div className="card-header bg-warning">

                    <h3 className="mb-0">
                        Modifier Vacataire
                    </h3>

                </div>

                <div className="card-body">

                    {isBlocked && (

                        <div className="alert alert-success mb-4">

                            Votre dossier a été accepté.
                            Modification impossible.

                        </div>

                    )}

                    <form onSubmit={handleSubmit}>

                        <div className="row">

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Nom
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={values.nom}
                                    onChange={(e) =>
                                        setValues({
                                            ...values,
                                            nom: e.target.value
                                        })
                                    }

                                    disabled={isBlocked}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Prénom
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={values.prenom}
                                    onChange={(e) =>
                                        setValues({
                                            ...values,
                                            prenom: e.target.value
                                        })
                                    }

                                    disabled={isBlocked}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    CIN
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={values.cin}
                                    onChange={(e) =>
                                        setValues({
                                            ...values,
                                            cin: e.target.value
                                        })
                                    }
                                    disabled={isBlocked}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    PPR
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={values.ppr}
                                    onChange={(e) =>
                                        setValues({
                                            ...values,
                                            ppr: e.target.value
                                        })
                                    }

                                    disabled={isBlocked}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    value={values.email}
                                    onChange={(e) =>
                                        setValues({
                                            ...values,
                                            email: e.target.value
                                        })
                                    }

                                    disabled={isBlocked}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Spécialité
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={values.specialite}
                                    onChange={(e) =>
                                        setValues({
                                            ...values,
                                            specialite: e.target.value
                                        })
                                    }

                                    disabled={isBlocked}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Statut
                                </label>

                                <select
                                    className="form-select"
                                    value={values.statut}
                                    onChange={(e) =>
                                        setValues({
                                            ...values,
                                            statut: e.target.value
                                        })
                                    }

                                    disabled={isBlocked}
                                >

                                    <option value="en_attente">
                                        En attente
                                    </option>

                                    <option value="accepte">
                                        Accepté
                                    </option>

                                    <option value="refuse">
                                        Refusé
                                    </option>

                                </select>

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Fonctionnaire ?
                                </label>

                                <select
                                    className="form-select"
                                    value={
                                        values.est_fonctionnaire
                                            ? "1"
                                            : "0"
                                    }
                                    onChange={(e) =>
                                        setValues({
                                            ...values,
                                            est_fonctionnaire:
                                                e.target.value === "1"
                                        })
                                    }
                                    disabled={isBlocked}
                                >

                                    <option value="0">
                                        Non
                                    </option>

                                    <option value="1">
                                        Oui
                                    </option>

                                </select>

                            </div>

                            {values.est_fonctionnaire && (

                                <div className="col-md-12 mb-3">

                                    <label className="form-label">
                                        Lieu Travail
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={values.lieu_travail}
                                        onChange={(e) =>
                                            setValues({
                                                ...values,
                                                lieu_travail:
                                                    e.target.value
                                            })
                                        }

                                        disabled={isBlocked}
                                    />

                                </div>

                            )}

                            {!values.est_fonctionnaire && (

                                <div className="col-md-12 mb-3">

                                    <label className="form-label">
                                        Attestation Non Travail
                                    </label>

                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={(e) =>
                                            setValues({
                                                ...values,
                                                attestation_non_travail_file:
                                                    e.target.files[0]
                                            })
                                        }

                                        disabled={isBlocked}
                                    />

                                </div>

                            )}

                            <hr className="my-4" />

                            <h4 className="mb-4">
                                Modifier les documents
                            </h4>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    CIN PDF
                                </label>

                                <input
                                    type="file"
                                    className="form-control"
                                    onChange={(e) =>
                                        setValues({
                                            ...values,
                                            cin_file:
                                                e.target.files[0]
                                        })
                                    }

                                    disabled={isBlocked}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Arrêté PDF
                                </label>

                                <input
                                    type="file"
                                    className="form-control"
                                    onChange={(e) =>
                                        setValues({
                                            ...values,
                                            arreter_file:
                                                e.target.files[0]
                                        })
                                    }

                                    disabled={isBlocked}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Autorisation PDF
                                </label>

                                <input
                                    type="file"
                                    className="form-control"
                                    onChange={(e) =>
                                        setValues({
                                            ...values,
                                            autorisation_file:
                                                e.target.files[0]
                                        })
                                    }

                                    disabled={isBlocked}
                                />

                            </div>

                        </div>

                        {!isBlocked && (

                            <button className="btn btn-warning mt-3">

                                Modifier Vacataire

                            </button>

                        )}

                    </form>

                </div>

            </div>

        </AdminLayout>
    );
}