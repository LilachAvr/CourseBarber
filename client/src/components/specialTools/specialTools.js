import React from 'react';
import './tools.css';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//     root: {
//         maxWidth: 345,
//     },
// });
const SpecialTools = () => {
    // const classes = useStyles();
    return (
        <article className='tools'>
            <h2 >הכלים שתקבלו מאיתנו</h2>
            {/* <div className='cards'>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJpR-TknMqhaUB2s0iXRLPmP8WbwIgde8F-Q&usqp=CAU"
                    />
                    <CardContent>
                        <Typography vgutterBottom variant="h6" component="p">
                            שיעור בונוס -עבודה עם מרססת <bold>airbrush</bold>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJpR-TknMqhaUB2s0iXRLPmP8WbwIgde8F-Q&usqp=CAU"
                    />
                    <CardContent>
                        <Typography vgutterBottom variant="h6" component="p">
                            שיעור בונוס -עבודה עם מרססת <bold>airbrush</bold>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJpR-TknMqhaUB2s0iXRLPmP8WbwIgde8F-Q&usqp=CAU"
                    />
                    <CardContent>
                        <Typography vgutterBottom variant="h6" component="p">
                            שיעור בונוס -עבודה עם מרססת <bold>airbrush</bold>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJpR-TknMqhaUB2s0iXRLPmP8WbwIgde8F-Q&usqp=CAU"
                    />
                    <CardContent>
                        <Typography vgutterBottom variant="h6" component="p">
                            שיעור בונוס -עבודה עם מרססת <bold>airbrush</bold>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJpR-TknMqhaUB2s0iXRLPmP8WbwIgde8F-Q&usqp=CAU"
                    />
                    <CardContent>
                        <Typography vgutterBottom variant="h6" component="p">
                            שיעור בונוס -עבודה עם מרססת <bold>airbrush</bold>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
   
            </div> */}
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div className="col">
                        {/* <img alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB8KzoOQ5YicIVx5fTmJan45YbDPRHQEXRMw&usqp=CAU" /> */}
                        <p>מערך שיעורים בתחום השיווק</p>
                    </div>
                    <div className="col">
                        {/* <img alt='' src="data:image/jpeg;base64,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" /> */}
                        <p>אחריות על הקורס במידה ונדרשים חיזוקים  ע"מ שהידע יועבר ב-100%</p>
                    </div>
                    <div className="col">
                        {/* <img alt='' src="data:image/jpeg;base64,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" /> */}
                        <p>כלים נכונים לפתיחת עסק</p>

                    </div>
                    <div className="col">
                        {/* <img alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMtVEzJOadK18ESln3m5cF--WSvpADo9jwkQ&usqp=CAU" /> */}
                        <p>ערכת ציוד משודרגת לספר מקצועי בשווי  <b> 2,000</b> ש"ח</p>

                    </div>
                    <div className="col">
                        {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJpR-TknMqhaUB2s0iXRLPmP8WbwIgde8F-Q&usqp=CAU' alt='' /> */}
                        <p> שיעור בונוס -עבודה עם מרססת </p>
                    </div>
                </div>
            </div>
        </article>

    )
}

export default SpecialTools;