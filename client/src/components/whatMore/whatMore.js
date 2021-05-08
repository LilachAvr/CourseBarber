import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

import './whatMore.css';
// const useStyles = makeStyles({
//     root: {
//         maxWidth: 345,
//     },
// });

const WhatMore = () => {
    // const classes = useStyles();
    return (
        <article className='whatMore'>
            {/* <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
        </Button>
                    <Button size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
            </Card> */}
                                <h2> מה עוד מצפה לכם ...</h2>

            <div className='rightSideWhatMore'>
                <div className="testimonial" id="test">
                    {/* <div className="container"> */}
                    {/* </div> */}

                    <div className="test-child">
                        <div className="container">
                            {/* <div className="row">
                            <div className="col-lg-2 col-md-1"></div>
                            <div className="col-lg-2 col-md-3 col-4"></div>
                            <div className="col-lg-6 col-8"> */}
                            <h4 className="text">כל הסוגים</h4>
                            <p className='detils'>אצלינו תלמדו ותכירו  את כל סגי השיער  משיער אפרו עד לשיער חלק ,תתנסו בכל סוגי  התספורות  וכל הסגנונות האפשריים </p>
                            {/* </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-4">
                           </div>
                            <div className="col-lg-6 col-8"> */}
                            <h4 className="text"><i class="fa fa-star"></i>מודליסטים</h4>
                            <p>אצלינו מתחילים כבר מהמפגש השני לעבוד על מודליסטים ולא על  ראשי בובות כך תרכשו את הניסיון ,והביטחון לעבודה גם ללא ניסיון ,</p>
                            {/* </div>
                        </div> */}
                            {/* <div className="row">
                            <div className="col-lg-2 col-md-1"></div>
                            <div className="col-lg-2 col-md-3 col-4">
</div>
                            <div className="col-lg-6 col-8"> */}
                            <h4 className="text">הסודות שלנו</h4>
                            <p>אנו מלמדים את מספר השיטות הייחודיות שלנו כמובן שילוו אתכם לאורך כל הדרך </p>
                            {/* </div> */}
                            {/* </div> */}

                        </div>
                    </div>
                    {/* <div class="shape-bottom" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div> */}
                </div>
            </div>
            <div className='leftSideWhatMore'>
                {/* <video width="320" height="240" autoplay>
                    <source src="https://player.vimeo.com/external/459186304.sd.mp4?s=f6163a27ebbcc47e9c8c924e13483a7b5eaca7a6&profile_id=164" type="video/mp4" />
</video> */}
                <video autoPlay muted loop id='myVideo'>
                    <source src="https://player.vimeo.com/external/459186304.sd.mp4?s=f6163a27ebbcc47e9c8c924e13483a7b5eaca7a6&profile_id=164" type="video/mp4" />

                </video>
            </div>
        </article>
    )
}

export default WhatMore;