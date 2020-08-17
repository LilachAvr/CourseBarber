import React, { Component } from 'react';
import '../App.css';

class AboutBarbershop extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="about" id="about">
                <h2 className="text-uppercase"><span>קצת עלינו</span></h2>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div  className="img"><img alt='' src="theShop.jpeg" /></div>
                    </div>
                    <div className="col-lg-6 col-12 text-right">
                        <div className="about-child">
                            
                            <p>  יש לה סטייל כמו בארה"ב N.A_HAIRSTYLE</p>
                            <p>
                            מספרה לגברים בלבד עם עיצוב מוקפד, סטנדרטים מקצועיים ותודעת שירות מצוינת שכוללת דיוק בקביעת תורים, דיון בתספורת הרצויה ולאלה שאוהבים להתפנק , אצלנו תוכלו למצוא מגוון רחב של טיפולים
                        ניקוי גבות וניקוי פנים עם מסכות מיוחדות ממיטב היצרנים.
                        הסרת שיער באמצעות שעווה מפלסטיק .
                        החלקות שיער ממיטב היצרנים מהארץ ומחו“ל .
                        טיפולי פנים (הוצאת שחורים, מסכות טבעיות לניקוי הפנים) ועוד..
                        צביעת שיער (להבלטת שיער בהיר)
                        אז אם בא לך להתפנק כמו שמגיע לכל גבר עם סטייל תתקשרו עוד היום או הורידו את האפליקציה והזמינו תור</p>
          
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutBarbershop;