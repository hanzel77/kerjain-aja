import AuthenticatedNavbar from '@/Components/AuthenticatedNavbar';


export default function AuthenticatedLayout({ header, children, client }) {
    return (
        <div className="min-h-screen">
            <AuthenticatedNavbar client={client}></AuthenticatedNavbar>

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
