import ApplicationLogo from '@/Components/ApplicationLogo';
import ApplicationLogoClient from '@/Components/ApplicationLogoClient';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children, client }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div>
                {client ? (
                    <Link href='/client'>
                        <ApplicationLogoClient className="h-20 w-44 fill-current text-gray-500 rounded" />
                    </Link>
                ): (
                    <Link href='/'>
                        <ApplicationLogo className="h-20 w-44 fill-current text-gray-500" />
                    </Link>
                )}
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
