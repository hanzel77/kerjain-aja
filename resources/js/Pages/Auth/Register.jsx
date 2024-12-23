import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit} aria-labelledby="register-form">
                <div>
                    <InputLabel htmlFor="name" value="Name" aria-label="Full Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        aria-required="true"
                        aria-describedby="name-error"
                    />

                    <InputError message={errors.name} className="mt-2" id="name-error" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" aria-label="Email Address" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        aria-required="true"
                        aria-describedby="email-error"
                    />

                    <InputError message={errors.email} className="mt-2" id="email-error" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" aria-label="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                        aria-required="true"
                        aria-describedby="password-error"
                    />

                    <InputError message={errors.password} className="mt-2" id="password-error" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                        aria-label="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                        aria-required="true"
                        aria-describedby="password_confirmation-error"
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                        id="password_confirmation-error"
                    />
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                        aria-label="Go to login page"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing} aria-label="Register account">
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
