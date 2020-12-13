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
import { Toolbar, Card, CardContent } from '@material-ui/core';
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

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
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
      color: 'black',
      fontWeight: 700
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
    },
    gridItemHeader: {
      paddingTop: 15
  },
  gridItem: {
    paddingTop: 30,
    paddingBottom: 30
  }
  }));

  const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'primary',
    border: 1,
  };

  const TEXTS = [
    "an ex-Computer Science student",
    "a current Human-Computer Interaction student",
    "a UX designer/researcher",
    "a front-end developer"
  ];
  

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
      <Box my={10}>
      <Typography color = 'black' variant = 'h4'> Hi! I’m Mansi Agarwal </Typography> 
      <Typography color = 'primary' variant = 'h6'> I’m <TextLoop className={classes.loop}>
        <span>an ex-Computer Science student </span>
        <span>a current Human-Computer Interaction student </span>
        <span>a UX designer/researcher </span>
        <span>a front-end developer </span>
      </TextLoop> at Carnegie Mellon University. </Typography> 
      <Typography color = 'primary' variant = 'h6'> Passionate about bringing more diversity into UX design and development.  </Typography> 
      <Typography color = 'black' variant = 'h6'> Conversations lead to ideas - 
      <Link href="mailto:mansi.r.agarwal@gmail.com" style={{ textDecoration: 'none' }} className={classes.link}> email me</Link> or find me on 
      <Link style={{ textDecoration: 'none' }} className={classes.link}> linkedIn</Link>.  
      </Typography> 
        </Box>
      
  
  <motion.div
  whileHover={{
    scale: 1.1,
    transition: { duration: 0.5 },
  }}
  whileTap={{ scale: 0.9 }}
>
<Box borderRadius={16} {...defaultProps} >
<Link href={`#/casestudy`} style={{ textDecoration: 'none' }}>

 <Grid
        container
        direction="row"
        justify="stretch"
        alignItems="flex-start"
        className={classes.gridItemHeader}
      >
        
          <Grid item xs={12} sm={6} className={classes.gridItem}>
          <img className={classes.cover} alt="complex" src={desktopHome} />
          </Grid>
          <Grid item xs={12} sm={6} direction="column">
          <Grid item className={classes.gridItemHeader}>
          <Typography variant = 'h6'>EasyA</Typography>
          <Typography variant = 'button' color = "primary">A Digital Personal Health Care Journal</Typography>
          </Grid>
          <Grid item className={classes.gridItemHeader}>
          <Typography variant = 'body'><Box fontWeight='fontWeightBold' display='inline'>Role</Box>: UX Researcher & Designer</Typography>
          </Grid>
          <Grid item className={classes.gridItemHeader}>
          <Typography variant = 'body'><Box fontWeight='fontWeightBold' display='inline'>Team</Box>: Cindy Liu, Evelyn Li, Rachel Arredondo</Typography>
          </Grid>
          <Grid item className={classes.gridItemHeader}>
          <Typography variant = 'body'><Box fontWeight='fontWeightBold' display='inline'>Tools Used</Box>: Figma</Typography>
          </Grid>
          </Grid>
          </Grid>
          </Link>
          </Box>
  </motion.div>
  <motion.div
  whileHover={{
    scale: 1.1,
    transition: { duration: 0.5 },
  }}
  whileTap={{ scale: 0.9 }}
> <Grid
        container
        direction="row"
        justify="stretch"
        alignItems="flex-start"
        className={classes.gridItem}
      >
          <Grid item xs={12} sm={6} className={classes.gridItem}>
          <img className={classes.cover} alt="complex" width = '100' src={bra} />
          </Grid>
          <Grid item xs={12} sm={6} direction="column">
          <Grid item className={classes.gridItemHeader}>
          <Typography variant = 'h6'>Black Royal Art</Typography>
          <Typography variant = 'button' color = "primary">UX Design for an E-commerce Website</Typography>
          </Grid>
          <Grid item className={classes.gridItemHeader}>
          <Typography variant = 'body'><Box fontWeight='fontWeightBold' display='inline'>Role</Box>: UX Researcher & Designer</Typography>
          </Grid>
          <Grid item className={classes.gridItemHeader}>
          <Typography variant = 'body'><Box fontWeight='fontWeightBold' display='inline'>Team</Box>: Cindy Liu, Evelyn Li, Rachel Arredondo</Typography>
          </Grid>
          <Grid item className={classes.gridItemHeader}>
          <Typography variant = 'body'><Box fontWeight='fontWeightBold' display='inline'>Tools Used</Box>: Figma</Typography>
          </Grid>
          </Grid>
          </Grid>
  </motion.div>
  <motion.div
  whileHover={{
    scale: 1.1,
    transition: { duration: 0.5 },
  }}
  whileTap={{ scale: 0.9 }}
>
<Grid
        container
        direction="row"
        justify="stretch"
        alignItems="flex-start"
        className={classes.gridItem}
      >
          <Grid item xs={12} sm={6} className={classes.gridItem}>
          <img className={classes.cover} alt="complex" width = '100' src={wayq} />
          </Grid>
          <Grid item xs={12} sm={6} direction="column">
          <Grid item className={classes.gridItemHeader}>
          <Typography variant = 'h6'>2WayQ</Typography>
          <Typography variant = 'button' color = "primary">Polling Tool for Online Learning</Typography>
          </Grid>
          <Grid item className={classes.gridItemHeader}>
          <Typography variant = 'body'><Box fontWeight='fontWeightBold' display='inline'>Role</Box>: UX Researcher & Designer</Typography>
          </Grid>
          <Grid item className={classes.gridItemHeader}>
          <Typography variant = 'body'><Box fontWeight='fontWeightBold' display='inline'>Team</Box>: Cindy Liu, Evelyn Li, Rachel Arredondo</Typography>
          </Grid>
          <Grid item className={classes.gridItemHeader}>
          <Typography variant = 'body'><Box fontWeight='fontWeightBold' display='inline'>Tools Used</Box>: Figma</Typography>
          </Grid>
          </Grid>
          </Grid>
         
  </motion.div>
    </Grid>
      </Container>
    <About /> 
    </div>


    </ThemeProvider>
   
  );
}