import React, {Component} from "react";
import {Link} from 'react-router-dom';
import style from './footer.module.css'



class Foot extends Component {


    render(){
        return  <footer className={style.Footer}>
            <section className={style.footer_main}>
                <div className={style.footer_block__left} className={style.footer_container}>
                <h3 className={style.element_h} className={style.element_hover__underline}>About</h3>
                    <ul className={style.footer_flex__container}>
                            <li className={style.footer_item}  className={style.element_hover__underline}>Advertise</li>
                            <li className={style.footer_item}  className={style.element_hover__underline}>TechCrunch</li>
                            <li className={style.footer_item}  className={style.element_hover__underline}>Staff</li>
                    </ul>
                </div>

                <div className={style.footer_block__center}   className={style.footer_container}>
                <h3 className={style.element_h}    className={style.element_hover__underline}>Contact Us</h3>
                    <ul className={style.footer_flex__container}>
                            <li className={style.element_hover__underline}><Link to='/contact'>Inquiry</Link></li>
                    </ul>
                </div>

            </section>

            
            
            <section className="footer-bot">
                <ul className={style.footer_socialmedia}>
                    <li><a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook-official"></i></a></li>
                    <li><a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter-square"></i></a></li>
                    <li><a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
                    <li><a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
                    <li><a href="https://github.com/Cristian-Dot-Creator/Project-Redesign-A-Website" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-square"></i></a></li>
                </ul>
                <div className="footer-copyright">
                    <p>COPYRIGHT &copy; TECH CRUNCH</p>
                </div>
            </section>

        </footer>
    }
}
export default Foot;