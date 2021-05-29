import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import SwipeableTemporaryDrawer from './Drawer';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(() => ({
  AppBar: {
    backgroundColor: 'rgba(255, 0, 0, 0.6)',
    height: 70,
    marginTop: 150,
    justifyContent: "flex-end"
  },
  root: {
    position: 'fixed',
    bottom: 30,
    right: 20
  },
  header: {
    fontSize: 50,
    top: 30,
    color: 'rgba(255, 255, 255, 0.5)',
    paddingLeft: "20px"
  },
  menuIcon: {
    display: "flex",
    justifyContent: "flex-end"
  }

}));

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
  const classes = useStyles();
  return (
    
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>


      <AppBar className={classes.AppBar} >
        <Typography className={classes.header}>Elixirs and Mixers

        <Toolbar className={classes.menuIcon} >
          <SwipeableTemporaryDrawer />
        </Toolbar>
        
        </Typography>
        </AppBar>
      
        
      </HideOnScroll>
      <Container id="back-to-top-anchor"  style={{height: "0px"}}/>

      <ScrollTop {...props} >
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
