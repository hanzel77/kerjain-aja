import AuthenticatedNavbar from '@/Components/AuthenticatedNavbar';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function ClientHome({ auth }) {

    return (
        <>
            <Head title="Client Home" />
            <div>
                <header>
                    <AuthenticatedNavbar client={true} />
                </header>
                <main>
                    <div className='h-screen'>
                        <div className='relative w-full h-3/4'>
                            <div className='bg-black w-full h-full absolute opacity-50'></div>
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                <div className='text-center'>
                                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                                        Selamat Datang di <span className="text-tertiary">KerjainAja</span>
                                    </h1>
                                    <p className="mt-4 text-lg md:text-xl font-light text-white">
                                        Platform inklusif yang mempertemukan penyedia jasa dan pencari jasa, untuk <span className="font-semibold text-tertiary">semua orang</span>, tanpa terkecuali.
                                    </p>
                                    <div>
                                        <Link href='/explore'>
                                            <button className='bg-quinary px-4 py-2 rounded-md mt-10 w-1/2 border border-transparent hover:border-white hover:bg-transparent hover:text-white transition-colors duration-200 font-bold tracking-wide'>MULAI SEKARANG !</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <img src="/images/home-hero.jpg" alt="people sitting discussing" className='object-cover w-full h-full' />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
