import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoadingPage from './components/LoadingPage'

const LoginPage = lazy(() => import('./pages/LoginPage'))
const HomePage = lazy(() => import('./pages/HomePage'))

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<LoadingPage />}>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/chapter'  component={HomePage} />
            <Route path='/course'  component={HomePage} />
            <Route path='/cities'  component={HomePage} />
            <Route path='/province'  component={HomePage} />
            <Route path='/quiz'  component={HomePage} />
            <Route path='/login' component={LoginPage} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
