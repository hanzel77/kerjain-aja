import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
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
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600" role="alert">
                    {status}
                </div>
            )}

            <form onSubmit={submit} aria-labelledby="login-form" role="form">
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        aria-required="true"
                        aria-describedby="email-error"
                    />

                    <InputError message={errors.email} className="mt-2" id="email-error" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                        aria-required="true"
                        aria-describedby="password-error"
                    />

                    <InputError message={errors.password} className="mt-2" id="password-error" />
                </div>

                <div className="mt-4 block">
                    <label className="flex items-center justify-between">
                        <div>
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData('remember', e.target.checked)
                                }
                                aria-labelledby="remember-label"
                            />
                            <span className="ms-2 text-sm text-gray-600" id="remember-label">
                                Remember me
                            </span>
                        </div>

                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                                aria-label="Forgot password link"
                            >
                                Forgot your password?
                            </Link>
                        )}
                    </label>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <Link
                        href={route('register')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                        aria-label="Go to register page"
                    >
                        Don't have an account?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing} aria-label="Log in to your account">
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
