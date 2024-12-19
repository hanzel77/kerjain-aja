import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import JobCard from '@/Components/JobCard';

export default function Explore() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Explore
                </h2>
            }
        >
            <Head title="Explore" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg py-1">
                        <input className='w-full border-none focus:ring-0' placeholder='Cari Pekerjaan..'/>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-8 px-6'>
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
        </AuthenticatedLayout>
    );
}
