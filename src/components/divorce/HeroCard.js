import React from 'react'

export default function HeroCard() {

    return (
        <div className="container-fluid  ">
            <div className="row d-md-flex d-none w-90 mx-auto justify-content-center">
                <div className='border light-gray rounded-3 mt-4' style={{ width: "300px", padding: "29px 20px" }}>
                    <p className='fs-22 fw-medium mb-0'>
                        Countless homeowners have <span style={{ color: "#2CAAE6" }}>unlocked their home's value</span> and found financial freedom by selling and staying as renters.
                    </p>
                </div>
                <div className='border light-gray rounded-3 mt-4 mx-3' style={{ width: "300px", padding: "29px 20px" }}>
                    <p className='fs-22 fw-medium mb-0'>
                        Access our <span style={{ color: "#2CAAE6" }}>nationwide network of investors</span> who are ready to purchase properties. Ensure you find the right buyer for your home.
                    </p>
                </div>
                <div className='border light-gray rounded-3 mt-4' style={{ width: "300px", padding: "29px 20px" }}>
                    <p className='fs-22 fw-medium mb-0'>
                        Trust Sell2Rent's <span style={{ color: "#2CAAE6" }}>30+ years of Real Estate excellence</span> to unlock the full potential of your single family home and get back on track.
                    </p>
                </div>

                <p className='fs-22 fw-bold text-center py-4'>
                <span style={{ color: "#2CAAE6" }}>Get qualified</span> and discover how <span style={{ color: "#2CAAE6" }}>Sell2Rent</span>  can help you too!
                </p>

            </div>
        </div>
    )
}
