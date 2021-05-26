import { Container, Paper, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../images/IMG_0017.JPG";
import ProfileImg from "../images/IMG_0482.JPG";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    top: 0
  },
  main: {
    marginBottom: 30,
    padding: 40,
  },
  mainP: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 30,
    marginTop: 250
  },
  profileImg: {
    backgroundImage: `url(${ProfileImg})`,
    height: "250px",
    width: "450px",
    margin: 0,
    display: "inline-block"
  },
  Paragraph: {
    paddingTop: "30px",
    borderTop: '8px solid darkRed',
    margin: 0
  },
  mainName: {
    fontSize: 50,
    justifyContent: "flex-end",
    display: "inline",
    marginLeft: "15px",
  },
  Container: {
    marginBottom: "30px", 
    padding: "0"
  }
});

const Inspiration = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.main}>
        <Paper className={classes.mainP}>

          <Container className={classes.Container}>
              <Box className={classes.mainName} >Inspiration</Box>
          </Container>

              <Typography className={classes.Paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor orci eu lobortis elementum nibh. Nunc sed velit dignissim sodales. Justo donec enim diam vulputate ut pharetra. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Eget mauris pharetra et ultrices neque ornare. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Ac ut consequat semper viverra. Montes nascetur ridiculus mus mauris vitae ultricies leo. Eget nunc lobortis mattis aliquam faucibus. Vitae nunc sed velit dignissim sodales ut eu sem integer. Ac turpis egestas sed tempus urna et. Semper quis lectus nulla at. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Elementum facilisis leo vel fringilla est ullamcorper eget.
              <br></br>
              A diam maecenas sed enim ut sem viverra aliquet. Sed ullamcorper morbi tincidunt ornare massa eget. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Enim sit amet venenatis urna cursus eget nunc. Ut aliquam purus sit amet luctus. Tincidunt dui ut ornare lectus sit amet. Et ligula ullamcorper malesuada proin libero nunc. Non tellus orci ac auctor. Sociis natoque penatibus et magnis dis parturient montes nascetur. Morbi tristique senectus et netus. In hac habitasse platea dictumst vestibulum. Ornare aenean euismod elementum nisi. Quam viverra orci sagittis eu volutpat odio facilisis.
              <br></br>
              <br></br>
              Diam donec adipiscing tristique risus nec. Nibh ipsum consequat nisl vel pretium lectus. Habitant morbi tristique senectus et netus. Feugiat nibh sed pulvinar proin gravida hendrerit. Sit amet consectetur adipiscing elit duis. Vulputate odio ut enim blandit volutpat. Ut diam quam nulla porttitor massa id. Sagittis purus sit amet volutpat consequat mauris nunc congue. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Aliquam sem et tortor consequat id porta nibh venenatis. 
              </Typography>

              
          </Paper>
      </Container>
    </div>
  );
};

export default Inspiration;