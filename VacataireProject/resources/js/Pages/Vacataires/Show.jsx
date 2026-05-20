import { router } from '@inertiajs/react';
import React from 'react';
import AdminLayout from '../../Layouts/AdminLayout';

export default function Show({ vacataire }) {

    return (
        <AdminLayout>

            <div className="card shadow border-0">

                <div className="card-header bg-primary text-white">
                    <h3>Dossier Vacataire</h3>
                </div>

                <div className="card-body">

                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <strong>Nom :</strong>
                            <p>{vacataire.nom}</p>
                        </div>

                        <div className="col-md-6 mb-3">
                            <strong>Prénom :</strong>
                            <p>{vacataire.prenom}</p>
                        </div>

                        <div className="col-md-6 mb-3">
                            <strong>Email :</strong>
                            <p>{vacataire.email}</p>
                        </div>

                        <div className="col-md-6 mb-3">
                            <strong>CIN :</strong>
                            <p>{vacataire.cin}</p>
                        </div>

                        <div className="col-md-6 mb-3">
                            <strong>Spécialité :</strong>
                            <p>{vacataire.specialite}</p>
                        </div>

                        <div className="col-md-6 mb-3">
                            <strong>Fonctionnaire :</strong>

                            <p>
                                {vacataire.est_fonctionnaire
                                    ? 'Oui'
                                    : 'Non'}
                            </p>

                        </div>

                        <div className="col-md-6 mb-3">
                            <strong>Lieu travail :</strong>
                            <p>{vacataire.lieu_travail}</p>
                        </div>

                        <div className="col-md-6 mb-3">
                            <strong>Statut :</strong>

                            <p>

                                {vacataire.statut === 'accepte' && (
                                    <span className="badge bg-success">
                                        Accepté
                                    </span>
                                )}

                                {vacataire.statut === 'refuse' && (
                                    <span className="badge bg-danger">
                                        Refusé
                                    </span>
                                )}

                                {vacataire.statut === 'en_attente' && (
                                    <span className="badge bg-warning text-dark">
                                        En attente
                                    </span>
                                )}

                            </p>

                        </div>

                    </div>

                </div>

            </div>


            <hr className="my-4" />

            <h4 className="mb-3">
                Documents
            </h4>

            <div className="d-flex flex-wrap gap-2">

                <a
                    href={`/storage/${vacataire.cin_file}`}
                    target="_blank"
                    className="btn btn-outline-primary"
                >
                    Voir CIN
                </a>

                <a
                    href={`/storage/${vacataire.arreter_file}`}
                    target="_blank"
                    className="btn btn-outline-secondary"
                >
                    Voir Arrêté
                </a>

                {vacataire.autorisation_file && (

                    <a
                        href={`/storage/${vacataire.autorisation_file}`}
                        target="_blank"
                        className="btn btn-outline-success"
                    >
                        Voir Autorisation
                    </a>

                )}

                {vacataire.attestation_non_travail_file && (

                    <a
                        href={`/storage/${vacataire.attestation_non_travail_file}`}
                        target="_blank"
                        className="btn btn-outline-danger"
                    >
                        Voir Attestation
                    </a>

                )}

            </div>


            {/* <div className="mt-4 d-flex gap-2"> */}


{/* 
<button
    className="btn btn-success me-2"
    onClick={() =>

        router.patch(
            `/vacataires/accepter/${vacataire.id}`,
            {},
            {
                onSuccess: () =>
                    router.visit('/vacataires')
            }
        )

    }
>
    Accepter
</button>

<button
    className="btn btn-danger"
    onClick={() =>

        router.patch(
            `/vacataires/refuser/${vacataire.id}`,
            {},
            {
                onSuccess: () =>
                    router.visit('/vacataires')
            }
        )

    }
>
    Refuser
</button>

            </div> */}


        </AdminLayout>
    );
}


// import React from "react";
// import AdminLayout from "../../Layouts/AdminLayout";
// import { router } from "@inertiajs/react";

// export default function Show({ vacataire }) {

//     const accepter = () => {

//         router.put(`/vacataires/${vacataire.id}/accepter`);
//     };

//     const refuser = () => {

//         router.put(`/vacataires/${vacataire.id}/refuser`);
//     };

//     return (

//         <AdminLayout>

//             <div className="card shadow border-0">

//                 <div className="card-header bg-dark text-white">

//                     <h3>Détails Vacataire</h3>

//                 </div>

//                 <div className="card-body">

//                     <div className="row">

//                         <div className="col-md-6 mb-3">

//                             <h5>Nom</h5>
//                             <p>{vacataire.nom}</p>

//                         </div>

//                         <div className="col-md-6 mb-3">

//                             <h5>Prénom</h5>
//                             <p>{vacataire.prenom}</p>

//                         </div>

//                         <div className="col-md-6 mb-3">

//                             <h5>Email</h5>
//                             <p>{vacataire.email}</p>

//                         </div>

//                         <div className="col-md-6 mb-3">

//                             <h5>CIN</h5>
//                             <p>{vacataire.cin}</p>

//                         </div>

//                         <div className="col-md-6 mb-3">

//                             <h5>PPR</h5>
//                             <p>{vacataire.ppr}</p>

//                         </div>

//                         <div className="col-md-6 mb-3">

//                             <h5>Spécialité</h5>
//                             <p>{vacataire.specialite}</p>

//                         </div>

//                         <div className="col-md-6 mb-3">

//                             <h5>Fonctionnaire</h5>

//                             <p>
//                                 {vacataire.est_fonctionnaire
//                                     ? "Oui"
//                                     : "Non"}
//                             </p>

//                         </div>

//                         <div className="col-md-6 mb-3">

//                             <h5>Lieu Travail</h5>
//                             <p>{vacataire.lieu_travail}</p>

//                         </div>

//                     </div>

//                     <hr />

//                     <h4>Documents</h4>

//                     <div className="d-flex flex-wrap gap-2 mt-3">

//                         {vacataire.cin_file && (
//                             <a
//                                 href={`/storage/${vacataire.cin_file}`}
//                                 target="_blank"
//                                 className="btn btn-primary"
//                             >
//                                 Voir CIN
//                             </a>
//                         )}

//                         {vacataire.arreter_file && (
//                             <a
//                                 href={`/storage/${vacataire.arreter_file}`}
//                                 target="_blank"
//                                 className="btn btn-secondary"
//                             >
//                                 Voir Arrêté
//                             </a>
//                         )}

//                         {vacataire.autorisation_file && (
//                             <a
//                                 href={`/storage/${vacataire.autorisation_file}`}
//                                 target="_blank"
//                                 className="btn btn-warning"
//                             >
//                                 Voir Autorisation
//                             </a>
//                         )}

//                         {vacataire.attestation_non_travail_file && (
//                             <a
//                                 href={`/storage/${vacataire.attestation_non_travail_file}`}
//                                 target="_blank"
//                                 className="btn btn-info"
//                             >
//                                 Voir Attestation
//                             </a>
//                         )}

//                     </div>

//                     <hr />

//                     {vacataire.statut === "en_attente" && (

//                         <div className="mt-4">

//                             <button
//                                 onClick={accepter}
//                                 className="btn btn-success me-2"
//                             >
//                                 Accepter
//                             </button>

//                             <button
//                                 onClick={refuser}
//                                 className="btn btn-danger"
//                             >
//                                 Refuser
//                             </button>

//                         </div>

//                     )}

//                 </div>

//             </div>

//         </AdminLayout>
//     );
// }