import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './pages/main';
import Home from './pages/home';
import AboutMe from './pages/aboutMe';

//import PrivateRoute from "./utils/PrivateRoute";


function App() {

  return (
 
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/aboutme" component={AboutMe} />

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
