import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react"
export default function ClientJobsDetail() {
    const jobDetails = {
        id: 1,
        name: "Frontend Developer",
        location: "Jakarta, Indonesia",
        salary: 15000000,
        type: "full-time",
        description: "Looking for a passionate frontend developer with experience in React.",
        accessibility: ["Remote Work", "Wheelchair Accessible"],
        status: "open",
        created_at: "2024-12-01",
    };

    const applicants = [
        {
            id: 1,
            name: "Alice Smith",
            status: "applied",
            cv_path: "/cv/alice-smith.pdf",
            resume_path: "/resume/alice-smith.pdf",
        },
        {
            id: 2,
            name: "Bob Johnson",
            status: "interviewed",
            cv_path: "/cv/bob-johnson.pdf",
            resume_path: "/resume/bob-johnson.pdf",
        },
        {
            id: 3,
            name: "Charlie Brown",
            status: "hired",
            cv_path: "/cv/charlie-brown.pdf",
            resume_path: "/resume/charlie-brown.pdf",
        },
    ];

    return (
        <AuthenticatedLayout client={true}>
            <Head title="Job Detail" />
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Job Details</h1>
                    <div className="mb-6">
                        <p><strong>Name:</strong> {jobDetails.name}</p>
                        <p><strong>Location:</strong> {jobDetails.location}</p>
                        <p><strong>Salary:</strong> Rp {jobDetails.salary.toLocaleString()}</p>
                        <p><strong>Type:</strong> {jobDetails.type}</p>
                        <p><strong>Description:</strong> {jobDetails.description}</p>
                        <p>
                            <strong>Accessibility:</strong>{" "}
                            {jobDetails.accessibility ? jobDetails.accessibility.join(", ") : "None"}
                        </p>
                        <p><strong>Status:</strong> {jobDetails.status.charAt(0).toUpperCase() + jobDetails.status.slice(1)}</p>
                        <p>
                            <strong>Posted Date:</strong> {new Date(jobDetails.created_at).toLocaleDateString("id-ID")}
                        </p>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Applicants</h2>
                    <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                        <table className="w-full text-left table-auto min-w-max">
                            <thead className="bg-primary text-white">
                                <tr>
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
                                </tr>
                            </thead>
                            <tbody>
                                {applicants.map((applicant) => (
                                    <tr key={applicant.id} className="hover:bg-slate-50 border-b border-slate-200">
                                        <td className="p-4">{applicant.name}</td>
                                        <td className="p-4">
                                            {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
                                        </td>
                                        <td className="p-4">
                                            <a
                                                href={applicant.cv_path}
                                                className="text-blue-500 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                View CV
                                            </a>
                                        </td>
                                        <td className="p-4">
                                            <a
                                                href={applicant.resume_path}
                                                className="text-blue-500 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                View Resume
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
