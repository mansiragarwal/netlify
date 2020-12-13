import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import bra from './images/blackroyalart_vector.png';
import optitex from './images/optitex.jpg';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import Zoom from 'react-reveal/Zoom';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    container: {
      alignItems: 'center',
      justify: 'center',
      display: 'flex'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      width: 300
    },
    cover: {
      width: 300,
      height: 200
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    card: {
      display: 'flex',
      flexDirection: 'column'
    }
  }));


export default function Projects() {
    const classes = useStyles();
    const theme = useTheme();
  
    return (
        <Container className={classes.container} alignItems = 'center'>
          <Grid
           container
           direction = 'column'
           
           >
             <Zoom>
             <Grid
           container
           direction = 'row'
           >

      <img className={classes.cover} alt="complex" src={optitex} />
      <Card>
      <div className={classes.card}>
        <CardContent className={classes.content}>
          <Typography component = "body" variant="body">
            Role: UX Researcher & Designer
          </Typography>
          <Typography component = "body" variant="body">
            Tools Used: Software -- Optitex          
          </Typography>
          <Typography component = "body" variant="body">
            Summary: Both the billion dollar clothing industry and the environment suffer from increasing amount of returns in the era of online shopping due to sizing errors. We attempt to create a virtual trial room to give customers a reasonable measure of expected fit and look.
          </Typography>
        </CardContent>
      </div>
    </Card>
    </Grid>
    </Zoom>
    <Zoom>
             <Grid
           container
           direction = 'row'
           >

      <img className={classes.cover} alt="complex" src={optitex} />
      <Card>
      <div className={classes.card}>
        <CardContent className={classes.content}>
          <Typography component = "body" variant="body">
            Role: UX Researcher & Designer
          </Typography>
          <Typography component = "body" variant="body">
            Tools Used: Software -- Optitex          
          </Typography>
          <Typography component = "body" variant="body">
            Summary: Both the billion dollar clothing industry and the environment suffer from increasing amount of returns in the era of online shopping due to sizing errors. We attempt to create a virtual trial room to give customers a reasonable measure of expected fit and look.
          </Typography>
        </CardContent>
      </div>
    </Card>
    </Grid>
    </Zoom>
    <Zoom>
             <Grid
           container
           direction = 'row'
           >

      <img className={classes.cover} alt="complex" src={optitex} />
      <Card>
      <div className={classes.card}>
        <CardContent className={classes.content}>
          <Typography component = "body" variant="body">
            Role: UX Researcher & Designer
          </Typography>
          <Typography component = "body" variant="body">
            Tools Used: Software -- Optitex          
          </Typography>
          <Typography component = "body" variant="body">
            Summary: Both the billion dollar clothing industry and the environment suffer from increasing amount of returns in the era of online shopping due to sizing errors. We attempt to create a virtual trial room to give customers a reasonable measure of expected fit and look.
          </Typography>
        </CardContent>
      </div>
    </Card>
    </Grid>
    </Zoom>
    <Zoom>
             <Grid
           container
           direction = 'row'
           >

      <img className={classes.cover} alt="complex" src={optitex} />
      <Card>
      <div className={classes.card}>
        <CardContent className={classes.content}>
          <Typography component = "body" variant="body">
            Role: UX Researcher & Designer
          </Typography>
          <Typography component = "body" variant="body">
            Tools Used: Software -- Optitex          
          </Typography>
          <Typography component = "body" variant="body">
            Summary: Both the billion dollar clothing industry and the environment suffer from increasing amount of returns in the era of online shopping due to sizing errors. We attempt to create a virtual trial room to give customers a reasonable measure of expected fit and look.
          </Typography>
        </CardContent>
      </div>
    </Card>
    </Grid>
    </Zoom>
    <Zoom>
             <Grid
           container
           direction = 'row'
           >

      <img className={classes.cover} alt="complex" src={optitex} />
      <Card>
      <div className={classes.card}>
        <CardContent className={classes.content}>
          <Typography component = "body" variant="body">
            Role: UX Researcher & Designer
          </Typography>
          <Typography component = "body" variant="body">
            Tools Used: Software -- Optitex          
          </Typography>
          <Typography component = "body" variant="body">
            Summary: Both the billion dollar clothing industry and the environment suffer from increasing amount of returns in the era of online shopping due to sizing errors. We attempt to create a virtual trial room to give customers a reasonable measure of expected fit and look.
          </Typography>
        </CardContent>
      </div>
    </Card>
    </Grid>
    </Zoom>
    <Zoom>
             <Grid
           container
           direction = 'row'
           >

      <img className={classes.cover} alt="complex" src={optitex} />
      <Card>
      <div className={classes.card}>
        <CardContent className={classes.content}>
          <Typography component = "body" variant="body">
            Role: UX Researcher & Designer
          </Typography>
          <Typography component = "body" variant="body">
            Tools Used: Software -- Optitex          
          </Typography>
          <Typography component = "body" variant="body">
            Summary: Both the billion dollar clothing industry and the environment suffer from increasing amount of returns in the era of online shopping due to sizing errors. We attempt to create a virtual trial room to give customers a reasonable measure of expected fit and look.
          </Typography>
        </CardContent>
      </div>
    </Card>
    </Grid>
    </Zoom>
    <Zoom>
             <Grid
           container
           direction = 'row'
           >

      <img className={classes.cover} alt="complex" src={optitex} />
      <Card>
      <div className={classes.card}>
        <CardContent className={classes.content}>
          <Typography component = "body" variant="body">
            Role: UX Researcher & Designer
          </Typography>
          <Typography component = "body" variant="body">
            Tools Used: Software -- Optitex          
          </Typography>
          <Typography component = "body" variant="body">
            Summary: Both the billion dollar clothing industry and the environment suffer from increasing amount of returns in the era of online shopping due to sizing errors. We attempt to create a virtual trial room to give customers a reasonable measure of expected fit and look.
          </Typography>
        </CardContent>
      </div>
    </Card>
    </Grid>
    </Zoom>
    <Zoom>
             <Grid
           container
           direction = 'row'
           >

      <img className={classes.cover} alt="complex" src={optitex} />
      <Card>
      <div className={classes.card}>
        <CardContent className={classes.content}>
          <Typography component = "body" variant="body">
            Role: UX Researcher & Designer
          </Typography>
          <Typography component = "body" variant="body">
            Tools Used: Software -- Optitex          
          </Typography>
          <Typography component = "body" variant="body">
            Summary: Both the billion dollar clothing industry and the environment suffer from increasing amount of returns in the era of online shopping due to sizing errors. We attempt to create a virtual trial room to give customers a reasonable measure of expected fit and look.
          </Typography>
        </CardContent>
      </div>
    </Card>
    </Grid>
    </Zoom>
    <Zoom>
             <Grid
           container
           direction = 'row'
           >

      <img className={classes.cover} alt="complex" src={optitex} />
      <Card>
      <div className={classes.card}>
        <CardContent className={classes.content}>
          <Typography component = "body" variant="body">
            Role: UX Researcher & Designer
          </Typography>
          <Typography component = "body" variant="body">
            Tools Used: Software -- Optitex          
          </Typography>
          <Typography component = "body" variant="body">
            Summary: Both the billion dollar clothing industry and the environment suffer from increasing amount of returns in the era of online shopping due to sizing errors. We attempt to create a virtual trial room to give customers a reasonable measure of expected fit and look.
          </Typography>
        </CardContent>
      </div>
    </Card>
    </Grid>
    </Zoom>
    <Zoom>
             <Grid
           container
           direction = 'row'
           >

      <img className={classes.cover} alt="complex" src={optitex} />
      <Card>
      <div className={classes.card}>
        <CardContent className={classes.content}>
          <Typography component = "body" variant="body">
            Role: UX Researcher & Designer
          </Typography>
          <Typography component = "body" variant="body">
            Tools Used: Software -- Optitex          
          </Typography>
          <Typography component = "body" variant="body">
            Summary: Both the billion dollar clothing industry and the environment suffer from increasing amount of returns in the era of online shopping due to sizing errors. We attempt to create a virtual trial room to give customers a reasonable measure of expected fit and look.
          </Typography>
        </CardContent>
      </div>
    </Card>
    </Grid>
    </Zoom>
    
    <Grid
           container
           direction = 'row'
           >
    <img className={classes.cover} alt="complex" src={optitex} />
      <Card>
      <div className={classes.card}>
        <CardContent className={classes.content}>
          <Typography component = "body" variant="body">
            Role: UX Researcher & Designer
          </Typography>
          <Typography component = "body" variant="body">
            Tools Used: Software -- Optitex          
          </Typography>
          <Typography component = "body" variant="body">
            Summary: Both the billion dollar clothing industry and the environment suffer from increasing amount of returns in the era of online shopping due to sizing errors. We attempt to create a virtual trial room to give customers a reasonable measure of expected fit and look.
          </Typography>
        </CardContent>
      </div>
    </Card>
    </Grid>
    <Grid
           container
           direction = 'row'

           >
    <img className={classes.cover} alt="complex" src={optitex} />
      <Card>
      <div className={classes.card}>
        <CardContent className={classes.content}>
          <Typography component = "body" variant="body">
            Role: UX Researcher & Designer
          </Typography>
          <Typography component = "body" variant="body">
            Tools Used: Software -- Optitex          
          </Typography>
          <Typography component = "body" variant="body">
            Summary: Both the billion dollar clothing industry and the environment suffer from increasing amount of returns in the era of online shopping due to sizing errors. We attempt to create a virtual trial room to give customers a reasonable measure of expected fit and look.
          </Typography>
        </CardContent>
      </div>
    </Card>
    </Grid>
    </Grid>
    </Container>
    );
  }