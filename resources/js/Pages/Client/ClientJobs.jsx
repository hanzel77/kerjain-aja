import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import JobsTable from '@/Components/JobsTable';

export default function ClientJobs(data) {
    return (
        <AuthenticatedLayout client={true}>
            <Head title="Jobs" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg py-1 border">
                        <input className='w-full border-none focus:ring-0' placeholder='Cari Pekerjaan..' />
                    </div>
                </div>
            </div>

            <div className='px-16'>
                <JobsTable data={data['jobs']}/>
            </div>

        </AuthenticatedLayout>
    );
}
