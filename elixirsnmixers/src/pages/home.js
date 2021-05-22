import { Card, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../images/IMG_1976.JPG";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${Image})`, 
    backgroundSize: "cover",
    maxWidth: '100%',
    height: "200vh"
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
    </Card>
  );
};

export default Home;