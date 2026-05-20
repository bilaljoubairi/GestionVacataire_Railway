export default function SuiviDossier({ vacataire }) {

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#f4f7fb",
                padding: "50px",
            }}
        >
            <div
                style={{
                    maxWidth: "800px",
                    margin: "auto",
                    background: "white",
                    padding: "40px",
                    borderRadius: "20px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
            >
                <h1
                    style={{
                        marginBottom: "30px",
                    }}
                >
                    Suivi du dossier
                </h1>

                <div className="mb-3">
                    <strong>Nom :</strong> {vacataire.nom}
                </div>

                <div className="mb-3">
                    <strong>Prénom :</strong> {vacataire.prenom}
                </div>

                <div className="mb-3">
                    <strong>Email :</strong> {vacataire.email}
                </div>

                <div className="mb-3">
                    <strong>Spécialité :</strong> {vacataire.specialite}
                </div>

                <div className="mb-3">
                    <strong>Statut :</strong>

                    <span
                        style={{
                            marginLeft: "10px",
                            padding: "8px 15px",
                            borderRadius: "10px",
                            color: "white",
                            background:
                                vacataire.statut === "accepte"
                                    ? "green"
                                    : vacataire.statut === "refuse"
                                    ? "red"
                                    : "orange",
                        }}
                    >
                        {vacataire.statut}
                    </span>
                </div>
            </div>
        </div>
    );
}