import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Footer extends Component {
    render(){
        return  <footer className="Footer">
            <section className="footer-main">
                <div className="footer-block__left footer-container">
                <h3 className="element-h element-hover__underline">About</h3>
                    <ul className="footer-flex__container">
                            <li className="footer-item element-hover__underline">Advertise</li>
                            <li className="footer-item element-hover__underline">TechCrunch</li>
                            <li className="footer-item element-hover__underline">Staff</li>
                    </ul>
                </div>

                <div className="footer-block__center footer-container">
                <h3 className="element-h element-hover__underline">Contact Us</h3>
                    <ul className="footer-flex__container">
                            <li className="element-hover__underline"><Link to='/contact'>Inquiry</Link></li>
                    </ul>
                </div>

            </section>
            
            <section className="footer-bot">
                <ul className="footer-socialmedia">
                    <li><a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook-official"></i></a></li>
                    <li><a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter-square"></i></a></li>
                    <li><a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
                    <li><a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
                    <li><a href="https://github.com/Cristian-Dot-Creator/Project-Redesign-A-Website" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-square"></i></a></li>
                </ul>
                <div className="footer-copyright">
                    <p>COPYRIGHT &copy;	TECH CRUNCH</p>
                </div>
            </section>

        </footer>
    }
}
export default Footer;