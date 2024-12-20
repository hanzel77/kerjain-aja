import AuthenticatedNavbar from '@/Components/AuthenticatedNavbar';
import Footer from '@/Components/Footer';
import JobsTable from '@/Components/JobsTable';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function ClientDashboard(){
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
                                12
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-300 bg-white rounded-lg shadow-md p-6'>
                        <div className='text-center'>
                            <div className='text-lg font-semibold text-gray-500 mb-2'>
                                Jobs Completed
                            </div>
                            <div className='text-6xl font-bold'>
                                8
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-300 bg-white rounded-lg shadow-md p-6'>
                        <div className='text-center'>
                            <div className='text-lg font-semibold text-gray-500 mb-2'>
                                Active Jobs
                            </div>
                            <div className='text-6xl font-bold'>
                                4
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="w-full flex justify-between items-center mb-3 mt-1 pl-3">
                        <div>
                            <h3 class="text-lg font-semibold text-slate-800">List of Posted Jobs</h3>
                        </div>
                        <div class="ml-3">
                            <div class="w-full max-w-sm min-w-[200px] relative">
                                <div class="relative bg-white">
                                    <input
                                        class="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-primary hover:border-primary shadow-sm focus:shadow-md"
                                        placeholder="Search for Jobs..."
                                    />
                                    <button
                                        class="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded "
                                        type="button"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-8 h-8 text-slate-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <JobsTable/>
                </div>
            </div>
            <Footer />
        </AuthenticatedLayout>
    )
}