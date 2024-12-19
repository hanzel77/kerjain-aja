import AuthenticatedNavbar from '@/Components/AuthenticatedNavbar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Home({auth}) {

    return (
        <>
            <Head title="Home" />
            <div>
                <header>
                    <nav>
                        {/* {auth.user ? (
                            <AuthenticatedNavbar></AuthenticatedNavbar>
                        ) : (
                            
                        )} */}
                        <AuthenticatedNavbar></AuthenticatedNavbar>
                    </nav>
                </header>
                <main>

                </main>
            </div>
        </>
    );
}
