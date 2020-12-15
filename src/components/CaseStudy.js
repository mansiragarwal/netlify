import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
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
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import TextTransition, { presets } from "react-text-transition";
import TextLoop from "react-text-loop";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import slanted from './images/slanted.png'
import straight from './images/straight.png'
import before from './images/Before.png'
import after from './images/After.png'
import insight from './images/InterviewInsight.png'
import main from './images/screenshot.png'
import lofi from './images/lo-fi.png'
import hifidesk from './images/hifidesk.png'
import afterPersona from './images/afterPersona.png'
import desktopHome from './images/Desktop/Home.png'
import desktopReports from './images/Desktop/Reports.png'
import desktopVisits from './images/Desktop/pinnedVisits.png'
import desktopPinned from './images/Desktop/pinnedRecords.png'
import mobileRecords from './images/Mobile/Mobile-Records.png'
import research from './images/research.png'
import mobileHome from './images/Mobile/Mobile-Records-3.png'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Link as scrollLink, animateScroll as smoothScroll } from "react-scroll";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6A00F4',
      light: '#dabffc'
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  }
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
    gridItem: {
        paddingTop: 50
    },
    gridInside: {
      paddingTop: 25
  },
    gridItemHeader: {
        paddingTop: 10,
        [theme.breakpoints.down('sm')]: {
          paddingTop: 5,
        },
    },
    listRoot: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
            height: 450
    },
    title: {
      color: theme.palette.primary.light,
    },
    absolute: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    headerCaption: {
      fontWeight: "fontWeightBold"
    },
    toolbar: theme.mixins.toolbar,
    responseName: {
      fontSize: 35,
      [theme.breakpoints.down('sm')]: {
        fontSize: 25,
      },
    },
    responseContent1: {
      fontSize: 20,
      [theme.breakpoints.down('sm')]: {
        fontSize: 12,
      },
    },
    responseContent2: {
      fontSize: 24,
      [theme.breakpoints.down('sm')]: {
        fontSize: 20,
      },
    },
    responseContent3: {
      fontSize: 16,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
      },
    },
    responseImage: {
      width: 500,
      [theme.breakpoints.down('sm')]: {
        width: 300,
      },
    },
  }));

  
  

export default function Home() {
    const classes = useStyles();
    const [scroll, setScroll] = useState(0);
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ['Overview', 'Research', 'Prototyping', 'Final Design', 'Results'];
    const anchors = ['#Overview', '#Research', '#Prototyping', '#FinalDesign', '#Results'];
   
    const handleStep = (step) => () => {
        setActiveStep(step);
    };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
      <Box bgcolor="primary.light" p={2}>
          <Container>
          <Grid
           container
           direction="row"
           justify="stretch"
           alignItems="flex-start"
          >
            <Grid item xs={12} sm={6} 
             className={classes.gridItemHeader}>
               <Typography className={classes.responseName}>EasyA</Typography>
               <Typography variant = 'button' className={classes.responseContent1}>
                 <Box fontWeight="fontWeightMedium">
                  A Digital Personal Health Care Journal
                 </Box>
               </Typography>
            </Grid>
            
            <Grid item xs={12} sm={6} direction="column">
              <Grid item className={classes.gridItemHeader}>
                <Typography className={classes.responseContent3}>
                  <Box fontWeight='fontWeightBold' display='inline'>Role</Box>
                  : UX Researcher & Designer
                </Typography>
              </Grid>
              <Grid item className={classes.gridItemHeader}>
                <Typography className={classes.responseContent3}>
                  <Box fontWeight='fontWeightBold' display='inline'>Team</Box>
                  : Cindy Liu, Evelyn Li, Rachel Arredondo
                </Typography>
              </Grid>
              <Grid item className={classes.gridItemHeader}>
                <Typography className={classes.responseContent3}><Box fontWeight='fontWeightBold' display='inline'>Tools Used</Box>
                : Figma
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          </Container>
      </Box>
      <Hidden xsDown>
      <AppBar position="sticky" elevation = {0}>
        <Stepper nonLinear activeStep={activeStep} position = "sticky">
        {steps.map((label, index) => (
          <Step key={label}>
            <AnchorLink offset='100' href={anchors[index]} style={{ textDecoration: 'none' }}>
            <StepButton onClick={handleStep(index)}>
              <Typography>{label} </Typography>
            </StepButton>
            </AnchorLink>
          </Step>
        ))}
        </Stepper>
        <div id="progressBarContainer">
          <div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `100`}} />
        </div>
      </AppBar>
      </Hidden>
      
      <Container >
      <Grid
        container
        justify="stretch"
        alignItems="flex-start"
      >
        
        <Grid item className={classes.gridItem}>
          <Typography className={classes.responseContent2} color="primary">
            <Box fontWeight='fontWeightMedium' display='inline'>
              <section id='Overview'>
                Overview
              </section>
            </Box>
          </Typography>
          
          <Grid
           container
           justify="stretch"
           alignItems="flex-start"
           >
            <Grid item xs>
              <Typography className={classes.responseContent3}>
                EasyA aimed to provide a home for personal health data in the form of a personal health journal, 
                for owning and sharing your health information at any given time and place.
                We wanted to create a personal health journal for each user - a space to upload, 
                edit and store their medical history for understanding their own health and help 
                share with their health care providers.
              </Typography>
              </Grid>
              <Grid item>
              <img className={classes.responseImage} src={desktopHome} />
            </Grid>
          </Grid>
        <Divider/>
        </Grid>
        <Grid container>
        <Grid item className={classes.gridInside}>
          
            <Typography className={classes.responseContent2} color="primary">
              <Box fontWeight='fontWeightMedium' display='inline'>
              <section id='Research'>
                Research
              </section>
              </Box>
            </Typography>
            <Typography variant = 'h6' >
              Interviews
            </Typography>
            <Grid item xs>
            <Box fontWeight='fontWeightBold' display='block' className={classes.responseContent3}>
              Who did we interview?
            </Box>
            <Box className={classes.responseContent3}>
              We interviewed participants who represent various backgrounds, cultures, ages, genders, and experiences. These individuals had varied experiences in accessing their medical records.
            </Box>
          </Grid>
        
          <Grid item xs className={classes.gridInside}>
            <Box fontWeight='fontWeightBold' display='block' className={classes.responseContent3}>
              Activities
            </Box>
            <Box className={classes.responseContent3}>
              In order to discover more valuable insights pertaining to our research goal, we conducted over 12 contextual user-interviews using Direct Storytelling as the key method. 
            </Box>
          </Grid>
          
          <Grid item xs className={classes.gridInside}>
            <Box fontWeight='fontWeightBold' display='block' className={classes.responseContent3}>
              Methods
            </Box>
            <Box className={classes.responseContent3}>
              Using Zoom, we interviewed people in over 4 different countries and experiences 
              accessing their medical in many more countries.
            </Box>
          </Grid>
          </Grid>
          <Grid item className={classes.gridInside}>
          <Typography variant = 'h6'>
              Research Findings
            </Typography>
            <Box fontWeight='fontWeightBold' display='block' className={classes.responseContent3}>
              Medical Records
            </Box>
            <Box className={classes.responseContent3}>
            One of the unexpected findings we have is the lack of any coherent journey for accessing or interpreting medical records. Especially for people who travel frequently or moved often (such as international students). People often faced serious medical issues as a result not being able to find or access medical information. There is not a universal record that is shareable among hospitals, from local to international, doctor to patient, and doctor to doctor. One reason that hinders the shareable record is the distrust between hospitals, resulted in repetitive testings. </Box>
          </Grid>
        
        
          <Grid item className={classes.gridInside}>
            <Box fontWeight='fontWeightBold' display='block' className={classes.responseContent3}>
              Medical Resources
            </Box>
            <Box className={classes.responseContent3}>
            Uncertainty about medical insurance is also an unexpected finding for us. Due to uncertainty of medical coverage about the insurace (i.e. instruction of how to claim it, the coverage of insurance etc.), international students tend to avoid go to hospitals in a foreign country.  </Box>
          </Grid>
          
          <Grid item className={classes.gridInside}>
            <Box fontWeight='fontWeightBold' display='block' className={classes.responseContent3}>
              Standardization
            </Box>
            <Box className={classes.responseContent3}>
            We also found that some of our interviewees like the current apps/website they are using while some others are on the totally opposite side of the spectrum. This conflict in preferences in customers shows that everyone’s standard is truly different and right now there’s a lack of standard in this field/domain.
            </Box>
          
          <Divider />
          </Grid>
          
          <Divider />
      </Grid>
<Grid item xs={12} className={classes.gridItem}>
      <section id='Prototyping'>
          <Typography className={classes.responseContent2} color="primary">Prototyping</Typography>
          </section>
          </Grid>
          <Grid item>
          <Typography variant = 'h6'>Lo-Fi Prototype</Typography>
          <img className={classes.responseImage} src={lofi} />
          <Divider />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
      <section id='FinalDesign'>
          <Typography className={classes.responseContent2} color="primary">Final Design</Typography>
          </section>
          </Grid>
          <img className={classes.responseImage} src={hifidesk} />
          <Grid item xs={12} className={classes.gridItem}>
      <section id='Results'>
          <Typography className={classes.responseContent2} color="primary">Results</Typography>
          </section>
          </Grid>
          <Grid item xs={12} >
          EasyA is a personal health journal that aims to digitize the current medical record keeping process. EasyA is
          <Grid item className={classes.gridInside}>
            <Box fontWeight='fontWeightBold' display='block' className={classes.responseContent3}>
            Comprehensive
            </Box>
            <Box className={classes.responseContent3}>
            - reports are automatically generated
            </Box>
            <Box className={classes.responseContent3}>
              - personalized service experience  
              </Box>
          </Grid>
          <Grid item className={classes.gridInside}>
            <Box fontWeight='fontWeightBold' display='block' className={classes.responseContent3}>
            Digital - Easy to access x Fast to update 
            </Box>
            <Box className={classes.responseContent3}>
            - able to edit / add new records manually
            </Box>
            <Box className={classes.responseContent3}>
              - able to pin reports and visits for quick and easy future reference 
              </Box>
          </Grid>
          <Grid item className={classes.gridInside}>
            <Box fontWeight='fontWeightBold' display='block' className={classes.responseContent3}>
            Responsive and there when you need it
            </Box>
            <Box className={classes.responseContent3}>
            - medical information hub on the home page --> easily  find info needed for filling out any medical forms
            </Box>
            <Box className={classes.responseContent3}>
              - responsive --> any device </Box>
              <Box className={classes.responseContent3} mb={100}>
                - all past records in one place and syncd data with Zocdoc for a more convenient and comprehensive customer experience
                </Box>
          </Grid>
      </Grid>
      </Grid>
     


      </Container>
    </div>
    </ThemeProvider>
   
  );
}