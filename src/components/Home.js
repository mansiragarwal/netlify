import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Card, CardContent, Divider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import TextTransition, { presets } from "react-text-transition";
import TextLoop from "react-text-loop";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./Home.css";
import optitex from './images/optitex.jpg';
import desktopHome from './images/Desktop/Home.png'
import bra from './images/blackroyalart_vector.png'
import wayq from './images/wayq.png'
import About from './About.js'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';

const theme = createMuiTheme({
  
  palette: {
    primary: {
      main: '#6A00F4',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    title: {
      flex : 1,
    },
    navbar : {
      marginLeft: 2,
    },
    navbarElem: {
      position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    },
    link: {
      textDecoration: 'none',
      '&:hover': {
        color: '#11cb5f',
     }
    },
    loop: {
      color: 'primary',
      fontWeight: 700,
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
      padding: 10,
      marginBottom: 40,
      marginRight: 30,
    },
    gridItemHeader: {
      paddingTop: 15
  },
  gridItem: {
    paddingTop: 30,
    paddingBottom: 30
  },
  media: {
    height: 400,
  },
  }));

export default function Home() {
    const classes = useStyles();
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
    const item = { hidden: { x: -10, opacity: 0 } }
    const list = { hidden: { opacity: 0 } }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Container>
          <Grid
           container
           direction="column"
           justify="flex-start"
           alignItems="flex-start"
          >
         <Box my={5}>
           <Typography color = 'black' variant = 'h3'>Mansi Agarwal </Typography> 
           <Typography variant = 'h5' color="primary">
             <TextLoop>
              <span>Ex-Computer Science student </span>
              <span>Current Human-Computer Interaction student </span>
              <span>UX designer/researcher </span>
              <span>Front-end developer </span>
             </TextLoop> <Box display='inline' color = "black">at Carnegie Mellon University.</Box> </Typography>
           
           </Box>
           <Grid item>
      <Typography variant = 'h6'> Passionate about bringing more diversity into UX design and development.  </Typography> 
      <Typography variant = 'h6'> Conversations lead to ideas - 
      <Link href="mailto:mansi.r.agarwal@gmail.com" style={{ textDecoration: 'none' }} className={classes.link}> email me</Link> or find me on 
      <Link style={{ textDecoration: 'none' }} className={classes.link}> linkedIn</Link>.  
      </Typography> 
      </Grid>
       
        </Grid>
        
        <Grid container>
        <Grid item xs={12}>
          <Box my={5}>
            <Typography variant = 'h5'>Projects</Typography>
            <Divider />
          </Box>
        </Grid>
        

          <Grid item xs={12}>
      <motion.div
       whileHover={{
         scale: 1.05,
         transition: { duration: 0.5 },
        }}
       whileTap={{ scale: 0.9 }}
      >
        <Link href={`#/casestudy`} style={{ textDecoration: 'none' }}>
      <Card width={600} className={classes.card} color="primary">
        <CardActionArea>
          <CardMedia
           className={classes.media}
           image={desktopHome}
           title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             EasyA
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             A Digital Personal Health Care Journal
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Chip variant="outlined" color = "primary" label="UX Research"/>
          <Chip variant="outlined" color = "primary" label="UX Design"/>
        </CardActions>
      </Card>
      </Link>
      </motion.div>
      </Grid>
      <Grid item xs>
      <motion.div
       whileHover={{
         scale: 1.05,
         transition: { duration: 0.5 },
       }}
       whileTap={{ scale: 0.9 }}
      >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
           className={classes.media}
           image={wayq}
           title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              2WayQ
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Polling Tool for Online Learning
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Chip variant="outlined" color = "primary" label="Front-End Development"/>
      <Chip variant="outlined" color = "primary" label="UX Design"/>
      </CardActions>
    </Card>
    </motion.div>
    </Grid>
    <Grid item xs>
    <motion.div
  whileHover={{
    scale: 1.05,
    transition: { duration: 0.5 },
  }}
  whileTap={{ scale: 0.9 }}
>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={bra}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Black Royal Art
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          UX Design for an E-commerce Website          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Chip variant="outlined" color = "primary" label="UX Design"/>
      </CardActions>
    </Card>
    </motion.div>
    </Grid>
    </Grid>
      </Container>
    </div>


    </ThemeProvider>
   
  );
}