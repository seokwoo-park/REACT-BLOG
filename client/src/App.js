import { TopBar, Home, Single, Write, Settings, Login, Signup  } from './components/index.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  const user = false;

  return (
    <Router>
      <TopBar/>
      
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/signup">
          { user ? <Home/> : <Signup/> }
        </Route>

        <Route exact path="/login">
        { user ? <Home/> : <Login/> }
        </Route>

        <Route exact path="/write">
          { user ? <Write/> : <Home/> }
        </Route>

        <Route exact path="/settings">
        { user ? <Settings/> : <Home/> }
        </Route>

        <Route exact path="/post/:postId">
          <Single/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
