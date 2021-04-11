import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header';
import Hire from './components/Hire';
import Projects from './components/Projects';
import ShowCase from './components/ShowCase';

function App() {
  return (
    <Router>
      <Header />
       <Route path="/" exact>
         <ShowCase />
       </Route>
       <Route path="/projects" exact>
         <Projects />
       </Route>
       <Route path="/hire" exact>
         <Hire />
       </Route>
    </Router>
  );
}

export default App;
