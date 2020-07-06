import React from 'react';
import './Contact.css';
import NavBar from '../../NavBar/navbar'
import Foot from '../../Footer/Foot'

function Contact () {
    return(
        <div>
            <NavBar />
            <div className="wrapper">
            <div className="heading">
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
                <p>We are here for you! We know that there is a lot of information on our website, and we want to be able to help give you a custom experience that streamlines the information you need. Listed below are some of the most common questions we get asked ranging from our Extra Crunch Membership to upcoming events! If you cannot find an answer on this list, please use the contact form down below to ask us your question, and someone will respond to you within 48 hours.</p>
            </div>
            <div className="accordion">
                <div className="accordion-tab">
                    <input id="toggle1" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle1">What is your cancellation and refund policy?</label>
                    <div className="accordion-content">
                        <p>You may cancel your membership anytime by sending an email to extracrunch@techcrunch.com or log in to TechCrunch.com and visit Account to turn off automatic renewal. Charges are non-refundable and you will have subscription access until the end of the current subscription period. If you cancel during a trial period, you will not be charged at the end of your trial period. If you cancel after a trial period or during a regular billing cycle, your membership will be discontinued at the end of your billing cycle. If you accidentally cancel, you can always head back to Account to reinstate your membership.</p>
                    </div>
                </div>
                <div className="accordion-tab">
                    <input id="toggle2" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle2">What can I expect from my trial period?</label>
                    <div className="accordion-content">
                        <p>You will receive exclusive access to how-tos and interviews on company building, intelligence on the most disruptive opportunities for startups, and an enhanced reading experience, including Rapid Read mode, List Builder, and no banner ads. If you have questions about your trial benefits, please send an email to extracrunch@techcrunch.com.</p>
                    </div>
                </div>
                <div className="accordion-tab">
                    <input id="toggle3" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle3">Which types of events will I recieve ticket discounts for?</label>
                    <div className="accordion-content">
                        <p>Annual or 2-year members enjoy a 20% off discount towards TechCrunch event tickets, along with access to member-only experiences at select events. Click here for a complete list of event tickets eligible for discount. As an annual or 2-year subscriber, contact extracrunch@techcrunch.com to request your event ticket discount code. Our team usually responds with the code within 24 hours. Some exclusions apply. Monthly members are not eligible for ticket discounts.</p>
                    </div>
                </div>
                <div className="accordion-tab">
                    <input id="toggle4" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle4">What countries or regions is a subscription available in?</label>
                    <div className="accordion-content">
                        <p>Currently we are in the US, Canada, UK, and select countries in Europe. If you are interested in having Extra Crunch in your area, you can submit a request here.</p>
                    </div>
                </div>
                <div className="accordion-tab">
                    <input id="toggle5" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle5">Do you offer discounted rates for groups or teams?</label>
                    <div className="accordion-content">
                        <p>Yes, we offer special rates for groups of 5 or more. Send an email to extracrunch@techcrunch.com for more details and to see if your group qualifies.</p>
                    </div>
                </div>
                <div className="accordion-tab">
                    <input id="toggle6" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle6">How do I upgrade my monthly plan to an annual plan?</label>
                    <div className="accordion-content">
                        <p>Upgrading to an annual plan is a great way to save money in the long run. Go to Account, and you will see an "upgrade" button. Click the button. The upgrade button is currently only available for monthly users to upgrade to an annual plan.</p>
                    </div>
                </div>
                <div className="accordion-tab">
                    <input id="toggle7" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle7">What topics or categories of coverage are included in Extra Crunch?</label>
                    <div className="accordion-content">
                        <p>Membership includes weekly investor surveys, public and private market analysis, and how-tos and interviews on fundraising, growth, monetization, and other work topics.</p>
                    </div>
                </div>
                <div className="accordion-tab">
                    <input id="toggle8" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle8">When do I get my AWS credits?</label>
                    <div className="accordion-content">
                        <p>Typically the process takes 2-4 weeks. Both AWS and TechCrunch need to review the submissions to ensure a user is qualified.</p>
                    </div>
                </div>
                <div className="accordion-tab">
                    <input id="toggle9" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle9">Do you offer student discounts?</label>
                    <div className="accordion-content">
                        <p>Yes – we offer student discounts, but you'll need to provide evidence that you are a student. Please email extracrunch@techcrunch.com from your .edu email address to validate that you are a student, and our customer support team can provide a discount code. Students can get a full year of Extra Crunch for $50. Disclaimer: We are not Crunch Fitness. This is not a gym membership</p>
                    </div>
                </div>
                <div className="accordion-tab">
                    <input id="toggle10" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle10">What are the Partner Perks that are unlocked for annual and 2-year members</label>
                    <div className="accordion-content">
                        <p>Annual and 2-year Extra Crunch members get access to a series of Partner Perks. This includes 20% off all TechCrunch events, and opportunities to get credits and discounted services from AWS, Brex, Zendesk, and more. To see a full list of Partner Perks, please go here.</p>
                    </div>
                </div>
                <div className="accordion-tab">
                    <input id="toggle11" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle11">Is it possible to gift a subscription to a family member or colleague?</label>
                    <div className="accordion-content">
                        <p>Yes – it is possible. You can find our gifting feature here.</p>
                    </div>
                </div>
            </div>
            <h1>CONTACT US</h1>
            <form>
                <div>
                    <label for="name" class="labels">Name: *</label>
                    <input id="name" type="text" required></input>
                </div>
                <div>
                    <label for="email" class="labels">Email: *</label>
                    <input id="email" type="text" required></input>
                </div>
                <div className="row">
                    <div>
                        <label for="phone" class="labels">Phone:</label>
                        <input id="phone" type="text"></input>
                    </div>
                    <div>
                        <label for="topic" class="labels">Select Topic: *</label>
                        <select id="topic" required>
                            <option>--- Login Issue ---</option>
                            <option>--- Website Error ---</option>
                            <option>--- Email List ---</option>
                            <option>--- Business Inquiry ---</option>
                            <option>--- Other ---</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label for="message" class="labels">Message: *</label>
                    <textarea id="message" required></textarea>
                </div>
                <div>
                    <label for="submit" class="labels"></label>
                    <input id="submit" type="submit"></input>
                </div>
            </form>
            <div className="fake-ad">ADVERTISEMENT</div>
            <h2>SUGGESTED ARTICLES</h2>
            <div className="articles">
            <div className="card events">
                        <div className="image article9"></div>
                        <h1>New Enterprise Associates goes to Hollywood and launches a venture firm with CAA</h1>
                        <h5>Jonathan Shieber</h5>
                        <h6>8:46 am EDT•June 25, 2020</h6>
                        <p>New Enterprise Associates has launched a new investment initiative with the Hollywood talent agency Creative Artists Agency.
                        The new partnership, called Connect Ventures, said it will identify and accelerate the growth of early-stage, consumer-focused businesses formed in the wake of the global pandemic.</p>
                    </div>
                    <div className="card">
                        <div className="image article10"></div>
                        <h1>Mophie is selling an $80 wireless-charging UV phone sanitizer</h1>
                        <h5>Brian Heater</h5>
                        <h6>1:15 pm EDT•June 25, 2020</h6>
                        <p>The best possible time to launch a UV phone sanitizer would have been about five months ago. The second best possible time, however, is right now. When the COVID-19 pandemic really started hitting the global community in earnest, there was a run on these once fairly niche products from companies with names like PhoneSoap.</p>
                    </div>
                    <div className="card">
                        <div className="image article11"></div>
                        <h1>Waymo, Volvo partner to develop electric robotaxis</h1>
                        <h5>Kirsten Korosec</h5>
                        <h6>4:00 pm EDT•June 25, 2020</h6>
                        <p>Waymo's  self-driving software footprint is expanding — this time in a partnership with Volvo Car Group. The two companies announced Thursday an "exclusive" partnership to integrate Waymo's self-driving software into a new electric vehicle designed for ride-hailing.</p>
                    </div>
                </div>
                <Foot></Foot>
</div>
</div>
    )
}
export default Contact;


