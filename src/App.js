import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import './style/footer.css'
import Auth from './pages/Auth';
import Admin from './pages/admin';
import withAuth from './withAuth';
import Landing from './pages/landing';
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path='/auth' exact component={Auth}/>
            <Route path='/admin' component={withAuth(Admin)}/>
            <Route path='/' >
              <Landing/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
