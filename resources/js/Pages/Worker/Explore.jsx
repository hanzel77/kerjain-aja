import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import JobCard from '@/Components/JobCard';

export default function Explore(data) {
    return (
        <AuthenticatedLayout>
            <Head title="Explore" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg py-1 border border-gray-200">
                        <input className='w-full border-none focus:ring-0' placeholder='Cari Pekerjaan..'/>
                    </div>
                </div>
            </div>

            <div className='flex'>
                <div className='w-1/4 px-6'>
                    <div className='border p-4 rounded-lg shadow bg-white sticky top-3'>
                        <h3 className='text-lg font-semibold mb-4 text-primary'>Filters</h3>

                        <div className='mb-4'>
                            <label className='block text-sm font-medium mb-2 text-primary' htmlFor='location'>
                                Location
                            </label>
                            <select
                                id='location'
                                className='w-full border rounded-md p-2 text-primary focus:ring focus:ring-primary'
                            >
                                <option value=''>All Locations</option>
                                <option value='medan'>Medan</option>
                                <option value='jakarta'>Jakarta</option>
                                <option value='surabaya'>Surabaya</option>
                            </select>
                        </div>

                        <div className='mb-4'>
                            <label className='block text-sm font-medium mb-2 text-primary' htmlFor='salary'>
                                Salary Range
                            </label>
                            <input
                                type='range'
                                id='salary'
                                min='500000'
                                max='5000000'
                                step='500000'
                                className='w-full text-primary accent-primary'
                            />
                            <div className='text-xs text-gray-500 mt-2'>
                                500,000 - 5,000,000
                            </div>
                        </div>

                        <div className='mb-4'>
                            <label className='block text-sm font-medium mb-2 text-primary' htmlFor='date-posted'>
                                Date Posted
                            </label>
                            <select
                                id='date-posted'
                                className='w-full border rounded-md p-2 text-primary focus:ring focus:ring-primary'
                            >
                                <option value=''>Any Time</option>
                                <option value='24hours'>Last 24 Hours</option>
                                <option value='week'>Last 7 Days</option>
                                <option value='month'>Last 30 Days</option>
                            </select>
                        </div>

                        <div className='flex items-center mb-4'>
                            <input
                                type='checkbox'
                                id='accessible'
                                className='w-4 h-4 mr-2 border-primary text-primary rounded focus:ring focus:ring-primary'
                            />
                            <label htmlFor='accessible' className='text-sm text-primary'>
                                Accessible Jobs Only
                            </label>
                        </div>

                    </div>
                </div>


                <div className='w-3/4 grid grid-cols-3 gap-8 px-6'>
                    {
                        data['jobs'].length != 0 ? 
                        
                        data['jobs'].map((job) => (
                            <Link href={`/job-detail/${job.id}`} key={job.id}>
                                <JobCard job={job} />
                            </Link>
                        )) : <div>Sedang tidak ada pekerjaan yang tersedia</div>
                    }
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
