import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (                
        //      <footer>
        //     <div className="container">

        //         <div className="row">
        //             <div>
        //                 <a href="index.html" className="logo"><img src="barberlogo.jpeg" alt="#" /></a>
        //             </div>
        //             <div>
        //                 <div >
        //                     <div >
        //                         <i className="fas fa-map-marker-alt fa-2x"></i>
        //                         <span>דוד סניור 4 , ראשל"צ</span>
        //                     </div>
        //                     <div >
        //                         <i className="fas fa-phone fa-2x"></i>
        //                         <span> 509803990 (+972)</span>
        //                     </div>
        //                     <div >
        //                         <i className="fas fa-envelope fa-2x"></i>
        //                         <span>n-a_hairStyle@gmail.com</span>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div>
        //             <h1>jdsdkfnlvngs</h1>
        //         </div>
        //         <div className="row">
        //             <div className="col-lg-3 col-md-6 col-12">
        //                 <div className="item">
        //                     <h4 className="text-capitalize">about factory</h4>
        //                     <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        //                 </div>
        //             </div>
        //             <div className="col-lg-3 col-md-6 col-12">
        //                 <div className="item">
        //                     <h4 className="text-capitalize">Menu</h4>
        //                     <ul className='text-capitalize main-list'>
        //                         <li><a href="#home">home</a></li>
        //                         <li><a href="#about">about us</a></li>
        //                         <li><a href="#aboutCourse">Services</a></li>
        //                         <li><a href="#test">testimonial</a></li>
        //                         <li><a href="#contact">contact us</a></li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             <div className="col-lg-3 col-md-6 col-12">
        //                 <div className="item">
        //                     <h4 className="text-capitalize">Our network</h4>
        //                     <ul className="text-capitalize">
        //                         <li><a href="#">Adopt a pet</a></li>
        //                         <li><a href="#">create awareness</a></li>
        //                         <li><a href="#">join compaign</a></li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             <div className="col-lg-3 col-md-6 col-12">
        //                 <div className="item">
        //                     <h4 className="text-capitalize">about factory</h4>
        //                     <form>
        //                         <input type="text" placeholder="Enter your email" />
        //                         <input type="submit" value="Subscribe" />
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
               
        //         <div className="copyright">
        //             <p>אהבת את האתר ? רוצה גם ? <a  href=''>לחץ כאן</a></p>
        //         </div>
        //     </div>
        // </footer>
        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <h6>החזון שלי</h6>
                <p class="text-justify">
                    החזון שלי הוא להיות מס' אחד בתחום 
                    <br/>
                     לשאוף להביא את התלמיד לביצועים הכי טובים שלו
                     <br/>
                     למקצע את התלמיד בכל סוגי השיער
                     <br/>
                     ולהביא את יכולתיו לידי ביטוי 
                    </p>
              </div>
    
              <div class="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul class="footer-links">
                  <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                  <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                  <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                  <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                  <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                  <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                </ul>
              </div>
    
              <div class="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul class="footer-links">
                  <li><a href="http://scanfcode.com/about/">עוד עלינו</a></li>
                  <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                  <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                  <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                  <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                </ul>
              </div>
            </div>
            <hr/>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
             <a href="#">Scanfcode</a>.
                </p>
              </div>
    
              <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="social-icons">
                  <li><a class="facebook" href=""><i class="fa fa-facebook"></i></a></li>
                  <li><a class="twitter" href=""><i class="fa fa-twitter"></i></a></li>
                  <li><a class="dribbble" href=""><i class="fa fa-dribbble"></i></a></li>
                  <li><a class="linkedin" href=""><i class="fa fa-linkedin"></i></a></li>   
                </ul>
              </div>
            </div>
          </div>
    </footer>
);
    }
}
 
export default Footer;