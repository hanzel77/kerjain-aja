import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import ApplicationLogoClient from '@/Components/ApplicationLogoClient';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedNavbar({client}) {

    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    if(user != null){
        return(
            <nav className="border-b border-gray-100 bg-white z-50">
                <div className="mx-auto max-w-7xl px-3 sm:px-0">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                {client ? (
                                    <Link href="/client">
                                        <ApplicationLogoClient className="block h-9 w-auto fill-current text-gray-800 rounded" />
                                    </Link>
                                ): (
                                    <Link href="/">
                                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                    </Link>
                                )}
                                
                            </div>
    
                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                {client ? (
                                    <>
                                        <NavLink
                                            href={route('client-dashboard')}
                                            active={route().current('client-dashboard')}
                                        >
                                            Dashboard
                                        </NavLink>
                                        <NavLink
                                            href={route('client-jobs')}
                                            active={route().current('client-jobs')}
                                        >
                                            Jobs
                                        </NavLink>
                                    </>
                                ):(
                                <>
                                    <NavLink
                                        href={route('explore')}
                                        active={route().current('explore')}
                                    >
                                        Explore
                                    </NavLink>
                                    <NavLink
                                        href={route('applications')}
                                        active={route().current('applications')}
                                    >
                                        Applications
                                    </NavLink>
                                </>
                                
                                )}
                                
                            </div>
                        </div>
    
                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            {client ? (<div>
                                <Link className="inline-flex items-center rounded-md border border-primary bg-primary px-3 py-2 text-sm font-medium leading-4 hover:text-gray-500 transition duration-150 ease-in-out text-white focus:outline-none hover:bg-white" href='/jobs/create'>
                                    <i className='fa fa-plus' />
                                    &nbsp; New Job
                                </Link>
                            </div>) : (<div></div>)}
                            
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <img
                                                src={user.profile_picture ? `/storage/${user.profile_picture}` : '/images/default-pp.png'}
                                                alt="Profile"
                                                className="h-8 w-8 rounded-full object-cover border border-gray-300"
                                            />
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                            >
                                                {user.name}
    
                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>
    
                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
    
                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState,
                                    )
                                }
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
    
                <div
                    className={
                        (showingNavigationDropdown ? 'block' : 'hidden') +
                        ' sm:hidden'
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        {client ? (
                            <>
                                <ResponsiveNavLink
                                    href={route('client-dashboard')}
                                    active={route().current('client-dashboard')}
                                >
                                    Dashboard
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    href={route('client-jobs')}
                                    active={route().current('client-jobs')}
                                >
                                    Jobs
                                </ResponsiveNavLink>
                            </>
                        ) : (
                            <>
                                <ResponsiveNavLink
                                    href={route('explore')}
                                    active={route().current('explore')}
                                >
                                    Explore
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    href={route('applications')}
                                    active={route().current('applications')}
                                >
                                    Applications
                                </ResponsiveNavLink>
                            </>

                        )}
                    </div>
    
                    <div className="border-t border-gray-200 pb-1 pt-4">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.email}
                            </div>
                        </div>
    
                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }else{
        return(
            <nav className="border-b border-gray-100 bg-white">
                <div className="mx-auto max-w-7xl px-3 xl:px-0">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                {client ? (
                                    <Link href="/client">
                                        <ApplicationLogoClient className="block h-9 w-auto fill-current text-gray-800 rounded" />
                                    </Link>
                                ) : (
                                    <Link href="/">
                                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                    </Link>
                                )}
                            </div>
                        </div>
    
                        <div className="flex items-center">
                            <div className="relative ms-3 ">
                                
                                {client ? (
                                    <Link href={route('client-register')} className='text-gray-600 hover:text-gray-900 transition-colors'>
                                        Register
                                    </Link>
                                ) : (
                                    <Link href={route('login')} className='text-gray-600 hover:text-gray-900 transition-colors'>
                                        Log In
                                    </Link>
                                )}
                                {client ? (
                                    <Link className='ms-4' href="/">
                                        <button className='border-2  border-primary px-2 py-1 bg-primary text-white hover:bg-white hover:text-black transition-colors rounded'> Penyedia Jasa?</button>
                                    </Link>
                                ) : (
                                    <Link className='ms-4' href={route('client-home')}>
                                        <button className='border-2  border-primary px-2 py-1 bg-primary text-white hover:bg-white hover:text-black transition-colors rounded'> Pencari Jasa?</button>
                                    </Link>
                                )}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
    
}