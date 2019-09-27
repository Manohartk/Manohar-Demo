import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Background from './images/home-background.jpg';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 405,
  },
  media: {
    height: 100,
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <div className="start">
      <Grid container spacing={3}>
      <div className="startdesign" style ={ { backgroundImage: "url("+Background+")",backgroundPosition: 'right top',
    backgroundSize: '58%',backgroundRepeat: 'no-repeat', position:'relative'} }>
      <Grid item xs={12} md={5}>
          <Paper className={classes.paper}>
              <div className="innerlogo">
          <a href="#"><img src="logo-black.png" className="innerlogo" alt=""/></a></div>
          <h2>Easy and Fun to create your own Dream Kitchen</h2>
          <p className="contkitchen">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea .</p>
          <div className="buttlinks">
          <Button variant="contained" className={classes.button}><img src="templates.svg"></img>Template</Button>
            <Link to="/viewplan"><Button variant="contained" className={classes.button}><img src="new.svg"></img>Start New</Button></Link>
          <Button variant="contained" className={classes.button}><img src="tour.svg"></img>Take a Tour</Button>
          </div>
          <hr className="designimg"></hr>
          <h3>Saved designs<small> (Only for authorised users)</small></h3>
          <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/img1.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
          Design Name
          </Typography>

        </CardContent>
      </CardActionArea>

    </Card>
    </Grid>
    <Grid item xs={12} md={4}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/img2.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
          Design Name
          </Typography>

        </CardContent>
      </CardActionArea>

    </Card>
    </Grid>
    <Grid item xs={12} md={4}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/img3.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
          Design Name
          </Typography>

        </CardContent>
      </CardActionArea>

    </Card>
    </Grid>
    </Grid>

          </Paper>
        </Grid>
        <Grid item xs={12} md={7}>

        </Grid>
        </div>
      </Grid>
      </div>
    </div>
  );
}
