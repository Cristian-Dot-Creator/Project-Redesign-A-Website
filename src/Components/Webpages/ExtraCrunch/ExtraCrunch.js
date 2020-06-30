import React from 'react';
import style from './ExtraCrunch.module.css'
import styles from './extraCopy.module.css'
import NavBar from '../../NavBar/navbar'
import Foot from '../../../Components/Footer/Foot';

import "./NavBar.css"


function ExtraCrunch () {
    return(
        <div>
            <NavBar></NavBar>

        <div className={style.Top__Container }>

     <div>
            <div className={style.main__Headline}>
            <h1 className={style.main__h1}>Join Extra Crunch</h1>
            <h2 className={style.main__h2}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero nemo quibusdam aliquam, asperiores laudantium aliquid adipisci tempora ipsa aspernatur non?</h2>
            </div>
            
        <div className={style.monthlyMembership}>
                   <div className={style.monthCard}>
                        <div className={style.month_item}>
                            <h1>MONTHLY <br/>MEMBERSHIP</h1>
                            <h2>SAVE $80</h2>
                            <button className={style.submit}>Submit</button>
                        </div>
                        <div className={style.month_item}>
                            <h1>MONTHLY <br/>MEMBERSHIP</h1>
                            <h2>SAVE $80</h2>
                            <button className={style.submit}>Submit</button>
                        </div>
                        <div className={style.month_item}>
                            <h1>MONTHLY <br/>MEMBERSHIP</h1>
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
                        <p>-lerds adsf 
                        <br/>sdfsdffdfdd
                        <br/>sdfdfsdf</p>

                        <p>-lerds adsf 
                        <br/>sdfsdffdfdd
                        <br/>sdfdfsdf</p>

                        
                        <p>-lerds adsf 
                        <br/>sdfsdffdfdd
                        <br/>sdfdfsdf</p>

                        
                        
            </div>
                

                </div>

                <div className={style.card__item}>

                <div className={style.title__text}>
                <h1>Perk Number 1</h1>
                        <p>-lerds adsf 
                        <br/>sdfsdffdfdd
                        <br/>sdfdfsdf</p>

                        <p>-lerds adsf 
                        <br/>sdfsdffdfdd
                        <br/>sdfdfsdf</p>

                        
                        <p>-lerds adsf 
                        <br/>sdfsdffdfdd
                        <br/>sdfdfsdf</p>

                        
                        
                </div>
                    

                    </div>
                    


                <div className={style.card__item}>

                <div className={style.title__text}>
                        <h1>Perk Number 1</h1>
                        <p>-lerds adsf 
                        <br/>sdfsdffdfdd
                        <br/>sdfdfsdf</p>

                        <p>-lerds adsf 
                        <br/>sdfsdffdfdd
                        <br/>sdfdfsdf</p>

                        
                        <p>-lerds adsf 
                        <br/>sdfsdffdfdd
                        <br/>sdfdfsdf</p>
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
                        <h1>ARTICLE TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                    <div className={styles.card1}>
                        <div className="image article1"></div>
                        <h1>ARTICLE TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                    </div>
                    </div>
            <Foot></Foot> 
                    
</div>
    )
}

export default ExtraCrunch;

