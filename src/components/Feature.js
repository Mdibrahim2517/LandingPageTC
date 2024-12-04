import React from 'react'
import g1 from "../assets/Machina.gif"
import g2 from "../assets/g2.gif"
import g3 from "../assets/g3.gif"
import { fadeIn } from "./Variants"
const Feature = () => {
    return (
        <>
            <div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="my-24 md:px-14 px-4 max-w-screen-2x1 mx-auto">
                <div className='text-xl font-semibold text-primary px-5 text-center leading-6 mb-20' data-aos="fade-up" data-aos-duration="2000" id="Feature" >
                    <h1 className='text-6xl text-primary font-bold mb-6 mt-10 animate__animated animate__zoomIn'>Do more, <span className="cursive animate__animated animate__pulse">faster</span></h1>
                    <p className="text-xl text-tartiary animate__animated animate__zoomIn" >Get to know Guidance’s GenAI platform</p>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                    <div className="lg:w-1/4 " data-aos="fade-up" data-aos-duration="2000">
                        <h3 className="text-2xl text-primary font-bold lg:w-1/2 mb-3 animate__animated animate__zoomIn">
                            Answer a few questions, let our AI-powered models go to work and tell you more
                        </h3>
                        <p className="pp text-base text-tartiary animate__animated animate__zoomIn">Our models can create your skills, inherent abilities, interests and values.
                            Overall a personalized roadmap for your professional control
                        </p>
                    </div>

                    <div className="w-full lg:w-3/4 animate__animated animate__zoomIn">
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md-gap-12 gap-8" data-aos="fade-up" data-aos-duration="1000">
                            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-2xl p-8
                    items-center flex justify-center items-center hover:-translate-y-4 transition-all
                    duration-300 cursor-pointer">
                                <div>
                                    <img src={g1} alt="" className='rounded-e-full' />
                                    <h5 className="text-xl font-semibold text-primary px-5 text-center mt-5">Our models can create your skills, inherent abilities, interests and values</h5>
                                </div>
                            </div>
                            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-2xl p-8
                    items-center flex justify-center items-center hover:-translate-y-4 trnsition-all
                    duration-300 cursor-pointer md:mt-16">
                                <div>
                                    <img src={g3} alt="" className='rounded-full' />
                                    <h5 className="text-xl font-semibold text-primary px-5 text-center mt-5">Overall a personalized roadmap for your professional control
                                    </h5>
                                </div>
                            </div>
                            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-2xl p-8
                    items-center flex justify-center items-center hover:-translate-y-4 trnsition-all
                    duration-300 cursor-pointer">
                                <div>
                                    <img src={g2} alt="" className='rounded-s-full' />
                                    <h5 className="text-xl font-semibold text-primary px-5 text-center mt-5">With ExploreAI, make sense of your data, find hidden opportunities</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='marquee title1 bg-marbg text-primary mb-10 '>

                <div class="relative flex overflow-x-hidden ">
                    <div class="py-8 animate-marquee whitespace-nowrap">
                        <span class="text-4xl mx-4">Guidence ‼</span>
                        <span class="text-4xl mx-4">Guidence ‼</span>
                        <span class="text-4xl mx-4">Guidence ‼</span>
                        <span class="text-4xl mx-4">Guidence ‼</span>
                        <span class="text-4xl mx-4">Guidence ‼</span>
                        <span class="text-4xl mx-4">Guidence ‼</span>
                    </div>

                    <div class="absolute top-0 py-8 animate-marquee2 whitespace-nowrap">
                        <span class="text-4xl mx-4"> Guidence ‼</span>
                        <span class="text-4xl mx-4">Guidence ‼</span>
                        <span class="text-4xl mx-4">Guidence ‼</span>
                        <span class="text-4xl mx-4">Guidence ‼</span>
                        <span class="text-4xl mx-4">Guidence ‼</span>
                        <span class="text-4xl mx-4">Guidence ‼</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature;
