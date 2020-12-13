import logo from './logo.svg';
import './App.css';

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
      <AppBar className={classes.navbar} position="static" color = "white">
        <Toolbar>
        <Link href={`#/`} className={classes.title} style={{ textDecoration: 'none' }}>
          <Typography variant="h6">
            Mansi Agarwal
          </Typography>
          </Link>
          <Typography variant="h6" className={classes.navbarElem}>
            Projects
          </Typography>
          <Link href={`#/about`} style={{ textDecoration: 'none' }}>
          <Typography variant="h6" className={classes.navbarElem}>
            About Me
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      </div>
  )
}

export default App;
