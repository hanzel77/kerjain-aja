import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import JobsTable from '@/Components/JobsTable';
import { useState } from 'react';

export default function ClientJobs(data) {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredJobs = data['jobs'].filter(job =>
        job.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <AuthenticatedLayout client={true}>
            <Head title="Jobs" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg py-1 border">
                        <input
                            className='w-full border-none focus:ring-0'
                            placeholder='Cari Pekerjaan..'
                            value={searchQuery}
                            onChange={handleSearch}
                            aria-label="Search for jobs"
                        />
                    </div>
                </div>
            </div>

            <div className='px-16'>
                <JobsTable data={filteredJobs} aria-label="Job listings table" />
            </div>

        </AuthenticatedLayout>
    );
}
