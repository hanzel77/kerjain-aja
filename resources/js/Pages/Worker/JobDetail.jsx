import AccessabilityIcon from "@/Components/AccessabilityIcon";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function JobDetail(data) {

    function calculateDays(date) {
        const givenDate = new Date(date);
        const currentDate = new Date();

        const timeDifference = currentDate - givenDate;
        const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysAgo === 0) return 'Today';
        if (daysAgo === 1) return 'Yesterday';

        return daysAgo + ' days ago';
    }

    return (
        <AuthenticatedLayout>
            <Head title="Job Detail"/>
            <div className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-9 border mb-10'>
                <div className='flex items-center mb-6'>
                    <img
                        src='/images/logo-client.png'
                        alt='Company Logo'
                        className='w-50 h-20 object-cover mr-4'
                    />
                    <div>
                        <h1 className='text-2xl font-semibold text-primary'>{data['data'].name.charAt(0).toUpperCase() + data['data'].name.slice(1)}</h1>
                        <p className='text-gray-500'>{data['data']['user'].name.charAt(0).toUpperCase() + data['data']['user'].name.slice(1)}</p>
                    </div>
                </div>

                <div className='mb-6'>
                    <h2 className='text-lg font-semibold text-primary'>Job Details</h2>
                    <ul className='list-disc list-inside text-gray-700 mt-2'>
                        <li><strong>Location:</strong> {data['data'].location}</li>
                        <li><strong>Salary:</strong> {data['data'].salary}</li>
                        <li><strong>Job Type:</strong> {data['data'].type.charAt(0).toUpperCase() + data['data'].type.slice(1)}</li>
                        <li><strong>Date Posted:</strong> {calculateDays(data['data'].created_at)}</li>
                    </ul>
                </div>

                <div className='mb-6'>
                    <h2 className='text-lg font-semibold text-primary'>Job Description</h2>
                    <p className='text-gray-700 mt-2'>
                        {data['data'].description}
                    </p>
                </div>

                <div className='mb-6'>
                    <h2 className='text-lg font-semibold text-primary'>Accessibility</h2>
                    <ul className='list-none flex gap-4 mt-2'>
                        {
                            Object.entries(JSON.parse(data['data'].accessibility)).map(([category, disabilities], index) => {
                                return (
                                    <li key={index} className='flex flex-col items-center'>
                                        <AccessabilityIcon category={category} />

                                        <h4 className="mt-2 text-sm font-semibold text-gray-700">{category.replace(/_/g, ' ')}</h4>

                                        <div className='text-xs text-gray-500'>
                                            {disabilities.map((disability, idx) => (
                                                <p key={idx} className='mt-1'>{disability.replace(/_/g, ' ')}</p>
                                            ))}
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>

                </div>

                <div className='flex justify-end'>
                    <button className='px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark' onClick={()=>(window.location.href='/worker/apply/'+data['data'].id)}>
                        Apply Now
                    </button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
