import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './pages/main';
import Home from './pages/home';
import AboutMe from './pages/aboutMe';
import Contact from './pages/contact';
import Recipes from './pages/recipes';
import Inspiration from './pages/inspiration';
import Recommendations from './pages/recommendations';

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
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/inspiration" component={Inspiration} />
          <Route exact path="/recommendations" component={Recommendations} />
        </Switch>  
      </div>
      <Footer />
    </Router>
  );
}

export default App;
