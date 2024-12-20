import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Applications(){
    return(
        <AuthenticatedLayout>
            <Head title="Applications"/>
            <div className="bg-white mx-24 mt-10 p-4 rounded">
                <div class="w-full flex justify-between items-center mb-3 mt-1 pl-3">
                    <div>
                        <h3 class="text-lg font-semibold text-slate-800">List of Applications</h3>
                    </div>
                    <div class="mx-3">
                        <div class="w-full max-w-sm min-w-[200px] relative">
                            <div class="relative">
                                <input
                                    class="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                                    placeholder="Search for application..."
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

                <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                    <table class="w-full text-left table-auto min-w-max">
                        <thead>
                            <tr class="border-b border-slate-300 bg-primary">
                                <th class="p-4 text-sm font-normal leading-none text-white">Client</th>
                                <th class="p-4 text-sm font-normal leading-none text-white">Name</th>
                                <th class="p-4 text-sm font-normal leading-none text-white">Date Applied</th>
                                <th class="p-4 text-sm font-normal leading-none text-white">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="hover:bg-slate-50">
                                <td class="p-4 border-b border-slate-200 py-5">
                                    <img src="/images/logo.png" alt="Product 1" class="w-24 h-16 object-stretch rounded" />
                                </td>
                                <td class="p-4 border-b border-slate-200 py-5">
                                    <p class="block font-semibold text-sm text-slate-800">KerjainAja</p>
                                </td>
                                <td class="p-4 border-b border-slate-200 py-5">
                                    <p class="text-sm text-slate-500">24 October 2024</p>
                                </td>
                                <td class="p-4 border-b border-slate-200 py-5">
                                    <p class="text-sm text-slate-500">Completed</p>
                                </td>
                            </tr>
                    
                        </tbody>
                    </table>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}