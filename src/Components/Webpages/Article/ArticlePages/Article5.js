import React from 'react';
import Foot from '../../../../Components/Footer/Foot'
import Nav from '../../../../Components/NavBar/navbar'


function Article5() {
    return (
        <div>
             <Nav></Nav>
            <div className="hero5"></div>
            <div className="article-container">
                <div>
                    <h1>Sony will now pay researchers $50,000+ for critical PS4 bugs</h1>
                    <h5>Greg Kumparak</h5>
                    <h6>June 24, 2020</h6>
                </div>
                <div>
                    <p>Think you’ve found a way to consistently brick someone’s PS4, or make it run code that it shouldn’t? Sony  wants to know — and now they’re willing to pay.
                        This morning Sony announced that it’s opening its bug bounty program to the public, and will pay for newly discovered bugs and exploits that impact either the PlayStation 4 or their online PlayStation Network.</p>
                </div>
                <div>
                    <p>Sony is pretty explicit about what kind of bugs they’re looking for: anything that hits “the PlayStation 4 system, operating system, accessories” in its current and/or beta form, or that impacts any of a handful of PlayStation Network domains/APIs. Tactics like socially engineering Sony employees or DDoSing their servers, meanwhile, aren’t allowed.</p>
                </div>
                <div>
                    <p>Bugs found in the PlayStation Network will have base bounties of $100-$3,000 or more (depending on severity), while critical bugs found related to the PS4 itself will pay $50,000 or more. You can see Sony’s breakdown, including what’s in/out of the program’s scope.</p>
                </div>
                <div className="ad-article">
                    <div className="ad"></div>
                    <h1>ADVERTISEMENT</h1>
                </div>
                <div>
                    <p>(Note the focus on PlayStation 4. Finding a new way to break the ol’ PS2 is cool and all, but Sony won’t be dishing out any money for it.)</p>
                </div>
                <div>
                    <p>In a blog post announcing the bug bounty program, Sony notes that they’ve actually been running this program quietly with a handful of researchers for a while now — today, though, they’re opening it up to anyone with the skill and interest. The program’s HackerOne page says Sony has already paid out over $170,000 to researchers, with an average bounty of around $400.
                        Microsoft launched a similar bug bounty program for Xbox Live earlier this year.</p>
                </div>
            </div>
            <Foot></Foot>
        </div>
    )
};

export default Article5;