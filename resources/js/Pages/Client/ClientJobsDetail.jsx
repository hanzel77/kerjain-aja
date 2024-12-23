import { router } from '@inertiajs/react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AccessabilityIcon from "@/Components/AccessabilityIcon";

export default function ClientJobsDetail(job) {
    function handleStatus(status, applicationId) {
        console.log('job id: ', job.job.id);
        console.log('application id: ', applicationId);
        const data = { 'status': status };

        router.put(`/client/jobs/${job.job.id}/applications/${applicationId}`, data);
    }

    function handleCloseJob(jobId) {
        const data = { 'status': 'closed' };
        router.put(`/client/jobs/${jobId}`, data);
    }

    return (
        <AuthenticatedLayout client={true}>
            <Head title="Job Detail" />
            <div className="p-6 min-h-screen">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 border">
                    <div className='flex justify-between'>
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Job Details</h1>
                        {
                            job.job.status === 'open' && (<button
                                className='border border-primary bg-primary text-white self-center p-2 rounded hover:text-primary hover:bg-white transition-all'
                                onClick={() => { handleCloseJob(job.job.id) }}
                                aria-label="Close Job"
                            >Close Job</button>)
                        }
                    </div>
                    <div className="mb-6">
                        <p className="mt-2"><strong>Name:</strong> {job['job'].name}</p>
                        <p className="mt-2"><strong>Location:</strong> {job['job'].location}</p>
                        <p className="mt-2"><strong>Salary:</strong> Rp {job['job'].salary.toLocaleString()}</p>
                        <p className="mt-2"><strong>Type:</strong> {job['job'].type}</p>
                        <p className="mt-2"><strong>Description:</strong> {job['job'].description}</p>
                        <div className="my-4">
                            <strong>Accessibility:</strong>
                            <ul className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4">
                                {
                                    Object.entries(JSON.parse(job['job'].accessibility)).map(([category, disabilities], index) => {
                                        return (
                                            <li key={index} className='flex flex-col items-center'>
                                                <AccessabilityIcon category={category} />
                                                <div className="mt-2 text-sm font-semibold text-gray-700">{category.replace(/_/g, ' ')}</div>
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
                        <p className="mt-2"><strong>Status:</strong> {job['job'].status.charAt(0).toUpperCase() + job['job'].status.slice(1)}</p>
                        <p className="mt-2">
                            <strong>Posted Date:</strong> {new Date(job['job'].created_at).toLocaleDateString("id-ID")}
                        </p>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Applicants</h2>
                    <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                        <table className="w-full text-left table-auto min-w-max">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th className="p-4 border-b border-slate-200">
                                        <p className="text-sm font-normal leading-none">Profile</p>
                                    </th>
                                    <th className="p-4 border-b border-slate-200">
                                        <p className="text-sm font-normal leading-none">Name</p>
                                    </th>
                                    <th className="p-4 border-b border-slate-200">
                                        <p className="text-sm font-normal leading-none">Status</p>
                                    </th>
                                    <th className="p-4 border-b border-slate-200">
                                        <p className="text-sm font-normal leading-none">CV</p>
                                    </th>
                                    <th className="p-4 border-b border-slate-200">
                                        <p className="text-sm font-normal leading-none">Resume</p>
                                    </th>
                                    <th className="p-4 border-b border-slate-200">
                                        <p className="text-sm font-normal leading-none">Details</p>
                                    </th>
                                    <th className="p-4 border-b border-slate-200">
                                        <p className="text-sm font-normal leading-none">Action</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    job.job.applications.length === 0 ? (
                                        <tr className='text-center'>
                                            <td colSpan={7} className='p-3'>
                                                No Applicants Found
                                            </td>
                                        </tr>
                                    ) : (
                                        job.job.applications.map((application) => (
                                            <tr key={application.id} className="hover:bg-slate-50 border-b border-slate-200">
                                                <td className="p-4"><img
                                                    src={application.user.profile_picture ? `/storage/${application.user.profile_picture}` : '/images/default-pp.png'}
                                                    alt="application picture"
                                                    className="w-10 h-10 "
                                                    aria-label={`${application.user.name} profile picture`}
                                                /></td>
                                                <td className="p-4">{application.user.name}</td>
                                                <td className="p-4">
                                                    {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                                                </td>
                                                <td className="p-4">
                                                    <a
                                                        href={'/storage/' + application.cv_path}
                                                        className="text-primary hover:opacity-80"
                                                        download
                                                        aria-label={`Download CV of ${application.user.name}`}
                                                    >
                                                        Download CV
                                                    </a>
                                                </td>
                                                <td className="p-4">
                                                    <a
                                                        href={'/storage/' + application.resume_path}
                                                        className="text-primary hover:opacity-80"
                                                        download
                                                        aria-label={`Download Resume of ${application.user.name}`}
                                                    >
                                                        Download Resume
                                                    </a>
                                                </td>
                                                <td className="p-4">
                                                    {application.description}
                                                </td>
                                                <td className="p-4">
                                                    {application.status === 'applied' && (
                                                        <>
                                                            <button
                                                                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-white hover:text-primary transition-all border border-primary"
                                                                onClick={() => handleStatus('interviewed', application.id)}
                                                                aria-label={`Send interview to ${application.user.name}`}
                                                            >
                                                                Send Interview
                                                            </button>
                                                            <button
                                                                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-white border-red-600 ml-2 transition-all border hover:text-red-600"
                                                                onClick={() => handleStatus('rejected', application.id)}
                                                                aria-label={`Reject application of ${application.user.name}`}
                                                            >
                                                                Reject
                                                            </button>
                                                        </>
                                                    )}
                                                    {application.status === 'interviewed' && (
                                                        <>
                                                            <button
                                                                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                                                                onClick={() => handleStatus('hired', application.id)}
                                                                aria-label={`Accept application of ${application.user.name}`}
                                                            >
                                                                Accept
                                                            </button>
                                                            <button
                                                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 ml-2"
                                                                onClick={() => handleStatus('rejected', application.id)}
                                                                aria-label={`Reject application of ${application.user.name}`}
                                                            >
                                                                Reject
                                                            </button>
                                                        </>
                                                    )}
                                                    {
                                                        application.status === 'hired' && (
                                                            <div className="bg-tertiary py-2 text-white rounded px-4 text-center" aria-label={`Application of ${application.user.name} is hired`}>
                                                                Hired
                                                            </div>
                                                        )
                                                    }
                                                    {
                                                        application.status === 'rejected' && (
                                                            <div className="bg-red-500 w-full py-2 text-white rounded px-4 text-center" aria-label={`Application of ${application.user.name} is rejected`}>
                                                                Rejected
                                                            </div>
                                                        )
                                                    }
                                                </td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
