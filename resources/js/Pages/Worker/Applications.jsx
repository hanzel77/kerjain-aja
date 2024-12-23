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
                    <div className="mx-3">
                        <div className="w-full max-w-sm min-w-[200px] relative">
                            <div className="relative">
                                <input
                                    className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                                    placeholder="Search for application..."
                                />
                                <button
                                    className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded "
                                    type="button"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-8 h-8 text-slate-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                    <table className="w-full text-left table-auto min-w-max">
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
                                                <img src={application['job_vacancy']['user'].profile_picture ? `/storage/${application['job_vacancy']['user'].profile_picture}` : '/images/default-pp.png'} alt="Client logo" className="w-24 h-16 object-stretch rounded" />
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
                                                <p className="text-sm text-slate-500">{application.status.charAt(0).toUpperCase() + application.status.slice(1)}</p>
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