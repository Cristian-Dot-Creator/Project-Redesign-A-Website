import React from 'react';
import '../ArticlePages/ArticlePage.css'
import Foot from '../../../../Components/Footer/Foot'
import Nav from '../../../../Components/NavBar/navbar'

function Article1() {
    return (
        <div>
            <Nav></Nav>
            <div className="hero1"></div>
            <div className="article-container">
                <div>
                    <h1>Mercedes-Benz, Nvidia partner to bring ‘software-defined’ vehicles to market in 2024</h1>
                    <h5>Kirsten Korosec</h5>
                    <h6>June 23, 2020</h6>
                </div>
                <div>
                    <p> Dig into the guts of a 2020 Mercedes-Benz — or just about any modern luxury vehicle — and dozens of electronic control units (ECU) will appear. Traditional automakers have historically added ECUs as they have added more technology, a practice that has introduced complexity and cost as well as limitations that newer rivals like Tesla happily avoid.</p>
                </div>
                <div>
                    <p>Today, Mercedes-Benz and Nvidia announced a partnership aimed at eliminating the complexity while boosting the performance and automated driving capabilities of a new generation of vehicles.</p>
                </div>
                <div>
                    <p>The upshot is a software-centric computing architecture based on Nvidia’s Drive AGX Orin computer system-on-a-chip. The underlying architecture will be standard in Mercedes’ next generation of vehicles, starting sometime toward the end of 2024, Ola Källenius, chairman of the board of management of Daimler AG and head of Mercedes-Benz AG, said during a live stream of the announcement.</p>
                </div>
                <div>
                    <p>Nvidia’s Orin SoC is based on its recently announced Nvidia Ampere supercomputing architecture. The Nvidia Drive platform will include a full software stack designed for automated driving AI applications. The two companies will jointly develop the AI and automated vehicle applications that include Level 2 and Level 3 driver assistance functions, as well as automated parking functions up to Level 4. (Society of Automobile Engineers [SAE] has designated five levels of automation. A Level 2 system means two primary functions are automated and still have a human driver in the loop at all times. Level 4 means the vehicle can handle all aspects of driving in certain conditions without human intervention.)</p>
                </div>
                <div className="ad-article">
                    <div className="ad"></div>
                    <h1>ADVERTISEMENT</h1>
                </div>
                <div>
                    <p>This new in-vehicle computing architecture will also support over-the-air (OTA) software updates, a technological strategy that Tesla has employed for years to continually upgrade the features and functions of its electric vehicles. This means the owner of a 2024 model Mercedes might see the advanced driver assistance system of their vehicle improve months and even years after their initial purchase.</p>
                </div>
                <div>
                    <p>The move to this new computing platform is important for the business model of our company, Källenius said Tuesday.
                    “Many people talk about the modern car, the new car as kind of the smartphone on wheels. If you want to take that approach you really have to look at source software architecture from a holistic point of view,” he said. “One of the most important domains here is the driving assistant domain. That needs to dovetail into what we call software-driven architecture, to be able to (with high computing power) add use cases for the customer, this case the driving assistant autonomous space.”</p>
                </div>
                <div>
                    <p>Källenius added that this helps add recurrent revenue streams to its business. The new in-vehicle computing platform will move Mercedes vehicles to a software app-based system. This would theoretically let Mercedes introduce third-party apps to its vehicles, which is what Källenius was likely referring to when he mentioned new revenue streams. A software-based app system would let customers purchase and add capabilities, software applications and subscription services through over-the-air software updates during the life of the car.</p>
                </div>
                <div>
                    <p>This isn’t just a one-off or pilot. This software-centric computing system will be standard across Mercedes’ next generation of vehicles. And if Mercedes follows the same strategy as it did with its next-generation infotainment system called MBUX, that could mean that its A Class and not its flagship S Class vehicles will be among the first to get this.</p>
                </div>
            </div>
            <Foot></Foot>
        </div>
    )
}

export default Article1;