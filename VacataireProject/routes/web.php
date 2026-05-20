<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VacataireController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SuperAdminController;

// ================= HOME =================

Route::get('/', function () {

    return Inertia::render('Home');
});

// ================= DEPOT DOSSIER =================

Route::get(
    '/deposer-dossier',
    [VacataireController::class, 'create']
);

Route::post(
    '/deposer-dossier',
    [VacataireController::class, 'store']
);

// ================= SUPER ADMIN =================

Route::middleware(['auth', 'superadmin'])->group(function () {

    // DASHBOARD
    Route::get(
        '/superadmin/dashboard',
        [SuperAdminController::class, 'dashboard']
    )->name('superadmin.dashboard');

    // LISTE ADMINS
    Route::get(
        '/superadmin/admins',
        [SuperAdminController::class, 'index']
    )->name('superadmin.admins');

    // AJOUT ADMIN
    Route::post(
        '/superadmin/admins',
        [SuperAdminController::class, 'store']
    )->name('superadmin.admins.store');

    // SUPPRESSION ADMIN
    Route::post(
        '/superadmin/admins/delete/{id}',
        [SuperAdminController::class, 'destroy']
    )->name('superadmin.admins.destroy');
});

// ================= ESPACE VACATAIRE =================

Route::get(
    '/espace-vacataire',
    [VacataireController::class, 'espace']
);

Route::post(
    '/espace-vacataire/recherche',
    [VacataireController::class, 'recherche']
);


   // AJOUT VACATAIRE
Route::get(
    '/vacataires/create',
    [VacataireController::class, 'create']
)->name('vacataires.create');

Route::post(
    '/vacataires',
    [VacataireController::class, 'store']
)->name('vacataires.store');

Route::middleware(['auth'])->group(function () {

    // LISTE VACATAIRES
    Route::get(
        '/vacataires',
        [VacataireController::class, 'index']
    )->name('vacataires.index');

    // AJOUT VACATAIRE


    // DETAILS
    Route::get(
        '/vacataires/{vacataire}',
        [VacataireController::class, 'show']
    )->name('vacataires.show');

    // MODIFIER
    Route::get(
        '/vacataires/{vacataire}/edit',
        [VacataireController::class, 'edit']
    )->name('vacataires.edit');

    Route::put(
        '/vacataires/{vacataire}',
        [VacataireController::class, 'update']
    )->name('vacataires.update');

    // SUPPRIMER


    Route::post(
        '/vacataires/delete/{id}',
        [VacataireController::class, 'destroy']
    )->name('vacataires.destroy');

    // ACCEPTER
    Route::post(
        '/vacataires/accepter/{id}',
        [VacataireController::class, 'accepter']
    )->name('vacataires.accepter');
    // REFUSER
    Route::post(
        '/vacataires/refuser/{id}',
        [VacataireController::class, 'refuser']
    )->name('vacataires.refuser');

    // STATUT
    Route::get(
        '/vacataires/{vacataire}/statut',
        [VacataireController::class, 'editStatut']
    )->name('vacataires.statut.edit');

    Route::put(
        '/vacataires/{vacataire}/statut',
        [VacataireController::class, 'updateStatut']
    )->name('vacataires.statut.update');
});
// ================= DASHBOARD =================

Route::get(
    '/dashboard',
    [DashboardController::class, 'index']
)->middleware(['auth'])->name('dashboard');

// ================= PROFILE =================

Route::middleware('auth')->group(function () {

    Route::get(
        '/profile',
        [ProfileController::class, 'edit']
    )->name('profile.edit');

    Route::patch(
        '/profile',
        [ProfileController::class, 'update']
    )->name('profile.update');

    Route::delete(
        '/profile',
        [ProfileController::class, 'destroy']
    )->name('profile.destroy');
});

require __DIR__ . '/auth.php';
