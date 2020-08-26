import React, { Component } from 'react';
import '../App.css';



class AboutCourse extends Component {

    render() {
        return (


            <div className="services" id="service">
                <div className="container"><h2 className="text-capitalize"><span>על הקורס</span></h2></div>
                <div className="services-child">
                    <div className="container">

                        <p className='detils'>הקורס נבנה ביסודיות ובחשיבה על הפרטים הקטנים , <br />
                        הקורס מעניק ידע נרחב ומעמיק על כל תחום  תספורות הגברים, התוכן הנלמד בקורס מועבר לתלמיד בצורה המקצועית ביותר
                       <br /> ומעניק לתלמיד יתרון בתחום <b>הברברינג</b>(ספרות הגברים )התחרותי .<br />
                        מערך שיעורים מקיף ואינטנסיבי המכיל את כל סודות המקצוע שכל ספר חייב להכיר<br />
                      הצטרפו אלינו לקורס הספרות המקיף ביותר בארץ, שבונה את הדור הבא בתחום . <br />
                        </p>
                        <h5>למי הקורס מתאים?</h5>
                        <p>
                             לגילאיי מ14 -100 עם אמביציה גבוהה, רעב להצלחה ,ונכונות להיות הכי טובים ביותר,<br /> הקורס מכין את כל התלמידים לצאת לעולם התעסוקתי והשתלב ולהוביל .
                        </p>
                        {/* <a href="#"><i className="fas fa-long-arrow-alt-left fa-2x"></i><span>. . . קרא עוד</span></a> */}
                    </div>
                </div>
            </div>

        );
    }

}

export default AboutCourse;