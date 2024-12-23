import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Applications(applications){

    function formatDate(date){
        return new Date(date).toLocaleDateString('id-ID', {
            day: 'numeric', month: 'short', year: 'numeric'
        });
    }

    return(
        <AuthenticatedLayout>
            <Head title="Applications"/>
            <div className="bg-white mx-24 mt-10 p-4 rounded">
                <div className="w-full flex justify-between items-center mb-3 mt-1 pl-3">
                    <div>
                        <h3 className="text-lg font-semibold text-slate-800">List of Applications</h3>
                    </div>
                </div>

                <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                    <table className="w-full text-left table-auto min-w-max" role="table" aria-label="List of job applications">
                        <thead>
                            <tr className="border-b border-slate-300 bg-primary">
                                <th className="p-4 text-sm font-normal leading-none text-white">Client</th>
                                <th className="p-4 text-sm font-normal leading-none text-white">Client Name</th>
                                <th className="p-4 text-sm font-normal leading-none text-white">Job Name</th>
                                <th className="p-4 text-sm font-normal leading-none text-white">Date Applied</th>
                                <th className="p-4 text-sm font-normal leading-none text-white">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                applications['applications'].length != 0 ? 
                                applications['applications'].map((application, index) => {
                                    return(
                                        <tr className="hover:bg-slate-50" key={index}>
                                            <td className="p-4 border-b border-slate-200 py-5">
                                                <img src={application['job_vacancy']['user'].profile_picture ? `/storage/${application['job_vacancy']['user'].profile_picture}` : '/images/default-pp.png'} alt="Client logo" className="w-24 h-16 object-stretch rounded" role="img" aria-label="client profile picture" />
                                            </td>
                                            <td className="p-4 border-b border-slate-200 py-5">
                                                <p className="block font-semibold text-sm text-slate-800">{application['job_vacancy']['user'].name}</p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200 py-5">
                                                <p className="block font-semibold text-sm text-slate-800">{application['job_vacancy'].name}</p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200 py-5">
                                                <p className="text-sm text-slate-500">{formatDate(application['created_at'])}</p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200 py-5">
                                                <p
                                                    className={`text-sm font-normal p-4 min-w-max 
                                                        ${application.status === 'interviewed' ? 'text-white bg-yellow-500 rounded w-1/2 text-center' :
                                                        application.status === 'applied' ? 'bg-orange-500 text-white rounded w-1/2 text-center' :
                                                        application.status === 'hired' ? 'bg-green-500 text-white rounded w-1/2 text-center' :
                                                        application.status === 'rejected' ? 'bg-red-500 text-white rounded w-1/2 text-center ' :
                                                    'text-slate-500'}`} aria-label={`Status: ${application.status}`}>
                                                    {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                                                </p>
                                            </td>
                                        </tr>
                                    )
                                })
                                : <tr>
                                    <td colSpan="4" className="text-center p-4">No applications found</td>
                                </tr>
                            }
                    
                        </tbody>
                    </table>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}