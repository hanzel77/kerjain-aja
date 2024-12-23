import AuthenticatedNavbar from '@/Components/AuthenticatedNavbar';
import Footer from '@/Components/Footer';
import JobsTable from '@/Components/JobsTable';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function ClientDashboard(data){
    return(
        <AuthenticatedLayout client={true}>
            <Head title="Client Dashboard" />
            <div className='h-screen px-20'>
                <div className='grid grid-cols-3 pt-10 pb-10 gap-8'>
                    <div className='border border-gray-300 bg-white rounded-lg shadow-md p-6'>
                        <div className='text-center'>
                            <div className='text-lg font-semibold text-gray-500 mb-2'>
                                Jobs Posted
                            </div>
                            <div className='text-6xl font-bold'>
                                {data['jobs'].length}
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-300 bg-white rounded-lg shadow-md p-6'>
                        <div className='text-center'>
                            <div className='text-lg font-semibold text-gray-500 mb-2'>
                                Jobs Completed
                            </div>
                            <div className='text-6xl font-bold'>
                                {data['jobs'].filter(job => job.status === 'closed').length}
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-300 bg-white rounded-lg shadow-md p-6'>
                        <div className='text-center'>
                            <div className='text-lg font-semibold text-gray-500 mb-2'>
                                Active Jobs
                            </div>
                            <div className='text-6xl font-bold'>
                                {data['jobs'].filter(job => job.status === 'open').length}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="w-full flex justify-between items-center mb-3 mt-1 pl-3">
                        <div>
                            <h3 class="text-lg font-semibold text-slate-800">List of Posted Jobs</h3>
                        </div>
                    </div>
                    <JobsTable data={data['jobs']}/>
                </div>
            </div>
            <Footer />
        </AuthenticatedLayout>
    )
}