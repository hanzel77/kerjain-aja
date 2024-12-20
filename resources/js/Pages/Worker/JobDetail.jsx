import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function JobDetail() {
    return (
        <AuthenticatedLayout>
            <Head title="Job Detail"/>
            <div className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-9'>
                <div className='flex items-center mb-6'>
                    <img
                        src='/images/logo-client.png'
                        alt='Company Logo'
                        className='w-50 h-20 object-cover mr-4'
                    />
                    <div>
                        <h1 className='text-2xl font-semibold text-primary'>Pembersih Rumah</h1>
                        <p className='text-gray-500'>KerjainAja</p>
                    </div>
                </div>

                <div className='mb-6'>
                    <h2 className='text-lg font-semibold text-primary'>Job Details</h2>
                    <ul className='list-disc list-inside text-gray-700 mt-2'>
                        <li><strong>Location:</strong> Medan, Sumatera Utara</li>
                        <li><strong>Salary:</strong> 800,000</li>
                        <li><strong>Job Type:</strong> Full-Time</li>
                        <li><strong>Date Posted:</strong> 3 days ago</li>
                    </ul>
                </div>

                <div className='mb-6'>
                    <h2 className='text-lg font-semibold text-primary'>Job Description</h2>
                    <p className='text-gray-700 mt-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius nibh vel magna aliquet, a
                        facilisis arcu pellentesque. Suspendisse potenti. Curabitur consectetur sapien a ligula volutpat
                        bibendum.
                    </p>
                </div>

                <div className='mb-6'>
                    <h2 className='text-lg font-semibold text-primary'>Accessibility</h2>
                    <ul className='list-none flex gap-4 mt-2'>
                        <li className='flex items-center'>
                            <i className='fa fa-wheelchair text-blue-500 text-lg mr-2'></i>
                            <span>Cognitive Disabilities</span>
                        </li>
                        <li className='flex items-center'>
                            <i className='fa fa-eye text-red-500 text-lg mr-2'></i>
                            <span>Visual Impairments</span>
                        </li>
                    </ul>
                </div>

                <div className='flex justify-end'>
                    <button className='px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark'>
                        Apply Now
                    </button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
