import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import me from './images/me.png'
import { makeStyles } from '@material-ui/core/styles';

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
  picture: {
    paddingLeft: 100
  }

}));



export default function About() {
  const classes = useStyles();
    return (
        <div>
            <Container>
              <Grid 
               container
               direction= "row">
                 <Grid item item xs={6} sm={3}>
                   <Typography variant="h4">About Me</Typography>
                   <Typography variant="body">I am currently pursuing a Bachelor’s in Human-Computer Interaction at Carnegie Mellon. Previously, I was studying computer science, but I had a strong calling towards human-centered design and software and changed my major as a senior. My journey so far has given me the technical abilities to make my ideas a reality, I am now excited to cultivate the thinking and skills it takes to make those ideas user-experience focused.

My interest lies especially in the integration of diversity of thought, culture and perspectives into any project I am part of. Being from an interdisciplinary and international background myself, I like to adopt this diversity in every project I work on.</Typography>

              </Grid>
              <Grid item item xs={12} sm={6} className = {classes.picture}>
              <img height={300} src={me} />
              </Grid>
              </Grid>
</Container>
        </div>
    )
}