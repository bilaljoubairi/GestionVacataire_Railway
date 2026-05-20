import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Login" />

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card shadow">
                            <div className="card-header text-center bg-primary text-white">
                                <h4>Connexion</h4>
                            </div>

                            <div className="card-body">
                                {status && (
                                    <div className="alert alert-success">
                                        {status}
                                    </div>
                                )}

                                <form onSubmit={submit}>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            className="form-control"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData('email', e.target.value)
                                            }
                                        />

                                        {errors.email && (
                                            <div className="text-danger small">
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Password
                                        </label>

                                        <input
                                            type="password"
                                            className="form-control"
                                            value={data.password}
                                            onChange={(e) =>
                                                setData('password', e.target.value)
                                            }
                                        />

                                        {errors.password && (
                                            <div className="text-danger small">
                                                {errors.password}
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-check mb-3">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData('remember', e.target.checked)
                                            }
                                        />

                                        <label className="form-check-label">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">
                                        {canResetPassword && (
                                            <Link
                                                href={route('password.request')}
                                                className="text-decoration-none"
                                            >
                                                Forgot password?
                                            </Link>
                                        )}

                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={processing}
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}