import React from 'react';

function ExtraCrunch () {
    return(
        <div>
            <hi>ExtraCrunch</hi>
            <div class="headLine">
            <div class="headLine-1">Join Extra Crunch</div>
            <div class="headLine-2">We're democratizing information about startups. Select a plan to get started.</div>
            </div>
        <div class="offer-container">
            <div class="offers">
                <button external-event="offer-cta-1" class="card-Container unbutton" ng-click="startCheckout(terms[0].termId)">
                    <div class="card">
                        <div class="title">
                            Monthly Membership
                        </div>
                        <div class="period"> Save $80 </div>
                        <div class="button"> Submit </div>
                    </div>
                </button>
                <button external-event="offer-cta-2" class="card-Container unbutton" ng-click="startCheckout(terms[1].termId)">
                    <div class="card">
                        <div class="title">
                            Monthly Membership
                        </div>
                        <div class="period"> Save $80 </div>
                        <div class="button"> Submit </div>
                    </div>
                </button>
                <button external-event="offer-cta-3" class="card-Container unbutton" ng-click="startCheckout(terms[2].termId)">
                    <div class="card">
                        <div class="title">
                            Monthly Membership
                        </div>
                        <div class="period"> Save $80 </div>
                        <div class="button"> Submit </div>
                    </div>
                </button>
                <div class="benefitContainer">
                    <div class="flexContainer">
                        <div class="benefitList">
                            <div class="benefitTitle">Perk Number 1</div>
                            <ul>
                            <li>Save time with member-only email updates</li>
                                <li>Ad free</li>
                                <li>No banner advertisements or video pre-rolls</li>
                                <li>Rapid Read Mode -- condensed story headlines</li>
                                <li>List builder -- condensed story headlines</li>
                            </ul>
                        </div>
                        <div class="benefitList">
                            <div class="benefitTitle">Perk Number 2</div>
                            <ul>
                                <li>Ad free</li>
                                <li>Find out where startup investors plan to write their next checks in our weekly surveys</li>
                                <li>Build your company better with how-tos and interviews from experts on growth, fundraising, monetization,and other work topics</li>
                                <li>Learn about the best startups through our IPO analysis, late-stage deep dives, and other exclusives delivered daily</li>
                                <li>Gain insight through Extra Crunch Live Q&A sessions with leaders in tech.</li>
                            </ul>
                        </div>
                        <div class="benefitList">
                            <div class="benefitTitle">Perk Number 3</div>
                            <ul>
                                <li>Ad free</li>
                                <li>Unlocks both Perks 1 and 2 Numbers</li>
                                <li>Save 20% on your next purchase for your Perks on your next purchase.</li>
                                <li>Access to Partner Perks from AWS, Brex, and more.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default ExtraCrunch;