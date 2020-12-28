import React from 'react';
import './aboutCourse.css';
const AboutCourse = () => {
    return (
        // < section >

        <section className="about" id="about">
            <div className='rightSideDatiles'>

                <h2 className="text-uppercase">  אודות הקורס  </h2>
                <div className="row">

                    <p className='detils'>הקורס נבנה ביסודיות ובחשיבה על הפרטים הקטנים , <br />
                הקורס מעניק ידע נרחב ומעמיק על כל תחום  תספורות הגברים, התוכן הנלמד בקורס מועבר לתלמיד בצורה המקצועית ביותר
               <br /> ומעניק לתלמיד יתרון בתחום <b>הברברינג</b>(ספרות הגברים )התחרותי .<br />
                מערך שיעורים מקיף ואינטנסיבי המכיל את כל סודות המקצוע שכל ספר חייב להכיר<br />
              הצטרפו אלינו לקורס הספרות המקיף ביותר בארץ, שבונה את הדור הבא בתחום . <br />
                    </p>
                    <h4>למי הקורס מתאים?</h4>
                    <p>
                        לגילאיי מ14 -100 עם אמביציה גבוהה, רעב להצלחה, ונכונות להיות הכי טובים ביותר, הקורס מכין את כל התלמידים לצאת לעולם התעסוקתי והשתלב ולהוביל .
                </p>
                    {/* <a href="#"><i className="fas fa-long-arrow-alt-left fa-2x"></i><span>. . . קרא עוד</span></a> */}
                    {/* <img src='https://media.istockphoto.com/videos/animation-of-arrows-sign-animation-with-optional-luma-matte-alpha-video-id1147158969?b=1&k=6&m=1147158969&h=abW-DEP0E3lk5bGsJUXTuqmyecn4p-KCawRAq75meiE=' alt='' /> */}
                    {/* </div> */}
                </div>
            </div>
            <div className='leftSidePhoto'>
                <div className='frame'>
                    <img className='photoCourse' src='aboutCourse.jpeg' alt='' />
                </div>
            </div>
            {/* <div class="shape-bottom" data-negative="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
            </svg>
        </div> */}
        </section>
        // {/* </section > */ }
    )
}

export default AboutCourse;