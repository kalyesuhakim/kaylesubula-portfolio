import React from 'react'

const Hire = () => {
    return (
        <>
            <section className="showcase py-10 md:py-20 px-5 h-screen">
                <div className="mt-20">
                    <h2 className=" text-white text-5xl font-bold text-center mb-10 lg:text-center lg:text-7xl lg:px-56">Hire a <span className="text-green-500">dev</span></h2>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:pt-32 mb-2">
                    <div className="bg-green-800 py-3 md:p-4 rounded mb-1 p-2">
                        <h1 className="md:text-3xl text-white text-semibold">Email</h1>
                        <span className="text-green-100 md:text-2xl">kalyesuhakim@gmail.com</span>
                    </div>
                    <div className="bg-green-800 py-3 md:p-4 rounded mb-1 p-2">
                        <h1 className="md:text-3xl text-white text-semibold">Instagram</h1>
                        <span className="md:text-2xl text-green-100 ">@KalyesubulHakim</span>
                    </div>
                    <div className="bg-green-800 py-3 md:p-4 rounded mb-1 p-2">
                        <h1 className="md:text-3xl text-white text-semibold">Whatsapp</h1>
                        <span className="md:text-2xl text-green-100 ">+256 706158544</span>
                    </div>
                    <div className="bg-green-800 py-3 md:p-4 rounded mb-1 p-2">
                        <h1 className="md:text-3xl text-white text-semibold">Telephone</h1>
                        <span className="md:text-2xl text-green-100 ">+256 706158544</span>
                    </div>
                    <div className="bg-green-800 py-3 md:p-4 rounded mb-1 p-2">
                        <h1 className="md:text-3xl text-white text-semibold">Github</h1>
                        <span className="md:text-2xl text-green-100 ">kalyesuhakim</span>
                    </div>
                    <div className="bg-green-800 py-3 md:p-4 rounded mb-1 p-2">
                        <h1 className="md:text-3xl text-white text-semibold">Twitter</h1>
                        <span className="md:text-2xl text-green-100 text-semibold">@kalyesuhakim</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hire
