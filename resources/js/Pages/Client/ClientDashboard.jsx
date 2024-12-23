import JobsTable from '@/Components/JobsTable';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function ClientDashboard(data) {
    return (
        <AuthenticatedLayout client={true}>
            <Head title="Client Dashboard" />
            <div className='h-screen px-4 sm:px-8 md:px-20'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 pb-10 gap-8'>
                    <div className='border border-gray-300 bg-white rounded-lg shadow-md p-6' aria-label="Jobs Posted Overview">
                        <div className='text-center'>
                            <div className='text-lg font-semibold text-gray-500 mb-2'>
                                Jobs Posted
                            </div>
                            <div className='text-4xl sm:text-6xl font-bold'>
                                {data['jobs'].length}
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-300 bg-white rounded-lg shadow-md p-6' aria-label="Jobs Completed Overview">
                        <div className='text-center'>
                            <div className='text-lg font-semibold text-gray-500 mb-2'>
                                Jobs Completed
                            </div>
                            <div className='text-4xl sm:text-6xl font-bold'>
                                {data['jobs'].filter(job => job.status === 'closed').length}
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-300 bg-white rounded-lg shadow-md p-6' aria-label="Active Jobs Overview">
                        <div className='text-center'>
                            <div className='text-lg font-semibold text-gray-500 mb-2'>
                                Active Jobs
                            </div>
                            <div className='text-4xl sm:text-6xl font-bold'>
                                {data['jobs'].filter(job => job.status === 'open').length}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-10'>
                    <div className="w-full flex justify-between items-center mb-3 mt-1 pl-3" aria-label="Posted Jobs Table">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-800">List of Posted Jobs</h3>
                        </div>
                    </div>
                    <JobsTable data={data['jobs']} />
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
