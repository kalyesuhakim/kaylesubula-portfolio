import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className="sm:flex justify-between px-5 py-3 absolute w-full text-white">
                <div className="logo">
                    <h2 className=" text-center text-3xl text-white lg:text-5xl">
                      <Link to="/">Kalyesubula@Hakim</Link>
                    </h2>
                </div>
                <nav>
                    <ul className="flex justify-center pt-2">
                        <li className="mr-5">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="mr-5">
                          <Link to="/projects">Projects</Link>
                        </li>
                        <li className="">
                          <Link className="mr-5 bg-green-500 p-1 px-4 rounded-full font-semibold transition-all hover:bg-green-800" to="/hire">Hire</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header
