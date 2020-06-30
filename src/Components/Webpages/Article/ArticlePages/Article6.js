import React from 'react';
import Foot from '../../../../Components/Footer/Foot'
import Nav from '../../../../Components/NavBar/navbar'


function Article6() {
    return (
        <div>
             <Nav></Nav>
            <div className="hero6"></div>
            <div className="article-container">
                <div>
                    <h1>Slack announces Connect, an improved way for companies to talk to one another</h1>
                    <h5>Alex Wilhelm</h5>
                    <h6>June 24, 2020</h6>
                </div>
                <div>
                    <p>Virtual events are the new norm for product rollouts in 2020, with Slack taking to the internet earlier today to talk about a new part of its service called Slack Connect.</p>
                </div>
                <div>
                    <p>On the heels of Apple’s lengthy and pretty good virtual WWDC that took place earlier this week, Slack’s event, part experiment and part press conference, was called to detail the firm’s new Slack Connect capability, which will allow companies to better link together and communicate inside of their Slack instance than what was possible with its shared channels feature. The product was described inside of a business-to-business context, including examples about companies needing to chat with agencies and other external vendors.</p>
                </div>
                <div>
                    <p>In its most basic form, Slack is well-known for internal chat functionality, helping teams talk amongst themselves. Slack Connect appears to be a progression past that idea, pushing internal communications tooling to allow companies to plug their private comms into the private comms of other orgs, linking them for simple communication while keeping the entire affair secure.</p>
                </div>
                <div className="ad-article">
                    <div className="ad"></div>
                    <h1>ADVERTISEMENT</h1>
                </div>
                <div>
                    <p>Slack Connect, an evolution past what shared channels offered, includes better security tooling and the ability to share channels across 20 orgs. The enterprise SaaS company is also working to give Connect-using companies “the ability to form DM connections independent of channels,” the company told TechCrunch.</p>
                </div>
                <div>
                    <p>The product could slim down email usage; if Slack Connect can let many orgs chat amongst themselves, perhaps fewer emails will be needed to keep different companies in sync. That said, Slack is hardly a quiet product. During his part of the presentation, Slack CEO Stewart Butterfield  noted that the service sees up to 65 million messages sent each second at peak times.</p>
                </div>
                <div>
                    <p>According to the CEO, Slack Connect has been piloted for a few months, and is now available for paid plans. Slack shares are off 3.8% today, before the news came out. Its broader company cohort (SaaS) are also down today, along with the market more broadly; investors don’t appear to have reacted to this piece of news, at least yet.</p>
                </div>
            </div>
            <Foot></Foot>
        </div>
    )
};

export default Article6;