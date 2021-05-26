import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import LooksIcon from '@material-ui/icons/Looks';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        {['Home'].map((text) => (
          <ListItem button component="a" href="/home" key={text}>
            <ListItemIcon><HomeTwoToneIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {['About Me'].map((text) => (
          <ListItem button component="a" href="/aboutme" key={text}>
            <ListItemIcon><FilterVintageIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['Recipes'].map((text) => (
          <ListItem button component="a" href="/recipes" key={text}>
            <ListItemIcon><LooksIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['Inspiration'].map((text) => (
          <ListItem button component="a" href="/inspiration" key={text}>
            <ListItemIcon><FilterVintageIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['Contact Me'].map((text) => (
          <ListItem button component="a" href="/contact" key={text}>
            <ListItemIcon><LooksIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment key={'right'}>
          <Button onClick={toggleDrawer('right', true)}><MenuIcon fontSize="large" /></Button>
          <SwipeableDrawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
