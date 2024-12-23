import AccessabilityIcon from './AccessabilityIcon';

export default function JobCard(job) {

    function calculateDays(date){
        const givenDate = new Date(date);
        const currentDate = new Date();

        const timeDifference = currentDate - givenDate;
        const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if(daysAgo === 0) return 'Today';
        if(daysAgo === 1) return 'Yesterday';
        
        return daysAgo + ' days ago';
    }

    return (
        <div className='w-full bg-white mx-auto p-6 rounded-md hover:shadow-md transition-shadow border border-gray-200'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <img src={job['job']['user'].profile_picture ? `/storage/${job['job']['user'].profile_picture}` : '/images/default-pp.png'} alt="logo perusahaan" className='w-16 h-16 flex-shrink-0' />
                    <div className='ps-4'>
                        <h1 className='text-2xl font-semibold truncate'>{job['job'].name.charAt(0).toUpperCase() + job['job'].name.slice(1)}</h1>
                        <h2 className='text-sm mt-2 text-black'>{job['job']['user'].name.charAt(0).toUpperCase() + job['job']['user'].name.slice(1)}</h2>
                    </div>
                </div>
            </div>

            <div className='mt-6 flex flex-col'>
                <div>
                    <ul>
                        <li>
                            <i className='fa fa-location-dot'></i>
                            <span className='ps-2'>{job['job'].location}</span>
                        </li>
                        <li className='mt-1.5'>
                            <i className='fa fa-dollar-sign'></i>
                            <span className='ps-2'>{job['job'].salary}</span>
                        </li>
                    </ul>
                </div>

                <div className='mt-4'>
                    <p className="text-sm text-gray-600 truncate">
                        {job['job'].description}
                    </p>
                </div>

                <div className='mt-6'>
                    <ul className='list-none pl-0 flex justify-end'>
                        {Object.entries(JSON.parse(job['job'].accessibility)).map(([category, disabilities], index) => (
                            <AccessabilityIcon
                                key={index}
                                category={category}
                            />
                        ))}
                    </ul>
                </div>

                <div className='flex justify-end mt-4 text-gray-600 text-xs'>
                    Posted: {calculateDays(job['job'].created_at)}
                </div>
            </div>
        </div>
    );
}
