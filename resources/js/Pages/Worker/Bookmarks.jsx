import JobCard from "@/Components/JobCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Bookmarks(){
    return(
        <AuthenticatedLayout>
            <Head title="Bookmarks"/>
            <div className="grid grid-cols-4 p-10 gap-8">
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
        </AuthenticatedLayout>
    )
}