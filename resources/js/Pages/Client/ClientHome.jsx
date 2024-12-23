import AuthenticatedNavbar from '@/Components/AuthenticatedNavbar';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function ClientHome({ auth }) {

    return (
        <>
            <Head title="Client Home" />
            <div>
                <header role="banner">
                    <AuthenticatedNavbar client={true} />
                </header>
                <main>
                    <div className='h-screen' role="region" aria-label="Welcome Section">
                        <div className='relative w-full h-full'>
                            <div className='bg-black w-full h-full absolute opacity-50' aria-hidden="true"></div>
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                <div className='text-center'>
                                    <h1 className="text-4xl md:text-6xl font-bold text-white" aria-label="Welcome message">
                                        Selamat Datang di <span className="text-tertiary">KerjainAja Client</span>
                                    </h1>
                                    <p className="mt-4 text-lg md:text-xl font-light text-white" aria-describedby="description">
                                        Platform terbaik untuk menemukan <span className="font-semibold text-tertiary">talenta berbakat</span> sesuai kebutuhan Anda. Jelajahi kumpulan penyedia jasa yang siap membantu Anda menyelesaikan pekerjaan, dari skala kecil hingga besar.
                                    </p>
                                    <div className='mt-10'>
                                        <Link href='/client/dashboard'>
                                            <button
                                                className='bg-quinary px-4 py-2 rounded-md mt-10 w-1/2 border border-transparent hover:border-white hover:bg-transparent hover:text-white transition-colors duration-200 font-bold tracking-wide'
                                                aria-label="Start now button"
                                            >
                                                MULAI SEKARANG !
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <img
                                src="/images/home-hero-client.jpg"
                                alt="people sitting discussing"
                                className='object-cover w-full h-full'
                                role="img"
                                aria-label="People sitting and discussing"
                            />
                        </div>
                    </div>
                    <section className='py-16' role="region" aria-label="Why Choose KerjainAja">
                        <div className='max-w-6xl mx-auto px-4'>
                            <h2 className='text-3xl font-bold text-center text-gray-800' id="why-choose-header">
                                Kenapa Memilih <span className="text-tertiary">KerjainAja</span>?
                            </h2>
                            <p className='text-center text-gray-600 mt-4' aria-labelledby="why-choose-header">
                                Kami menyediakan solusi terbaik untuk mempermudah Anda menemukan tenaga kerja yang sesuai dengan kebutuhan Anda.
                            </p>
                            <div className='grid md:grid-cols-3 gap-8 mt-10'>
                                <div className='bg-white shadow-md border p-6 rounded-lg text-center' role="article" aria-label="Easy Search">
                                    <i className='fa fa-search text-tertiary text-4xl' aria-hidden="true"></i>
                                    <h3 className='text-lg font-semibold mt-4'>Pencarian Mudah</h3>
                                    <p className='text-gray-600 mt-2'>Cari tenaga kerja berdasarkan keterampilan, lokasi, atau kriteria lainnya dengan cepat dan mudah.</p>
                                </div>
                                <div className='bg-white shadow-md border p-6 rounded-lg text-center' role="article" aria-label="Trusted Workers">
                                    <i className='fa fa-check-circle text-tertiary text-4xl' aria-hidden="true"></i>
                                    <h3 className='text-lg font-semibold mt-4'>Tenaga Kerja Terpercaya</h3>
                                    <p className='text-gray-600 mt-2'>Semua penyedia jasa telah diverifikasi untuk memastikan kualitas dan keamanan layanan.</p>
                                </div>
                                <div className='bg-white shadow-md border p-6 rounded-lg text-center' role="article" aria-label="Time Efficiency">
                                    <i className='fa fa-clock text-tertiary text-4xl' aria-hidden="true"></i>
                                    <h3 className='text-lg font-semibold mt-4'>Efisiensi Waktu</h3>
                                    <p className='text-gray-600 mt-2'>Hemat waktu Anda dengan fitur pencocokan otomatis yang mempertemukan Anda dengan kandidat terbaik.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='py-16 bg-secondary text-white' role="region" aria-label="Post Job Section">
                        <div className='max-w-6xl mx-auto px-4 text-center'>
                            <h2 className='text-3xl font-bold' id="post-job-header">
                                Temukan Tenaga Kerja Terbaik Sekarang
                            </h2>
                            <p className='mt-4' aria-labelledby="post-job-header">
                                Posting lowongan kerja Anda hari ini dan dapatkan kandidat yang sesuai dengan kebutuhan Anda.
                            </p>
                            <Link href='/client/dashboard'>
                                <button
                                    className='bg-white text-secondary px-6 py-2 mt-6 rounded-md hover:bg-gray-200 transition duration-200 font-bold'
                                    aria-label="Post a job button"
                                >
                                    Posting Lowongan
                                </button>
                            </Link>
                        </div>
                    </section>

                </main>
                <Footer />
            </div>
        </>
    );
}
