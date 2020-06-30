import React from 'react';
import './Home.css';
import Foot from "../../Footer/Foot";
import NavBar from '../../../Components/NavBar/navbar';
import Cards from './Cards';
import Article1Link from '../Article/ArticleLinks/Article1Link';
import Article2Link from '../Article/ArticleLinks/Article2Link';
import Article3Link from '../Article/ArticleLinks/Article3Link';
import Article4Link from '../Article/ArticleLinks/Article4Link';
import Article5Link from '../Article/ArticleLinks/Article5Link';
import Article6Link from '../Article/ArticleLinks/Article6Link';
import Article7Link from '../Article/ArticleLinks/Article7Link';

function Home () {
    return(
        <div>
           <NavBar></NavBar>
            <div className="container">
                <div className="featured">
                    <div>
                        <div className="hero"></div>
                        <h1>Mercedes-Benz, Nvidia partner to bring ‘software-defined’ vehicles to market in 2024</h1>
                        <h5>Kirsten Korosec</h5>
                        <h6>June 23, 2020</h6>
                    </div>
                    <div>
                        <p>Dig into the guts of a 2020 Mercedes-Benz — or just about any modern luxury vehicle — and dozens of electronic control units (ECU) will appear. Traditional automakers have historically added ECUs as they have added more technology, a practice that has introduced complexity and cost as well as limitations that newer rivals like Tesla happily avoid.</p>
                        <Article1Link />
                    </div> 
                </div>
                <div className="headlines">
                    <div>
                        <h1>Animal Crossing’s summer update will let you swim for sea critters</h1>
                        <h5>Taylor Hatmaker</h5>
                    </div>
                    <div>
                        <h1>New York City could have an e-scooter pilot program by March</h1>
                        <h5>Kirsten Korosec</h5>
                    </div>
                    <div>
                        <h1>Crypto Startup School: The legal and fundraising implications of crypto tokens</h1>
                        <h5>Zoran Basich</h5>
                    </div>
                    <div>
                        <h1>NHTSA launches probe into Tesla touchscreen failures</h1>
                        <h5>Kirsten Korosec</h5>
                    </div>
                </div>
              

<Cards></Cards>

                <div className="articles">
                    <div className="card">
                        <div className="image article1"></div>
                        <h1>AAWS launches Amazon Honeycode</h1>
                        <h5>Frederic Lardinois</h5>
                        <h6>June 24, 2020</h6>
                        <p>AWS  today announced the beta launch of Amazon Honeycode, a new, fully managed low-code/no-code development tool that aims to make it easy for anybody in a company to build their own applications. All of this, of course, is backed by a database in AWS and a web-based, drag-and-drop interface builder.</p>
                        <Article2Link />
                    </div>
                    <div className="card">
                        <div className="image article2"></div>
                        <h1>Daily Crunch: Facebook drops the Oculus Go</h1>
                        <h5>Anthony Ha</h5>
                        <h6>June 24, 2020</h6>
                        <p>Just two years after launching the Oculus  Go, Facebook announced that it’s discontinuing the headset — the least powerful and least expensive VR hardware the company sold.</p>
                        <Article3Link />
                    </div>
                    <div className="card">
                        <div className="image article3"></div>
                        <h1>Instagram expands its TikTok clone ‘Reels’ to new markets</h1>
                        <h5>Sarah Perez</h5>
                        <h6>June 24, 2020</h6>
                        <p>Starting today, Instagram is rolling out further access to Reels in France and Germany, allowing users to record short, 15-second video clips set to music or other audio, then share them on the platform where they have the potential to go viral.</p>
                        <Article4Link />
                    </div>
                    <div className="card">
                        <div className="image article4"></div>
                        <h1>Sony will now pay researchers $50,000+ for critical PS4 bugs</h1>
                        <h5>Greg Kumparak</h5>
                        <h6>June 24, 2020</h6>
                        <p>This morning Sony announced that it’s opening its bug bounty program to the public, and will pay for newly discovered bugs and exploits that impact either the PlayStation 4 or their online PlayStation Network.</p>
                        <Article5Link />
                    </div>
                    <div className="card">
                        <div className="image article5"></div>
                        <h1>Slack announces Connect, an improved way for companies to talk to one another</h1>
                        <h5>Alex Wilhelm</h5>
                        <h6>June 24, 2020</h6>
                        <p>Virtual events are the new norm for product rollouts in 2020, with Slack  taking to the internet earlier today to talk about a new part of its service called Slack Connect.</p>
                        <Article6Link />
                    </div>
                    <div className="card">
                        <div className="image article6"></div>
                        <h1>Apple has acquired Fleetsmith, a startup that helps IT manage Apple devices remotely</h1>
                        <h5>Ron Miller</h5>
                        <h6>June 24, 2020</h6>
                        <p>At a time when IT has to help employees set up and manage devices remotely, a service that simplifies those processes could certainly come in handy.</p>
                        <Article7Link />
                    </div>
                </div>
                <div className="ad-box">
                    <div className="ad"></div>
                    <h1>ADVERTISEMENT</h1>
                </div>
                <div className="articles">
                    <div className="card">
                        <div className="image article7"></div>
                        <h1>Google to offer loans to merchants in India</h1>
                        <h5>Manish Singh</h5>
                        <h6>June 25, 2020</h6>
                        <p>Google  said on Thursday it plans to offer credit to millions of merchants in India through its Google Pay app starting later this year as the American technology group looks to help small businesses in the country steer through the pandemic and also find a business model for its mobile payments service.</p>
                    </div>
                    <div className="card">
                        <div className="image article8"></div>
                        <h1>Salesforce announces a new mobile collaboration tool for sales called Anywhere</h1>
                        <h5>Ron Miller</h5>
                        <h6>June 25, 2020</h6>
                        <p>Even before the pandemic pushed most employees to work from home, sales people often worked outside of the office. Salesforce  introduced a new tool today at the Trailheadx Conference called Salesforce Anywhere that’s designed to let teams collaborate and share data wherever they happen to be.</p>
                    </div>
                    <div className="card">
                        <div className="image article9"></div>
                        <h1>New Enterprise Associates goes to Hollywood and launches a venture firm with CAA</h1>
                        <h5>Jonathan Shieber</h5>
                        <h6>June 25, 2020</h6>
                        <p>New Enterprise Associates has launched a new investment initiative with the Hollywood talent agency Creative Artists Agency.
                        The new partnership, called Connect Ventures, said it will identify and accelerate the growth of early-stage, consumer-focused businesses formed in the wake of the global pandemic.</p>
                    </div>
                    <div className="card">
                        <div className="image article10"></div>
                        <h1>Mophie is selling an $80 wireless-charging UV phone sanitizer</h1>
                        <h5>Brian Heater</h5>
                        <h6>June 25, 2020</h6>
                        <p>The best possible time to launch a UV phone sanitizer would have been about five months ago. The second best possible time, however, is right now. When the COVID-19 pandemic really started hitting the global community in earnest, there was a run on these once fairly niche products from companies with names like PhoneSoap.</p>
                    </div>
                    <div className="card">
                        <div className="image article11"></div>
                        <h1>Waymo, Volvo partner to develop electric robotaxis</h1>
                        <h5>Kirsten Korosec</h5>
                        <h6>June 25, 2020</h6>
                        <p>Waymo’s  self-driving software footprint is expanding — this time in a partnership with Volvo Car Group. The two companies announced Thursday an “exclusive” partnership to integrate Waymo’s self-driving software into a new electric vehicle designed for ride-hailing.</p>
                    </div>
                    <div className="card">
                        <div className="image article12"></div>
                        <h1>YouTube’s latest experiment is a TikTok rival focused on 15-second videos</h1>
                        <h5>Sarah Perez</h5>
                        <h6>June 25, 2020</h6>
                        <p>YouTube is taking direct aim at TikTok. The company announced on Wednesday it’s beginning to test a new feature on mobile that will allow users to record 15-second long multi-segment videos. That’s the same length as the default on TikTok as well as Instagram’s new TikTok clone, Reels.</p>
                    </div>
                </div>
            </div>
            <Foot/>
        </div>
    )
}




export default Home;