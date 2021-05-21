import { Container, Paper, Typography, Button } from "@material-ui/core";

const Main = () => {
  return (
    <Container>
        <br/>
        <Paper>
            <Typography>Elixirs and Mixers</Typography>
            <Container>
            <Typography> Are you over 21?</Typography>
            <Button href="/home">
              yes
            </Button>

            <Button href="https://blippi.com/">
              no
            </Button>
            </Container>
        </Paper>
    </Container>
  );
};

export default Main;