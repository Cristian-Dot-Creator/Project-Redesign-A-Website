import React from 'react';
import Foot from '../../../../Components/Footer/Foot'
import Nav from '../../../../Components/NavBar/navbar'

function Article2() {
    return (
        <div>
             <Nav></Nav>
            <div className="hero2"></div>
            <div className="article-container">
                <div>
                    <h1>AWS launches Amazon Honeycode, a no-code mobile and web app builder</h1>
                    <h5>Frederic Lardinois</h5>
                    <h6>June 24, 2020</h6>
                </div>
                <div>
                    <p>AWS  today announced the beta launch of Amazon Honeycode, a new, fully managed low-code/no-code development tool that aims to make it easy for anybody in a company to build their own applications. All of this, of course, is backed by a database in AWS and a web-based, drag-and-drop interface builder.</p>
                </div>
                <div>
                    <p>Developers can build applications for up to 20 users for free. After that, they pay per user and for the storage their applications take up.</p>
                </div>
                <div>
                    <p>“Customers have told us that the need for custom applications far outstrips the capacity of developers to create them,” said AWS VP Larry Augustin in the announcement. “Now with Amazon Honeycode, almost anyone can create powerful custom mobile and web applications without the need to write code.”</p>
                </div>
                <div>
                    <p>Like similar tools, Honeycode provides users with a set of templates for common use cases like to-do list applications, customer trackers, surveys, schedules and inventory management. Traditionally, AWS argues, a lot of businesses have relied on shared spreadsheets to do these things.</p>
                </div>
                <div>
                    <p>“Customers try to solve for the static nature of spreadsheets by emailing them back and forth, but all of the emailing just compounds the inefficiency because email is slow, doesn’t scale, and introduces versioning and data syncing errors,” the company notes in today’s announcement. “As a result, people often prefer having custom applications built, but the demand for custom programming often outstrips developer capacity, creating a situation where teams either need to wait for developers to free up or have to hire expensive consultants to build applications.”</p>
                </div>
                <div>
                    <p>It’s no surprise then that Honeycode uses a spreadsheet view as its core data interface, which makes sense, given how familiar virtually every potential user is with this concept. To manipulate data, users can work with standard spreadsheet-style formulas, which seems to be about the closest the service gets to actual programming. ‘Builders,” as AWS calls Honeycode users, can also set up notifications, reminders and approval workflows within the service.</p>
                </div>
                <div className="ad-article">
                    <div className="ad"></div>
                    <h1>ADVERTISEMENT</h1>
                </div>
                <div>
                    <p>AWS says these databases can easily scale up to 100,000 rows per workbook. With this, AWS argues, users can then focus on building their applications without having to worry about the underlying infrastructure.</p>
                </div>
                <div>
                    <p>As of now, it doesn’t look like users will be able to bring in any outside data sources, though that may still be on the company’s roadmap. On the other hand, these kinds of integrations would also complicate the process of building an app and it looks like AWS is trying to keep things simple for now.</p>
                </div>
                <div>
                    <p>Honeycode currently only runs in the AWS US West region in Oregon but is coming to other regions soon. Among Honeycode’s first customers are SmugMug and Slack.</p>
                </div>
                <div>
                    <p>“We’re excited about the opportunity that Amazon Honeycode creates for teams to build apps to drive and adapt to today’s ever-changing business landscape,” said Brad Armstrong, VP of Business and Corporate Development at Slack in today’s release. “We see Amazon Honeycode as a great complement and extension to Slack and are excited about the opportunity to work together to create ways for our joint customers to work more efficiently and to do more with their data than ever before.”</p>
                </div>
            </div>
            <Foot></Foot>
        </div>
    )
}

export default Article2;