import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import JobCard from '@/Components/JobCard';

export default function ClientJobs() {
    return (
        <AuthenticatedLayout client={true}>
            <Head title="Jobs" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg py-1">
                        <input className='w-full border-none focus:ring-0' placeholder='Cari Pekerjaan..' />
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
