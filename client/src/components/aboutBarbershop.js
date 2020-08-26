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


                            <p>שמי נפתלי ואני מייסד מספרת N.A HairStyle / N.A Academy<br/>
2015 הייתה השנה שבה התחלתי את דרכי ופתחתי מספרת גברים הפונה לכלל האוכולוסיה.<br/> עם המון תשוקה ומרץ להיות בין הספרים המובילים, החזקים והנחשקים בתחום .<br/>
שנה נפלאה עברה ונפלה בחלקי הזכות להעסיק ספרים בתחילת דרכם ולתת להם גם מקום <br/>עבודה וגם הדרכה לספרות נכונה והשראה. והבנתי, הבנתי שזה מה שאני רוצה לעשות.<br/>
כיום עזרתי למספר לא מבוטל של ספרים לצאת לשוק החופשי - חמושים בארסנל שצברו <br/>תחת קורת הגג הקטנה והצנועה שלי.<br/> 

אז לאחר 5 שנים של עשייה ברוכה ,גדילה ושאיפות שרק התעצמו החלטתי לפתוח <br/>את האקדמיה לספרות N.A. HairStyle ולתת מהניסיון והכוח שצברתי <br/>לכל מי שרואה בעצמו הספר הבא של ישראל (או אפילו מחוץ לה).<br/> בעזרת העברת כל הכלים ,הידע והנסיון שתצטרכו בכדי להמשיך הלאה <br/>ואולי אפילו לשתף פעולה להצלחתכם.
<br/><br/>
<b>אז אם אתה רוצה להיות הספר הבא - תגלול למטה</b>
  </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutBarbershop;