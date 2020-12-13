import React, { useEffect, useState } from 'react';
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
import afterPersona from './images/afterPersona.png'
import desktopHome from './images/Desktop/Home.png'
import desktopReports from './images/Desktop/Reports.png'
import desktopVisits from './images/Desktop/pinnedVisits.png'
import desktopPinned from './images/Desktop/pinnedRecords.png'
import mobileRecords from './images/Mobile/Mobile-Records.png'
import mobileHome from './images/Mobile/Mobile-Records-3.png'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Link as scrollLink, animateScroll as smoothScroll } from "react-scroll";

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
    gridItemHeader: {
        paddingTop: 15
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
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    headerCaption: {
      fontWeight: "fontWeightBold"
    }

  }));

  const tileData = [
      {
          img: desktopHome,
          title: 'Home Page',
          author: 'author',
      },
      {
        img: desktopReports,
        title: 'Reports Page',
        author: 'author',
      },
      {
        img: desktopPinned,
        title: 'Pinned Reports',
        author: 'author',
      },
      {
        img: desktopVisits,
        title: 'Pinned Visits',
        author: 'author',
      },
    ];

  
  

export default function Home() {
    const classes = useStyles();
    const [scroll, setScroll] = useState(0);
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ['Overview', 'Research', 'Defining Focus', 'Prototyping', 'Final Design', 'Results'];
    const [completed, setCompleted] = React.useState({});
    useEffect(() => {

        let progressBarHandler = () => {
            
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScroll(scroll);
        }

        window.addEventListener("scroll", progressBarHandler);

        return () => window.removeEventListener("scroll", progressBarHandler);
    });

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
          <Grid item xs={12} sm={6} className={classes.gridItemHeader}>
          <Typography variant = 'h4'>EasyA</Typography>
          <Typography variant = 'button'><Box fontWeight="fontWeightMedium" fontSize = {20}>A Digital Personal Health Care Journal</Box></Typography>
          </Grid>
          <Grid item xs={12} sm={6} direction="column">
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
          
          </Container>
        </Box>
        <AppBar position="static">
        <Stepper nonLinear activeStep={activeStep} position = "fixed">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div id="progressBarContainer">
                <div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `100`}} />
            </div>
            </AppBar>
        <Container >
        
      <Grid
        container
        direction="column"
        justify="stretch"
        alignItems="flex-start"
      >
          <Grid item>
        
      </Grid>
      <Grid item className={classes.gridItem}>
          <Typography variant = 'h5' color="primary"><Box fontWeight='fontWeightMedium' display='inline'>Overview</Box></Typography>
          <Grid
        container
        direction="row"
        justify="stretch"
        alignItems="flex-start"
      >
          <Grid item xs={12} sm={6}>
              <Typography variant = 'body'>Highly mobile users currently rely on communicating with people back home or carrying their paper records, or rely on their memory to inform new or existing providers of their history. Being on the go means having all your data with you at all times in a more accessible manner. But because of papers and various online portals many people’s medical records are scattered everywhere. We want to provide a home for this data in the form of a personal health journal, for owning and sharing your health information at any given time and place.
We aimed to create a personal health journal for each user - a space to upload, edit and store their medical history for understanding their own health and help share with their health care providers.</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
              <img height={300} src={main} />
               </Grid>
          </Grid>
         
          

      </Grid>
      <Grid item className={classes.gridItem}>
        <Grid item>
          <Typography variant = 'h5' color="primary"><Box fontWeight='fontWeightMedium' display='inline'>Initial Research</Box></Typography>
          
          
          <Typography variant = 'h6'>Interviews</Typography>
          <Typography variant = 'body'><Box fontWeight='fontWeightBold' display='inline'>Who did we interview?</Box></Typography></Grid>
          
          <Typography variant = "body">We interviewed participants who represent various backgrounds, cultures, ages, genders, and experiences. These individuals had varied experiences in accessing their medical records. 
</Typography>
<Grid item className={classes.gridItem}>
<Typography variant = 'body'><Box fontWeight='fontWeightBold' display='inline'>Activities</Box></Typography></Grid>
<Typography variant = "body">In order to discover more valuable insights pertaining to our research goal, we conducted over 12 contextual user-interviews using Direct Storytelling as the key method. 
</Typography>
<Grid item className={classes.gridItem}>
<Typography variant = 'body'><Box fontWeight='fontWeightBold' display='inline'>Methods</Box></Typography></Grid>

<Typography variant = "body">Using Zoom, we interviewed people in over 4 different countries and experiences accessing their medical in many more countries.  </Typography>
<Grid item className={classes.gridItem}>
<Typography variant = 'body'><Box fontWeight='fontWeightBold' display='inline'>Research Findings</Box></Typography>
          </Grid>
          <img height={400} src={insight} />
          <Grid item className={classes.gridItem}>
          <Typography variant = 'h5' color="primary"><Box fontWeight='fontWeightMedium' display='inline'>Customer Journey Map</Box></Typography>
          </Grid>
          <img height={370} src={before} />
      </Grid>
      <Grid item className={classes.gridItem}>
          <Typography variant = 'h5'>Defining Focus</Typography>
      </Grid>
      <Grid item className={classes.gridItem}>
          <Typography variant = 'h5'>Scenario</Typography>
          <Typography variant = 'h6'>Personas</Typography>
          <Typography variant = 'h6'>Context</Typography>
          
      </Grid>
      <Grid item className={classes.gridItem}>
          <Typography variant = 'h5'>Prototyping</Typography>
          <Typography variant = 'h6'>User Flows</Typography>
          <Typography variant = 'h6'>Micro-Sitemap</Typography>
          <Typography variant = 'h6'>Lo-Fi Prototype</Typography>
          <Typography variant = 'h6'>Mid-Fi Prototype</Typography>
      </Grid>
      <Grid item className={classes.gridItem}>
          <Typography variant = 'h5'>Final Design</Typography>
          
      </Grid>

      </Grid>
      <Grid item className={classes.gridItem}>
          <Typography variant = 'h5' color="primary"><Box fontWeight='fontWeightMedium' display='inline'>Results</Box></Typography>
          </Grid>
          <img height={400} src={afterPersona} />
     
      </Container>
    </div>
    </ThemeProvider>
   
  );
}