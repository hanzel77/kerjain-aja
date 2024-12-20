import { useState } from 'react';

export default function JobCard() {

    return (
        <div className='w-full bg-white mx-auto p-6 rounded-md hover:shadow-md transition-shadow border border-gray-200'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <img src="/images/logo.png" alt="logo perusahaan" className='w-[40%] flex-shrink-0' />
                    <div className='ps-4'>
                        <h1 className='text-2xl font-semibold'>Pembersih Rumah</h1>
                        <a href="/">
                            <h2 className='text-sm mt-2 text-blue-700'>KerjainAja</h2>
                        </a>
                    </div>
                </div>
            </div>

            <div className='mt-6 flex flex-col'>
                <div>
                    <ul>
                        <li>
                            <i className='fa fa-location-dot'></i>
                            <span className='ps-2'>Medan, Sumatera Utara</span>
                        </li>
                        <li className='mt-1.5'>
                            <i className='fa fa-dollar-sign'></i>
                            <span className='ps-2'>800.000</span>
                        </li>
                    </ul>
                </div>

                <div className='mt-4'>
                    <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className='mt-6'>
                    <ul className='list-none pl-0 flex justify-end'>
                        <li className="flex items-center mt-3 mx-1.5 group relative">
                            <i className="fa fa-wheelchair text-blue-500 text-lg group-hover:opacity-50 transition-opacity duration-300"></i>
                            <span className="absolute top-full left-0 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded-md mt-1">
                                Cocok untuk orang dengan keterbatasan mobilitas
                            </span>
                        </li>
                        <li className="flex items-center mt-3 mx-1.5 group relative">
                            <i className="fa fa-ear-deaf text-green-500 text-lg group-hover:opacity-50 transition-opacity duration-300"></i>
                            <span className="absolute top-full left-0 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded-md mt-1">
                                Cocok untuk orang dengan gangguan pendengaran
                            </span>
                        </li>
                        <li className="flex items-center mt-3 mx-1.5 group relative">
                            <i className="fa fa-brain text-yellow-500 text-lg group-hover:opacity-50 transition-opacity duration-300"></i>
                            <span className="absolute top-full left-0 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded-md mt-1">
                                Cocok untuk orang dengan gangguan kognitif
                            </span>
                        </li>
                        <li className="flex items-center mt-3 mx-1.5 group relative">
                            <i className="fa fa-eye text-red-500 text-lg group-hover:opacity-50 transition-opacity duration-300"></i>
                            <span className="absolute top-full left-0 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded-md mt-1">
                                Cocok untuk orang dengan gangguan penglihatan
                            </span>
                        </li>
                    </ul>
                </div>

                <div className='flex justify-end mt-4 text-gray-600 text-xs'>
                    Last Updated: 3 days ago
                </div>
            </div>
        </div>
    );
}
