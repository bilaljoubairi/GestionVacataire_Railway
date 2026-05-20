<?php

namespace App\Http\Controllers;

use App\Models\Vacataire;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;


class VacataireController extends Controller
{
    // ================= INDEX =================
    public function index()
    {
        $vacataires = Vacataire::all();

        return Inertia::render(
            'Vacataires/Index',
            [
                'vacataires' => $vacataires
            ]
        );
    }

    // ================= SHOW =================
    public function show(Vacataire $vacataire)
    {
        return Inertia::render('Vacataires/Show', [
            'vacataire' => $vacataire
        ]);
    }

    // ================= ACCEPTER =================
    public function accepter($id)
    {
        $vacataire = Vacataire::find($id);

        if ($vacataire) {

            $vacataire->statut = 'Accepté';

            $vacataire->save();
        }

        return redirect()->back();
    }

    // ================= REFUSER =================
    public function refuser($id)
    {
        $vacataire = Vacataire::find($id);

        if ($vacataire) {

            $vacataire->statut = 'Refusé';

            $vacataire->save();
        }

        return redirect()->back();
    }

    // ================= CREATE =================
    public function create()
    {
        return Inertia::render('Vacataires/Create');
    }

    // ================= STORE =================
    public function store(Request $request)
    {
        $validated = $request->validate([

            'nom' => 'required',
            'prenom' => 'required',

            'cin' => 'required|unique:vacataires',

            'email' => 'required|email|unique:vacataires',

            'specialite' => 'required',
            'photo' => 'required|image|mimes:jpg,jpeg,png|max:2048',

            'diplome_file' => 'required|mimes:pdf,jpg,jpeg,png|max:4096',

            'rib_file' => 'required|mimes:pdf,jpg,jpeg,png|max:4096',

            'demande_file' => 'required|mimes:pdf,jpg,jpeg,png|max:4096',

        ]);

        $cinFile = null;
        $arreterFile = null;
        $autorisationFile = null;
        $attestationFile = null;
        $photo = null;
        $diplomeFile = null;
        $ribFile = null;
        $demandeFile = null;

        // upload CIN
        if ($request->hasFile('cin_file')) {

            $cinFile = $request
                ->file('cin_file')
                ->store('uploads/cin', 'public');
        }

        //upload photo
        if ($request->hasFile('photo')) {

            $photo = $request->file('photo')
                ->store('photos', 'public');
        }

        // upload arrêté
        if ($request->hasFile('arreter_file')) {

            $arreterFile = $request
                ->file('arreter_file')
                ->store('uploads/arreter', 'public');
        }

        // upload autorisation
        if ($request->hasFile('autorisation_file')) {

            $autorisationFile = $request
                ->file('autorisation_file')
                ->store('uploads/autorisation', 'public');
        }

        // upload attestation
        if ($request->hasFile('attestation_non_travail_file')) {

            $attestationFile = $request
                ->file('attestation_non_travail_file')
                ->store('uploads/attestation', 'public');
        }
        // diplome
        if ($request->hasFile('diplome_file')) {

            $diplomeFile = $request->file('diplome_file')
                ->store('diplomes', 'public');
        }
        // RIB
        if ($request->hasFile('rib_file')) {

            $ribFile = $request->file('rib_file')
                ->store('ribs', 'public');
        }
        // demande manuscrite
        if ($request->hasFile('demande_file')) {

            $demandeFile = $request->file('demande_file')
                ->store('demandes', 'public');
        }

        Vacataire::create([

            'user_id' => Auth::id(),

            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'cin' => $request->cin,
            'ppr' => $request->ppr,
            'email' => $request->email,
            'specialite' => $request->specialite,

            'est_fonctionnaire' =>
            $request->est_fonctionnaire,

            'lieu_travail' =>
            $request->lieu_travail,

            'cin_file' => $cinFile,
            'arreter_file' => $arreterFile,
            'autorisation_file' => $autorisationFile,

            'attestation_non_travail_file' =>
            $attestationFile,

            'photo' => $photo,
            'diplome_file' => $diplomeFile,
            'rib_file' => $ribFile,
            'demande_file' => $demandeFile,
            'statut' => 'en_attente',

        ]);

        return redirect('/');
    }

    // ================= EDIT =================
    public function edit(Vacataire $vacataire)
    {
        return Inertia::render('Vacataires/Edit', [
            'vacataire' => $vacataire
        ]);
    }
    // ================= UPDATE =================
    public function update(Request $request, Vacataire $vacataire)
    {
        $cinFile = $vacataire->cin_file;
        $arreterFile = $vacataire->arreter_file;
        $autorisationFile = $vacataire->autorisation_file;

        $attestationFile =
            $vacataire->attestation_non_travail_file;

        // CIN
        if ($request->hasFile('cin_file')) {

            $cinFile = $request
                ->file('cin_file')
                ->store('uploads/cin', 'public');
        }

        // arrêté
        if ($request->hasFile('arreter_file')) {

            $arreterFile = $request
                ->file('arreter_file')
                ->store('uploads/arreter', 'public');
        }

        // autorisation
        if ($request->hasFile('autorisation_file')) {

            $autorisationFile = $request
                ->file('autorisation_file')
                ->store('uploads/autorisation', 'public');
        }

        // attestation
        if ($request->hasFile(
            'attestation_non_travail_file'
        )) {

            $attestationFile = $request
                ->file('attestation_non_travail_file')
                ->store('uploads/attestation', 'public');
        }

        $vacataire->update([

            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'cin' => $request->cin,
            'ppr' => $request->ppr,
            'email' => $request->email,
            'specialite' => $request->specialite,

            'statut' => $request->statut,

            'est_fonctionnaire' =>
            $request->est_fonctionnaire,

            'lieu_travail' =>
            $request->lieu_travail,

            'cin_file' => $cinFile,
            'arreter_file' => $arreterFile,
            'autorisation_file' => $autorisationFile,

            'attestation_non_travail_file' =>
            $attestationFile,

        ]);

        return redirect('/vacataires');
    }

  
    public function destroy($id)
    {
        $vacataire = Vacataire::find($id);

        if ($vacataire) {

            $vacataire->delete();
        }

        return redirect()->back();
    }
    //=============================================vacataire Dashboard------------------------------------------
    public function espace()
{
    return Inertia::render('Vacataires/EspaceVacataire');
}

public function recherche(Request $request)
{
    $vacataire = Vacataire::where('email', $request->email)
        ->where('cin', $request->cin)
        ->first();

    if (!$vacataire) {

        return back()->withErrors([
            'message' => 'Informations incorrectes'
        ]);
    }

    return Inertia::render(
        'Vacataires/SuiviDossier',
        [
            'vacataire' => $vacataire
        ]
    );
}
}
