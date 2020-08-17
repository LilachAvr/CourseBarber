import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (                
             <footer>
            <div className="container">

                <div className="row">
                    <div>
                        <a href="index.html" className="logo"><img src="barberlogo.jpeg" alt="#" /></a>
                    </div>
                    <div>
                        <div >
                            <div >
                                {/* <i className="fas fa-map-marker-alt fa-2x"></i> */}
                                <span>דוד סניור 4 , ראשל"צ</span>
                            </div>
                            <div >
                                {/* <i className="fas fa-phone fa-2x"></i> */}
                                <span> 509803990 (+972)</span>
                            </div>
                            <div >
                                {/* <i className="fas fa-envelope fa-2x"></i> */}
                                <span>n-a_hairStyle@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <h1>jdsdkfnlvngs</h1>
                </div> */}
                {/* <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h4 className="text-capitalize">about factory</h4>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h4 className="text-capitalize">Menu</h4>
                            <ul className='text-capitalize main-list'>
                                <li><a href="#home">home</a></li>
                                <li><a href="#about">about us</a></li>
                                <li><a href="#aboutCourse">Services</a></li>
                                <li><a href="#test">testimonial</a></li>
                                <li><a href="#contact">contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h4 className="text-capitalize">Our network</h4>
                            <ul className="text-capitalize">
                                <li><a href="#">Adopt a pet</a></li>
                                <li><a href="#">create awareness</a></li>
                                <li><a href="#">join compaign</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h4 className="text-capitalize">about factory</h4>
                            <form>
                                <input type="text" placeholder="Enter your email" />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
                <ul className="social-media">
                    <li><a href="#"><i className="fab fa-facebook-square fa-2x"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter-square fa-2x"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-square fa-2x"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin fa-2x"></i></a></li>
                </ul> */}
                <div className="copyright">
                    <p>אהבת את האתר ? רוצה גם ? <a  href=''>לחץ כאן</a></p>
                </div>
            </div>
        </footer>
);
    }
}
 
export default Footer;