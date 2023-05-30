import React from 'react'
import Slider from "react-slick";
import NextArrow from '../common/NextArrow';
import PreArrow from '../common/PreArrow';

export default function Hero() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreArrow />,
    };
    return (
        <>
            <div className=' d-md-none d-block  text-end hero-bg-change-fluid'>
                <img alt='' className='img-fluid ' src='/asset/co degrada 375 × 243 px 1 1.png' />
            </div>
            <div className="container-fluid hero-bg-change-fluid">
                <div className="row w-90 mx-auto  hero-bg-change rounded-5 p-md-5 px-2 pt-4">
                    <div className='col-lg-6 col-md-10 text-md-start text-center'>
                        <p className='fs-17 text-white'>
                            YOUR HOME SELLING JOURNEY BEGINS HERE
                        </p>
                        <h2 className='light-green-text fw-bolder mb-0'>
                            Sell Your Home,  Secure Your Future, Stay as a Renter
                        </h2>
                        <p className='fs-18 text-white mb-0 py-3'>
                            Find the Ideal investor for your home! Simply provide us with the property address, details, and your contact information, and allow our team walk you through the process.
                        </p>
                        <div className='mx-auto fs-18 border bg-white  p-1 rounded d-flex align-items-center justify-content-center'>
                            <span className='mx-2'>
                                <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.7808 18.7005C13.0905 15.7551 16 11.4759 16 8.6087C16 3.85424 12.4183 0 8 0C3.58172 0 0 3.85424 0 8.6087C0 11.4759 2.90945 15.7551 5.21921 18.7005C6.42425 20.2371 7.02677 21.0055 8 21.0055C8.97323 21.0055 9.57575 20.2371 10.7808 18.7005ZM8 12C6.34315 12 5 10.6569 5 9C5 7.34315 6.34315 6 8 6C9.65685 6 11 7.34315 11 9C11 10.6569 9.65685 12 8 12Z" fill="#5C5F71" />
                                </svg>
                            </span>
                            <input type='Email' className='rounded py-2 px-2  w-100 newsletter' placeholder='Enter your address.' />
                            <span className='pointer px-2 light-green get  rounded d-flex align-items-center justify-content-center' >
                                Get Started
                            </span>
                        </div>
                    </div>

                    <div className="d-md-none d-block " >
                        <Slider {...settings} className='mx-auto'>
                            <div className='border light-gray rounded-3 mt-4  hero-new-card'>
                                <p className='fs-18 fw-medium mb-0 px-1 py-3 text-center'>
                                    Countless homeowners have <span style={{ color: "#2CAAE6" }}>unlocked their home's value</span> and found financial freedom by selling and staying as renters.
                                </p>
                            </div>
                            <div className='border light-gray rounded-3 mt-4   hero-new-card'>
                                <p className='fs-18 fw-medium mb-0 px-1 py-3 text-center'>
                                    Access our <span style={{ color: "#2CAAE6" }}>nationwide network of investors</span> who are ready to purchase properties. Ensure you find the right buyer for your home.
                                </p>
                            </div>
                            <div className='border light-gray rounded-3 mt-4  hero-new-card'>
                                <p className='fs-18 fw-medium mb-0 px-1 py-3 text-center'>
                                    Trust Sell2Rent's <span style={{ color: "#2CAAE6" }}>30+ years of Real Estate excellence</span> to unlock the full potential of your single family home and get back on track.
                                </p>
                            </div>
                        </Slider>

                        <p className='fs-22 fw-bold text-center mb-0 py-3 text-white'>
                            <span style={{ color: "#2CAAE6" }}>Get qualified</span> and discover how <span style={{ color: "#2CAAE6" }}>Sell2Rent</span>  can help you too!
                        </p>
                    </div>


                </div>

            </div>
        </>
    )
}
