import React from 'react'
import { Carousel } from "react-responsive-carousel";

const Carosole = () => {
    return (
        <div className=''>
            <Carousel autoPlay showThumbs={false} infiniteLoop interval={2200} swipeable={false}>
                <div className=''>
                    <img className='h-[100vh] object-cover' alt="" src="/service/full-truck-2.jpeg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img className='h-[100vh] object-cover' alt="" src="/service/reverse-2.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img className='h-[100vh] object-cover' alt="" src="/service/Overdimensional-2.jpeg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img className='h-[100vh] object-cover' alt="" src="/service/Single-window Logistics Solutions .jpg" />
                    {/* <p className="legend">Legend 4</p> */}
                </div>
                <div>
                    <img className='h-[100vh] object-cover' alt="" src="/service/Value Added Services.jpg" />
                    {/* <p className="legend">Legend 4</p> */}
                </div>
                <div>
                    <img className='h-[100vh] object-cover' alt="" src="/service/3PL-Warehousing.jpg" />
                    {/* <p className="legend">Legend 4</p> */}
                </div>
                <div>
                    <img className='h-[100vh] object-cover' alt="" src="/service/Lastmaildelivery1.jpg" />
                    {/* <p className="legend">Legend 4</p> */}
                </div>

            </Carousel>
        </div>
    )
}

export default Carosole