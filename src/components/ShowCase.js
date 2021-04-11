import React from 'react'
import { Link } from 'react-router-dom'

const ShowCase = () => {
    return (
        <>
            <section className="showcase">
                <div className="overlay flex items-center flex-col justify-center text-white px-5">
                    <h1 className="text-5xl font-bold text-right mb-10 lg:text-center lg:text-7xl lg:px-56">I create awesome <span className="text-green-500">user interfaces</span>, websites and other computer software applications.</h1>
                    <div className="ml-auto lg:ml-0">
                    <Link className="mr-5 bg-green-500 py-2 px-4 rounded-full font-semibold transition-all hover:bg-green-800" to="/hire">Get Started</Link>
                    <Link className="mr-5 bg-white text-green-500 py-2 px-4 rounded-full font-semibold transition-all hover:bg-green-800 hover:text-white" to="/projects">Projects</Link>
                </div>
                </div>
            </section>
        </>
    )
}

export default ShowCase
