import React from 'react';
import style from './ExtraCrunch.module.css'
import styles from './extraCopy.module.css'
import NavBar from '../../NavBar/navbar'
import Foot from '../../../Components/Footer/Foot';

import "./NavBar.css"


function ExtraCrunch() {
    return (
        <div>
            <NavBar></NavBar>

            <div className={style.Top__Container}>

                <div>
                    <div className={style.main__Headline}>
                        <h1 className={style.main__h1}>Join Extra Crunch</h1>
                        <h2 className={style.main__h2}>We're democratizing information about startups. Select a plan to get started.</h2>
                    </div>

                    <div className={style.monthlyMembership}>
                        <div className={style.monthCard}>
                            <div className={style.month_item}>
                                <h1>MONTHLY <br />MEMBERSHIP</h1>
                                <h2>SAVE $80</h2>
                                <button className={style.submit}>Submit</button>
                            </div>
                            <div className={style.month_item}>
                                <h1>MONTHLY <br />MEMBERSHIP</h1>
                                <h2>SAVE $80</h2>
                                <button className={style.submit}>Submit</button>
                            </div>
                            <div className={style.month_item}>
                                <h1>MONTHLY <br />MEMBERSHIP</h1>
                                <h2>SAVE $80</h2>
                                <button className={style.submit}>Submit</button>
                            </div>
                        </div>
                    </div>


                </div>


                <div>

                    <div className={style.cards}>

                        <div className={style.card__item}>

                            <div className={style.title__text}>
                                <h1>Perk Number 1</h1>
                                <p>-Save time with member-only email updates
                        <br />Ad free
                        <br />No banner advertisements or video pre-rolls</p>

                                <p>-Rapid Read Mode -- condensed story headlines
                        <br />List builder -- condensed story headlines</p>

                            </div>

                        </div>

                        <div className={style.card__item}>

                            <div className={style.title__text}>
                                <h1>Perk Number 2</h1>
                                <p>-Ad free
                        <br />Find out where startup investors plan to write 
                        <br />their next checks in our weekly surveys</p>

                                <p>-Build your company better with how-tos and interviews from experts
                        <br />on growth, fundraising, monetization,and other work topics</p>


                                <p>-Learn about the best startups through our IPO analysis,
                        <br /></p>



                            </div>


                        </div>



                        <div className={style.card__item}>

                            <div className={style.title__text}>
                                <h1>Perk Number 3</h1>
                                <p>-Ad free
                        <br />Unlocks both Perks 1 and 2 Numbers
                        <br />Save 20% on your next purchase for your Perks on your next purchase.</p>

                      
                            </div>


                        </div>


                    </div>

                </div>
            </div>
            <div className={style.bottom}>

            </div>
            <div className={styles.bottom__section}>
                <div className={styles.ad_box}>
                    <div className={styles.ad}></div>
                    <h1>ADVERTISEMENT</h1>
                </div>


                <div className={styles.articles}>
                    <div className={styles.card1}>
                        <div className="image article1"></div>
                        <h1>AAWS launches Amazon Honeycode</h1>
                        <h5>Frederic Lardinois</h5>
                        <h6>June 24, 2020</h6>
                        <p>AWS  today announced the beta launch of Amazon Honeycode, a new, fully managed low-code/no-code development tool that aims to make it easy for anybody in a company to build their own applications. All of this, of course, is backed by a database in AWS and a web-based, drag-and-drop interface builder.</p>
                    </div>
                    <div className={styles.card1}>
                        <div className="image article2"></div>
                        <h1>Daily Crunch: Facebook drops the Oculus Go</h1>
                        <h5>Anthony Ha</h5>
                        <h6>June 24, 2020</h6>
                        <p>Just two years after launching the Oculus  Go, Facebook announced that it’s discontinuing the headset — the least powerful and least expensive VR hardware the company sold.</p>
                    </div>
                </div>
            </div>
            <Foot></Foot>

        </div>
    )
}

export default ExtraCrunch;

