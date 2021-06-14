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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import image from '../images/IMG_1296.JPG';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    
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
    
  },
  label: {
    textDecoration: "underline"
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {drinkName, description, directions, ingredients, barNotes} = props;

  return (
    <Card className={classes.root}>
      <CardHeader title={drinkName}> </CardHeader>
      <CardMedia
        className={classes.media} />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {description}
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
          <Typography>Recipe here</Typography>
          <ExpandMoreIcon/>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className={classes.label}>Ingredients:</Typography>
          <Typography paragraph>
          {ingredients}
          </Typography>
          <Typography paragraph className={classes.label}> Directions:</Typography>
          <Typography paragraph>
          {directions}
          </Typography>
          <Typography paragraph className={classes.label}>Notes from the bartender:</Typography>
          <Typography paragraph>
          {barNotes}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
