//IMPORTANT- Get expandable information to be scrollable
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import image from '../images/IMG_1296.JPG';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    overflowY: "auto"
  },
  media: {
    height: 250,
    
    backgroundImage: `url(${image})`
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    overflowY: "auto"
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title=" Aviation  cocktail (example)"
      />
      <CardMedia
        className={classes.media}
        title="Aviation cocktail"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        The aviation cocktail is a zippy bracing cocktail with hints of queencharolete  
        flower from the alps which add floral almost lavender notes. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" title="favorite">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          <Typography paragraph>
             2 oz well gin/Plymouth works great btw
            .75 lemon
            .5 luxardo maraschino
            .25 creme de violette/1/2 bar spoon of creme Yvette add.25 simple if using yvette
            Shake Double Strain (SDS)
            Up 
            Skewer cherry
          </Typography>
          <Typography paragraph> Directions:</Typography>
          <Typography paragraph>
            Add ingredient into a shaker tin. Fill with ice.
            Shake until the outside of the shaker starts to look frosty, usually about 15 shakes.
            Double strain, into a chilled martini glass
            Garnish.
            Serve or enjoy immediate.
          </Typography>
          <Typography paragraph>Notes from the bartender:</Typography>
          <Typography paragraph>
          . Maraschino is also used to sweeten the drink made from the marasca cherry a recipe from the 1821 which also has a touch of nuttiness 
          from being aged in wooden vats. Always use fresh lemon juice. Juicing the fruit right before making the drink will result in the best possible drink. Fortifying all 
          hose ingredients with a juniper flavored distillate gin, which normally has noted of citrus peel along with the prominent gin flavor.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
