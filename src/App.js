import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  useRouteMatch,
  HashRouter,
  Link as RouterLink
} from "react-router-dom";
import Home from './components/Home';
import Project from './components/Project';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import About from './components/About';
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
import { fontSize } from '@material-ui/system';


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
    color : 'initial',
  },
  response: {
    fontSize: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
}));

function App() {
  return (
    <div>
      <Nav />
      <HashRouter basename="/">
        <div>
        <Route exact path="/" component={Home} />
        <Route path="/casestudy" component={CaseStudy} />
        <Route path="/about" component={About} />
        </div>
      </HashRouter>
    </div>
  );
}

const Nav = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="sticky" color = "white" elevation={0}>
        <Toolbar>
        <Link href={`#/`} className={classes.title} style={{ textDecoration: 'none' }}>
          <Typography className={classes.response}>
            Mansi Agarwal
          </Typography>
          </Link>
          <Link color="initial" href={`#/about`} style={{ textDecoration: 'none' }}>
          <Typography className={classes.response}>
            About Me
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      </div>
  )
}

export default App;
