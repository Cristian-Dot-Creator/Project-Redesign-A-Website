import React from 'react';
import Foot from '../../../../Components/Footer/Foot'
import Nav from '../../../../Components/NavBar/navbar'


function Article3() {
    return (
        <div>
             <Nav></Nav>
            <div className="hero3"></div>
            <div className="article-container">
                <div>
                    <h1>Daily Crunch: Facebook drops the Oculus Go</h1>
                    <h5>Anthony Ha</h5>
                    <h6>June 24, 2020</h6>
                </div>
                <div>
                    <p>Facebook  shifts its VR strategy, WhatsApp’s payment service hits a snag in Brazil and we look at how Trump’s visa ban will affect Silicon Valley.</p>
                </div>
                <div>
                    <p>1. Facebook kills off its cheapest VR headset</p>
                </div>
                <div>
                    <p>Just two years after launching the Oculus  Go, Facebook announced that it’s discontinuing the headset — the least powerful and least expensive VR hardware the company sold.
                    The entry-level product was meant to hook consumers on the idea of VR and convince them to upgrade. Last year, however, Facebook released the $399 Oculus Quest, and it quickly became clear that the Quest was likely the best path forward for Oculus’ consumer ambitions.</p>
                </div>
                <div className="ad-article">
                    <div className="ad"></div>
                    <h1>ADVERTISEMENT</h1>
                </div>
                <div>
                    <p>2. Brazil suspends WhatsApp’s payments service</p>
                </div>
                <div>
                    <p>Speaking of Facebook, the new payment feature in its popular messaging app has been blocked in its second largest market. Brazil’s central bank said it was making the decision to “preserve an adequate competitive environment” in the mobile payments space and to ensure “functioning of a payment system that’s interchangeable, fast, secure, transparent, open and cheap.”</p>
                </div>
            </div>
            <Foot></Foot>
        </div>
    )
};

export default Article3;