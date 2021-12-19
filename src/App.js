import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import Discover from './pages/Discover'
import FinishedBooks from './pages/FinishedBooks'
import ReadingList from './pages/ReadingList'
import { AuthProvider, PrivateRoute } from './lib/auth'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Discover} />
          <Route path="/reading" component={ReadingList} />
          <Route path="/finish" component={FinishedBooks} />
          {/* <PrivateRoute exact path="/" component={Discover} />
          <PrivateRoute path="/reading" component={ReadingList} />
          <PrivateRoute path="/finish" component={FinishedBooks} /> */}
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App
