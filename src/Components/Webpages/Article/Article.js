import React, { Component } from 'react';
import './Article.css';
import Nav from '../../../Components/NavBar/navbar'
import Foot from '../../../Components/Footer/Foot'













class Article extends Component {
    render (){
        setTimeout(() => {
            articleFilter("all")
        }, 0)
        
        const articleFilter = (c) => {
            console.log("test")
          var i;
          const x = document.getElementsByClassName('cards');
          const y = Array.from(x)
          console.log(y)
          if (c === "all") c = "";
          for (i = 0; i < y.length; i++) {
            removeClass(y[i], "show");
            if (y[i].className.indexOf(c) > -1) addClass(y[i], "show");
         } 
        }
        
        // Show filtered elements
        const addClass = (element, name) => {
          var i, arr1, arr2;
          arr1 = element.className.split(" ");
          arr2 = name.split(" ");
          for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) === -1) {
              element.className += " " + arr2[i];
            }
          }
        }
        
        // Hide elements that are not selected
        const removeClass = (element, name) => {
          var i, arr1, arr2;
          arr1 = element.className.split(" ");
          arr2 = name.split(" ");
          for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
              arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
          }
          element.className = arr1.join(" ");
        }   


    
    return(
        <div>

            <Nav></Nav>

            <div className="container">
                <h1>ALL ARTICLES</h1>
                <h5>Filter:</h5>
                <div id="btnContainer">
                    <button className="button" onClick={() => {articleFilter('all')}}>Show all</button>
                    <button className="button" onClick={() => {articleFilter('political')}}>Political</button>
                    <button className="button" onClick={() => {articleFilter('technology')}}>Technology</button>
                    <button className="button" onClick={() => {articleFilter('business')}}>Business</button>
                    <button className="button" onClick={() => {articleFilter('events')}}>Events</button>
                </div>
                <div className="articles">
                    <div className="cards political">
                        <div className="image article1"></div>
                        <h1>AAWS launches Amazon Honeycode</h1>
                        <h5>Frederic Lardinois</h5>
                        <h6>4:12 pm EDT•June 24, 2020</h6>
                        <p>AWS  today announced the beta launch of Amazon Honeycode, a new, fully managed low-code/no-code development tool that aims to make it easy for anybody in a company to build their own applications. All of this, of course, is backed by a database in AWS and a web-based, drag-and-drop interface builder.</p>
                    </div>
                    <div className="cards technology">
                        <div className="image article2"></div>
                        <h1>Daily Crunch: Facebook drops the Oculus Go</h1>
                        <h5>Anthony Ha</h5>
                        <h6>12:37 pm EDT•June 24, 2020</h6>
                        <p>Just two years after launching the Oculus  Go, Facebook announced that it's discontinuing the headset — the least powerful and least expensive VR hardware the company sold.</p>
                    </div>
                    <div className="cards business">
                        <div className="image article3"></div>
                        <h1>Instagram expands its TikTok clone 'Reels' to new markets</h1>
                        <h5>Sarah Perez</h5>
                        <h6>2:51 pm EDT•June 24, 2020</h6>
                        <p>Starting today, Instagram is rolling out further access to Reels in France and Germany, allowing users to record short, 15-second video clips set to music or other audio, then share them on the platform where they have the potential to go viral.</p>
                    </div>
                    <div className="cards events">
                        <div className="image article4"></div>
                        <h1>Sony will now pay researchers $50,000+ for critical PS4 bugs</h1>
                        <h5>Greg Kumparak</h5>
                        <h6>4:02 pm EDT•June 24, 2020</h6>
                        <p>This morning Sony announced that it's opening its bug bounty program to the public, and will pay for newly discovered bugs and exploits that impact either the PlayStation 4 or their online PlayStation Network.</p>
                    </div>
                    <div className="cards business">
                        <div className="image article5"></div>
                        <h1>Slack announces Connect, an improved way for companies to talk to one another</h1>
                        <h5>Alex Wilhelm</h5>
                        <h6>12:03 pm EDT•June 24, 2020</h6>
                        <p>Virtual events are the new norm for product rollouts in 2020, with Slack  taking to the internet earlier today to talk about a new part of its service called Slack Connect.</p>
                    </div>
                    <div className="cards technology">
                        <div className="image article6"></div>
                        <h1>Apple has acquired Fleetsmith, a startup that helps IT manage Apple devices remotely</h1>
                        <h5>Ron Miller</h5>
                        <h6>12:05 pm EDT•June 24, 2020</h6>
                        <p>At a time when IT has to help employees set up and manage devices remotely, a service that simplifies those processes could certainly come in handy.</p>
                    </div>
                    <div className="cards events">
                        <div className="image article7"></div>
                        <h1>Google to offer loans to merchants in India</h1>
                        <h5>Manish Singh</h5>
                        <h6>5:46 am EDT•June 25, 2020</h6>
                        <p>Google  said on Thursday it plans to offer credit to millions of merchants in India through its Google Pay app starting later this year as the American technology group looks to help small businesses in the country steer through the pandemic and also find a business model for its mobile payments service.</p>
                    </div>
                    <div className="cards technology">
                        <div className="image article8"></div>
                        <h1>Salesforce announces a new mobile collaboration tool for sales called Anywhere</h1>
                        <h5>Ron Miller</h5>
                        <h6>10:23 am EDT•June 25, 2020</h6>
                        <p>Even before the pandemic pushed most employees to work from home, sales people often worked outside of the office. Salesforce  introduced a new tool today at the Trailheadx Conference called Salesforce Anywhere that's designed to let teams collaborate and share data wherever they happen to be.</p>
                    </div>
                    <div className="cards events">
                        <div className="image article9"></div>
                        <h1>New Enterprise Associates goes to Hollywood and launches a venture firm with CAA</h1>
                        <h5>Jonathan Shieber</h5>
                        <h6>8:46 am EDT•June 25, 2020</h6>
                        <p>New Enterprise Associates has launched a new investment initiative with the Hollywood talent agency Creative Artists Agency.
                        The new partnership, called Connect Ventures, said it will identify and accelerate the growth of early-stage, consumer-focused businesses formed in the wake of the global pandemic.</p>
                    </div>
                    <div className="cards business">
                        <div className="image article10"></div>
                        <h1>Mophie is selling an $80 wireless-charging UV phone sanitizer</h1>
                        <h5>Brian Heater</h5>
                        <h6>1:15 pm EDT•June 25, 2020</h6>
                        <p>The best possible time to launch a UV phone sanitizer would have been about five months ago. The second best possible time, however, is right now. When the COVID-19 pandemic really started hitting the global community in earnest, there was a run on these once fairly niche products from companies with names like PhoneSoap.</p>
                    </div>
                    <div className="cards technology">
                        <div className="image article11"></div>
                        <h1>Waymo, Volvo partner to develop electric robotaxis</h1>
                        <h5>Kirsten Korosec</h5>
                        <h6>4:00 pm EDT•June 25, 2020</h6>
                        <p>Waymo's  self-driving software footprint is expanding — this time in a partnership with Volvo Car Group. The two companies announced Thursday an "exclusive" partnership to integrate Waymo's self-driving software into a new electric vehicle designed for ride-hailing.</p>
                    </div>
                    <div className="cards business">
                        <div className="image article12"></div>
                        <h1>YouTube's latest experiment is a TikTok rival focused on 15-second videos</h1>
                        <h5>Sarah Perez</h5>
                        <h6>3:56 pm EDT•June 25, 2020</h6>
                        <p>YouTube is taking direct aim at TikTok. The company announced on Wednesday it's beginning to test a new feature on mobile that will allow users to record 15-second long multi-segment videos. That's the same length as the default on TikTok as well as Instagram's new TikTok clone, Reels.</p>
                    </div>
                    <div className="cards technology">
                        <div className="image article13"></div>
                        <h1>iOS 14 REIMAGINES HOW YOU FIND AND USE APPS</h1>
                        <h5>Sarah Perez</h5>
                        <h6>1:36 pm EDT•June 22, 2020</h6>
                        <p>At Apple’s all-virtual Worldwide Developers Conference, the company introduced several new iOS features designed to help you clean up the mess of icons on your iPhone’s home screen. Wit...</p>
                    </div>
                    <div className="cards events">
                        <div className="image article14"></div>
                        <h1>FIVE DAYS LEFT TO SAVE ON EARLY STAGE ONLINE</h1>
                        <h5>Alexandra Ames</h5>
                        <h6>1:15 pm EDT•June 22, 2020</h6>
                        <p>Our inaugural TC Early Stage 2020 event takes place July 21-22, and we’re here to remind you to take advantage of early-bird savings while you still can. The price goes up on June 26, and that mean...</p>
                    </div>
                    <div className="cards business">
                        <div className="image article15"></div>
                        <h1>DAILY CRUNCH: MICROSOFT ACQUIRES CYBERX</h1>
                        <h5>Anthony Ha</h5>
                        <h6>12:10 pm EDT•June 22, 2020</h6>
                        <p>Microsoft acquires a security startup, Canva raises $60 million and Apple kicks off a virtual WWDC. Here’s your Daily Crunch for June 22, 2020. 1. Microsoft confirms acquisition of CyberX to ...</p>
                    </div>
                    <div className="cards events">
                        <div className="image article16"></div>
                        <h1>ONLY ONE WEEK LEFT TO SAVE ON TICKETS TO TC EARLY STAGE</h1>
                        <h5>Alexandra Ames</h5>
                        <h6>12:42 pm EDT•June 19, 2020</h6>
                        <p>Early-stage founders, July 21 – 22 is coming up fast and that means it’s time get ready for TC Early Stage — the virtual startup conference designed with you in mind. We’ve packed this two-day even...</p>
                    </div>
                    <div className="cards political">
                        <div className="image article17"></div>
                        <h1>IT'S NOT JUST ABOUT E-MAIL, STUPID</h1>
                        <h5>Alex Wilhelm</h5>
                        <h6>9:00 am EDT•June 19, 2020</h6>
                        <p>Hello and welcome back to Equity, TechCrunch’s venture capital-focused podcast, where we unpack the numbers behind the headlines. Your humble Equity team is pretty tired but in good spirits.</p>
                    </div>
                    <div className="cards political">
                        <div className="image article18"></div>
                        <h1>TRUMP SUSPENDED FROM TWITCH</h1>
                        <h5>Brian Heater</h5>
                        <h6>1:56 pm EDT•June 29, 2020</h6>
                        <p>Two big new pieces of news today from the ongoing battle between social media and politics. Both Twitch and Reddit have made moves against political content, citing violations of terms of service. ...</p>
                    </div>
                </div>
            </div>








            <Foot></Foot>
        </div>
    )
    }
}

export default Article;