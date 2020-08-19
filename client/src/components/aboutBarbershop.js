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
                        <div className="img"><img alt='' src="theShop.jpeg" /></div>
                    </div>
                    <div className="col-lg-6 col-12 text-right">
                        <div className="about-child">


                            <p>שמי נפתלי ואני מייסד מספרת  N.A HairStyle / N.A Academy
                             התחלתי אי שם בשנת 2015 כמספרת גברים לכלל 
                            האוכלוסיה, עם המון תעוזה ומרץ להיות בין 
                            הספרים המובילים, החזקים והנחשקים בתחום . <br/>
                            כעבור שנה נפלאה, נפלה בחלקי הזכות להעסיק 
                            ספרים בתחילת דרכם ולתת להם גם מקום עבודה 
                            וגם הדרכה לספרות נכונה והשראה.
                         אז כיום עזרתי 
                            לכמה ספרים לצאת לשוק החופשי עם המון כילים מביתי
                             (המספרה הקטנה והצנוע)
                            ולאחר 5 שנים של עשייה ,גדילה 
                            ושאיפות החלטתי לפתוח את האקדמיה לספרות
                             n.a. hairstyle ולתת מהניסיון 
                             והכוח שצברתי לכל מי שרואה בעצמו 
                             הספר הבא של ישראל
                             . (או אפילו מחוץ לה) 
                            בעזרת העברת כל הכלים ,הידע 
                             והנסיון שתצטרכו בכדי להמשיך הלאה 
                            ואולי אפילו לשתף פעולה להצלחתכם<br/> 
<b>אז אם אתה רוצה להיות הספר הבא תמשיכו למטה</b>
  </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutBarbershop;