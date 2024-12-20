import AuthenticatedNavbar from '@/Components/AuthenticatedNavbar';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Home({auth}) {

    return (
        <>
            <Head title="Home" />
            <div>
                <header>
                    <AuthenticatedNavbar/>
                </header>
                <main>
                    <div className='h-screen'>
                        <div className='relative w-full h-full'>
                            <div className='bg-black w-full h-full absolute opacity-50'></div>
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> 
                                <div className='text-center'>
                                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                                        Selamat Datang di <span className="text-tertiary">KerjainAja</span>
                                    </h1>
                                    <p className="mt-4 text-lg md:text-xl font-light text-white">
                                        Platform inklusif yang mempertemukan penyedia jasa dan pencari jasa, untuk <span className="font-semibold text-tertiary">semua orang</span>, tanpa terkecuali.
                                    </p>
                                    <div className='mt-10'>
                                        <Link href='/explore'>
                                            <button className='bg-quinary px-4 py-2 rounded-md mt-10 w-1/2 border border-transparent hover:border-white hover:bg-transparent hover:text-white transition-colors duration-200 font-bold tracking-wide'>MULAI SEKARANG !</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <img src="/images/home-hero.jpg" alt="people sitting discussing" className='object-cover w-full h-full'/>
                        </div>
                    </div>
                    <section className='py-16'>
                        <div className='max-w-6xl mx-auto px-4'>
                            <h2 className='text-3xl font-bold text-center text-gray-800'>Kenapa Memilih <span className="text-tertiary">KerjainAja</span>?</h2>
                            <p className='text-center text-gray-600 mt-4'>Kami menyediakan berbagai fitur yang dirancang untuk mendukung semua pengguna.</p>
                            <div className='grid md:grid-cols-3 gap-8 mt-10'>
                                <div className='bg-white shadow-md border p-6 rounded-lg text-center'>
                                    <i className='fa fa-wheelchair text-tertiary text-4xl'></i>
                                    <h3 className='text-lg font-semibold mt-4'>Inklusivitas</h3>
                                    <p className='text-gray-600 mt-2'>Dukungan untuk semua orang, termasuk mereka dengan kebutuhan khusus.</p>
                                </div>
                                <div className='bg-white shadow-md border p-6 rounded-lg text-center'>
                                    <i className='fa fa-shield text-tertiary text-4xl'></i>
                                    <h3 className='text-lg font-semibold mt-4'>Keamanan</h3>
                                    <p className='text-gray-600 mt-2'>Proses komunikasi yang aman dan terlindungi.</p>
                                </div>
                                <div className='bg-white shadow-md border p-6 rounded-lg text-center'>
                                    <i className='fa fa-users text-tertiary text-4xl'></i>
                                    <h3 className='text-lg font-semibold mt-4'>Komunitas</h3>
                                    <p className='text-gray-600 mt-2'>Bergabung dengan komunitas yang saling mendukung.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='py-16 bg-secondary text-white'>
                        <div className='max-w-6xl mx-auto px-4 text-center'>
                            <h2 className='text-3xl font-bold'>Bergabunglah Sekarang</h2>
                            <p className='mt-4'>Jadilah bagian dari platform inklusif kami dan temukan peluang yang sesuai untuk Anda!</p>
                            <Link href='/register'>
                                <button className='bg-white text-secondary px-6 py-2 mt-6 rounded-md hover:bg-gray-200 transition duration-200 font-bold'>Daftar Sekarang</button>
                            </Link>
                        </div>
                    </section>
                </main>
                <Footer/>
            </div>
        </>
    );
}
