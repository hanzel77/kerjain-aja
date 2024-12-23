import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import JobCard from '@/Components/JobCard';
import { useState } from 'react';

export default function Explore({ jobs }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [salaryFilter, setSalaryFilter] = useState(1000000);
    const [datePostedFilter, setDatePostedFilter] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocationFilter(event.target.value);
    };

    const handleSalaryChange = (event) => {
        const value = event.target.value;
        setSalaryFilter(parseInt(value));
    };

    const handleDatePostedChange = (event) => {
        setDatePostedFilter(event.target.value);
    };

    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLocation = locationFilter ? job.location.toLowerCase() === locationFilter.toLowerCase() : true;
        const matchesSalary = job.salary >= salaryFilter;
        const matchesDatePosted = datePostedFilter ?
            (datePostedFilter === '24hours' && new Date(job.created_at) >= new Date(Date.now() - 24 * 60 * 60 * 1000)) ||
            (datePostedFilter === 'week' && new Date(job.created_at) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) ||
            (datePostedFilter === 'month' && new Date(job.created_at) >= new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)) :
            true;

        return matchesSearch && matchesLocation && matchesSalary && matchesDatePosted;
    });

    return (
        <AuthenticatedLayout>
            <Head title="Explore" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg py-1 border border-gray-200">
                        <input
                            className="w-full border-none focus:ring-0"
                            placeholder="Cari Pekerjaan..."
                            value={searchQuery}
                            onChange={handleSearch}
                            aria-label="Search Jobs"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/4 px-6">
                    <div className="border p-4 rounded-lg shadow bg-white sticky top-3">
                        <h3 className="text-lg font-semibold mb-4 text-primary">Filters</h3>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2 text-primary" htmlFor="location">
                                Location
                            </label>
                            <select
                                id="location"
                                className="w-full border rounded-md p-2 text-primary focus:ring focus:ring-primary"
                                value={locationFilter}
                                onChange={handleLocationChange}
                                aria-label="Filter by location"
                            >
                                <option value="">All Locations</option>
                                <option value="medan">Medan</option>
                                <option value="jakarta">Jakarta</option>
                                <option value="surabaya">Surabaya</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2 text-primary" htmlFor="salary">
                                Minimum Salary
                            </label>
                            <input
                                type="range"
                                id="salary"
                                min="1000000"
                                max="100000000"
                                step="500000"
                                value={salaryFilter}
                                className="w-full text-primary accent-primary"
                                onChange={handleSalaryChange}
                                aria-label="Filter by minimum salary"
                            />
                            <div className="text-xs text-gray-500 mt-2">
                                Rp {salaryFilter.toLocaleString()}+
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2 text-primary" htmlFor="date-posted">
                                Date Posted
                            </label>
                            <select
                                id="date-posted"
                                className="w-full border rounded-md p-2 text-primary focus:ring focus:ring-primary"
                                value={datePostedFilter}
                                onChange={handleDatePostedChange}
                                aria-label="Filter by date posted"
                            >
                                <option value="">Any Time</option>
                                <option value="24hours">Last 24 Hours</option>
                                <option value="week">Last 7 Days</option>
                                <option value="month">Last 30 Days</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 gap-8 px-6 mt-4 lg:mt-0">
                    {filteredJobs.length !== 0 ? (
                        filteredJobs.map((job) => (
                            <Link href={`/job-detail/${job.id}`} key={job.id}>
                                <JobCard job={job} />
                            </Link>
                        ))
                    ) : (
                        <div role="alert">Sedang tidak ada pekerjaan yang tersedia</div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
