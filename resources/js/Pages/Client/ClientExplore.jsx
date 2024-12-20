import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import JobCard from '@/Components/JobCard';
import TalentCard from '@/Components/TalentCard';
import Footer from '@/Components/Footer';

export default function ClientExplore() {
    return (
        <AuthenticatedLayout client={true}>
            <Head title="Client Explore" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg py-1 border">
                        <input className='w-full border-none focus:ring-0' placeholder='Find Skills from Our Talent Pool...' />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-8 px-6 mb-10'>
                <TalentCard />
                <TalentCard />
                <TalentCard />
                <TalentCard />
                <TalentCard />
                <TalentCard />
                <TalentCard />              
            </div>
            <Footer/>
        </AuthenticatedLayout>
    );
}
