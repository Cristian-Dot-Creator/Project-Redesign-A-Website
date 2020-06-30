import React from 'react';
import Foot from '../../../../Components/Footer/Foot'
import Nav from '../../../../Components/NavBar/navbar'


function Article7 () {
    return(
        <div>
             <Nav></Nav>
            <div className="hero7"></div>
            <div className="article-container">
            <div>
                    <h1>Apple has acquired Fleetsmith, a startup that helps IT manage Apple devices remotely</h1>
                    <h5>Ron Miller</h5>
                    <h6>June 24, 2020</h6>
                </div>
                <div>
                    <p>At a time when IT has to help employees set up and manage devices remotely, a service that simplifies those processes could certainly come in handy. Apple recognized that, and acquired Fleetsmith today, a startup that helps companies do precisely that with Apple devices.</p>
                </div>
                <div>
                    <p>While Apple  didn’t publicize the acquisition, it has confirmed the deal with TechCrunch, while Fleetsmith  announced the deal in a company blog post. Neither company was sharing the purchase price.</p>
                </div>
                <div>
                    <p>The startup has built technology that takes advantage of Apple’s Device Enrollment Program, allowing IT departments to bring devices online as soon as the employee takes it out of the box and powers it up.</p>
                </div>
                <div>
                    <p>At the time of its $30 million Series B funding last year, CEO Zack Blum explained the company’s core value proposition: “From a customer perspective, they can ship devices directly to their employees. The employee unwraps it, connects to Wi-Fi and the device is enrolled automatically in Fleetsmith,” Blum explained at that time.</p>
                </div>
                <div className="ad-article">
                    <div className="ad"></div>
                    <h1>ADVERTISEMENT</h1>
                </div>
                <div>
                    <p>Over time, the company has layered on other useful pieces beyond automating device registration, like updating devices automatically with OS and security updates, while letting IT see a dashboard of the status of all devices under management, all in a pretty slick interface.</p>
                </div>
                <div>
                    <p>While Apple will in all likelihood continue to work with Jamf, the leader in the Apple device management space, this acquisition gives the company a remote management option at a time when it’s essential with so many employees working from home.</p>
                </div>
                <div>
                    <p>Fleetsmith, which has raised more than $40 million from investors, like Menlo Ventures, Tiger Global Management, Upfront Ventures and Harrison Metal, will continue to sell the product through the company website, according to the blog post.</p>
                </div>
                <div>
                    <p>The founders put a happy face on the deal, as founders tend to do. “We’re thrilled to join Apple. Our shared values of putting the customer at the center of everything we do without sacrificing privacy and security, means we can truly meet our mission, delivering Fleetsmith to businesses and institutions of all sizes, around the world,” they wrote.</p>
                </div>
            </div>
            <Foot></Foot>
        </div>
    )
};

export default Article7;