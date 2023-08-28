import React from 'react'
import { aboutUsData } from '../data'
import AboutCard from './AboutCard'

function AboutUs() {
    return (
        <div
            id='about'
            className="min-h-screen flex flex-col space-y-10 px-4 pt-4 lg:px-8 lg:bt-8 pb-16 snap-start text-white bg-black">
            <div>
                <h2 className="text-4xl mb-4 underline">About Us</h2>
                <p className='text-lg'>
                    At GrayDawn, we are not just a software company — we are innovators,
                    dreamers, and problem solvers. Our journey began with a vision to
                    reshape industries through cutting-edge technology. Today, we stand
                    proud as a team of dedicated professionals who collaborate to
                    transform ideas into reality.
                </p>
            </div>
            <div>
                <h2 className="text-4xl mb-4 underline">Our Mission</h2>
                <p className='text-lg'>
                    We are driven by a mission to simplify complexity. Our solutions
                    empower businesses to thrive in the digital age by offering
                    streamlined software that enhances efficiency, reduces costs, and
                    accelerates growth.
                </p>
            </div>
            <div>
                <h2 className="text-4xl underline mt-8 mb-4">Why Choose GrayDawn?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {aboutUsData.map((elem) => (
                        <AboutCard
                            key={elem.title}
                            heading={elem.title}
                            description={elem.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutUs