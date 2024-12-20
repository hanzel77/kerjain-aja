export default function JobsTable(){
    return(
        <div>
            <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table class="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th class="p-4 border-b border-slate-200 bg-primary">
                                <p class="text-sm font-normal leading-none text-white">
                                    Jobs
                                </p>
                            </th>
                            <th class="p-4 border-b border-slate-200 bg-primary">
                                <p class="text-sm font-normal leading-none text-white">
                                    No. of Applicants
                                </p>
                            </th>

                            <th class="p-4 border-b border-slate-200 bg-primary">
                                <p class="text-sm font-normal leading-none text-white">
                                    Status
                                </p>
                            </th>
                            <th class="p-4 border-b border-slate-200 bg-primary">
                                <p class="text-sm font-normal leading-none text-white">
                                    Posted Date
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-slate-50 border-b border-slate-200">
                            <td class="p-4 py-5">
                                <p class="block font-semibold text-sm text-slate-800">PROJ1001</p>
                            </td>
                            <td class="p-4 py-5">
                                <p class="text-sm text-slate-500">John Doe</p>
                            </td>

                            <td class="p-4 py-5">
                                <p class="text-sm text-slate-500">Completed</p>
                            </td>
                            <td class="p-4 py-5">
                                <p class="text-sm text-slate-500">2024-08-15</p>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50 border-b border-slate-200">
                            <td class="p-4 py-5">
                                <p class="block font-semibold text-sm text-slate-800">PROJ1002</p>
                            </td>
                            <td class="p-4 py-5">
                                <p class="text-sm text-slate-500">Jane Smith</p>
                            </td>

                            <td class="p-4 py-5">
                                <p class="text-sm text-slate-500">Open</p>
                            </td>
                            <td class="p-4 py-5">
                                <p class="text-sm text-slate-500">2024-08-20</p>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50 border-b border-slate-200">
                            <td class="p-4 py-5">
                                <p class="block font-semibold text-sm text-slate-800">PROJ1003</p>
                            </td>
                            <td class="p-4 py-5">
                                <p class="text-sm text-slate-500">Acme Corp</p>
                            </td>

                            <td class="p-4 py-5">
                                <p class="text-sm text-slate-500">Open</p>
                            </td>
                            <td class="p-4 py-5">
                                <p class="text-sm text-slate-500">2024-08-21</p>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50 border-b border-slate-200">
                            <td class="p-4 py-5">
                                <p class="block font-semibold text-sm text-slate-800">PROJ1004</p>
                            </td>
                            <td class="p-4 py-5">
                                <p class="text-sm text-slate-500">Global Inc</p>
                            </td>

                            <td class="p-4 py-5">
                                <p class="text-sm text-slate-500">Completed</p>
                            </td>
                            <td class="p-4 py-5">
                                <p class="text-sm text-slate-500">2024-08-25</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="flex justify-between items-center px-4 py-3">
                    <div class="text-sm text-slate-500">
                        Showing <b>1-5</b> of 45
                    </div>
                    <div class="flex space-x-1">
                        <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-primary transition duration-200 ease">
                            Prev
                        </button>
                        <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-primary border border-slate-800 rounded hover:opacity-80 hover:border-slate-600 transition duration-200 ease">
                            1
                        </button>
                        <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-primary transition duration-200 ease">
                            2
                        </button>
                        <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-primary transition duration-200 ease">
                            3
                        </button>
                        <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-primary transition duration-200 ease">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}