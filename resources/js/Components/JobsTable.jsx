import { router } from '@inertiajs/react'
import { useState } from "react";

export default function JobsTable({ data }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data.length);
    const currentData = data.slice(startIndex, endIndex);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div>
            <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-slate-200 bg-primary">
                                <p className="text-sm font-normal leading-none text-white">Jobs</p>
                            </th>
                            <th className="p-4 border-b border-slate-200 bg-primary">
                                <p className="text-sm font-normal leading-none text-white">
                                    No. of Applicants
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-200 bg-primary">
                                <p className="text-sm font-normal leading-none text-white">Status</p>
                            </th>
                            <th className="p-4 border-b border-slate-200 bg-primary">
                                <p className="text-sm font-normal leading-none text-white">Posted Date</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((job, index) => {
                            const formattedDate = new Date(job.created_at).toLocaleDateString("id-ID", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            });

                            return (
                                <tr className="hover:bg-slate-50 border-b border-slate-200" onClick={() => { router.visit(`/client/jobs/${job.id}`) }}>
                                    <td className="p-4 py-5">
                                        <p className="block font-semibold text-sm text-slate-800">
                                            {startIndex + index + 1}
                                        </p>
                                    </td>
                                    <td className="p-4 py-5">
                                        <p className="text-sm text-slate-500">
                                            {job.name.charAt(0).toUpperCase() + job.name.slice(1)}
                                        </p>
                                    </td>
                                    <td className="p-4 py-5">
                                        <p className="text-sm text-slate-500">
                                            {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                                        </p>
                                    </td>
                                    <td className="p-4 py-5">
                                        <p className="text-sm text-slate-500">{formattedDate}</p>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <div className="flex justify-between items-center px-4 py-3">
                    <div className="text-sm text-slate-500">
                        Showing <b>{startIndex + 1}</b> to <b>{endIndex}</b> of <b>{data.length}</b>
                    </div>
                    <div className="flex space-x-1">
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            className={`px-3 py-1 min-w-9 min-h-9 text-sm font-normal ${currentPage === 1 ? "text-gray-400" : "text-slate-500"
                                } bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-primary transition duration-200 ease`}
                            disabled={currentPage === 1}
                        >
                            Prev
                        </button>
                        {Array.from({ length: totalPages }).map((_, page) => (
                            <button
                                key={page}
                                onClick={() => goToPage(page + 1)}
                                className={`px-3 py-1 min-w-9 min-h-9 text-sm font-normal ${currentPage === page + 1
                                        ? "text-white bg-primary border-slate-800"
                                        : "text-slate-500 bg-white border border-slate-200"
                                    } rounded hover:opacity-80 hover:border-slate-600 transition duration-200 ease`}
                            >
                                {page + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            className={`px-3 py-1 min-w-9 min-h-9 text-sm font-normal ${currentPage === totalPages ? "text-gray-400" : "text-slate-500"
                                } bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-primary transition duration-200 ease`}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
