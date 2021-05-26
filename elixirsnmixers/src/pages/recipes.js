import { CardMedia, Container, Paper, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../images/IMG_1296.JPG";
import ImageTwo from "../images/IMG_0021.JPG";



const useStyles = makeStyles({
  picOne: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "0px 32%",
    top: 0,
    height: "600px",
  },
  picTwo: {
    backgroundImage: `url(${ImageTwo})`,
    backgroundSize: "cover",
    backgroundPosition: " 0px 30%",
    top: 0,
    height: "500px",
  },
});

const AboutMe = () => {
  const classes = useStyles();
  return (
      <div className={classes.container}>
          <CardMedia className={classes.picOne}>
              <Typography>Specialty Cocktails</Typography>
          </CardMedia>
          <Paper>

          </Paper>
          <CardMedia className={classes.picTwo}></CardMedia>
          <Paper>

          </Paper>
      </div>
  );
};

export default AboutMe;