import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {BrowserRouter as Router,
        Switch, Route, Link} 
from 'react-router-dom'
import Home from '../Pages/Home'
import Register from '../Pages/Register'
import User from '../Pages/User'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color:'whitesmoke',
      margin:8,
    },
    link:{
        textDecoration:'none',

    }
  }));

const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
                         <Router>

             <AppBar position="static">
                 <Toolbar>
                 <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>
                    News
                  </Typography>
                  <Link className={classes.link} to='/'>
                  <Typography variant="h6" className={classes.title}>
                 Home
                 </Typography>
                </Link>
                <Link className={classes.link} to='/register'>
                <Typography variant="h6" className={classes.title}>
                 Register
                 </Typography>
                </Link>
                <Link className={classes.link} to='/user'>
                <Typography variant="h6" className={classes.title}>
                 User
                 </Typography>
                </Link>
                 </Toolbar>
             </AppBar>
           
            <Switch>
                <Route path='/user'><User/></Route>
                <Route path='/register'><Register/></Route>
                <Route path='/'><Home/></Route>

            </Switch>
            </Router>
        </div>
    )
}

export default Navbar
