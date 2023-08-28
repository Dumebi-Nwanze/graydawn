import React, { useEffect } from 'react'
import {
    HiArrowLeft,
    HiArrowRight,
} from "react-icons/hi2";

function Blog() {
    const imgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    let currentIndex = 0;

    const shiftRight = () => {
        const slides = document.getElementById("slides");

        currentIndex + 1 === imgs.length ? (currentIndex = 0) : (currentIndex += 1);
        slides!.style.transform = `translateX(${-currentIndex * 100}%)`;
    };
    const shiftLeft = () => {
        const slides = document.getElementById("slides");
        currentIndex <= 0 ? (currentIndex = imgs.length - 1) : (currentIndex -= 1);
        slides!.style.transform = `translateX(${-currentIndex * 100}%)`;
    };
    useEffect(() => {
        const interval = setInterval(shiftRight, 2000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div
            id='blog'
            className="min-h-screen snap-start p-8 flex flex-col bg-black text-white">
            <div>
                <h2 className="text-4xl underline mb-4">Blog</h2>
            </div>
            <div className="flex-1 flex flex-col  p-12 bg-slate-900">
                <div className="flex justify-between mb-2">
                    <h4 className=' text-xl'>Featured Posts</h4>
                    <div className='font-extrabold'>
                        <button
                            className="carousel-control prev text-3xl mr-5"
                            onClick={() => {
                                shiftLeft();
                            }}
                        >
                            <HiArrowLeft />
                        </button>
                        <button
                            className="carousel-control next text-3xl"
                            onClick={() => {
                                shiftRight();
                            }}
                        >
                            <HiArrowRight />
                        </button>
                    </div>
                </div>
                <div className="overflow-x-hidden   ">
                    <div
                        id="slides"
                        className={`flex  transition-all duration-500 ease-in-out h-full`}
                    >
                        {imgs.map((itm) => (
                            <div key={itm}
                                onClick={() => { window.location.href = "https://techcrunch.com/2023/08/28/devolut-e-commerce-latin-america-returns/" }}
                                className="  w-full flex-shrink-0 h-[500px] relative overflow-hidden " >

                                <div className='cursor-pointer pb-12 pl-12 flex flex-col justify-end w-full h-full bg-gradient-to-r from-black to-transparent absolute top-0 left-0 '>

                                    <div className='w-[50%]'>
                                        <h1 className='font-bold text-3xl mb-8'>
                                            Devolut leverages e-commerce growth in Latin America to develop reverse logistics tool
                                        </h1>
                                        <p>
                                            Devolut enables merchants a returns option that doesn’t require boxes or labels. It also provides a network of “city points” where consumers can go to return merchandise.
                                        </p>
                                    </div>
                                </div>
                                <img
                                    className="object-cover h-full w-full"
                                    alt=""
                                    src="https://images.unsplash.com/photo-1588336443962-49d88df004a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mt-4'>
                    <button
                        onClick={() => {
                            window.location.href = 'https://techcrunch.com'
                        }}
                        className='mt-4 text-blue-500 btn-black px-8 py-4 border border-white hover:text-black text-lg font-medium'>See More</button>
                </div>
            </div>
        </div>
    )
}

export default Blog