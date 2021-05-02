import React, { lazy, Suspense } from 'react';
// import { withAuthenticationRequired } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import custom from './theme';
import Skeleton from './components/WaitSkeleton';
//import { Layout  from '../../components/Layout/';

const Home = lazy(() => import('./views/Home'));
const Mitch = lazy(() => import('./views/Mitch'));

let theme = createMuiTheme(custom);
theme = responsiveFontSizes(theme);


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Suspense fallback={<Skeleton variant="default" />}>
            <Route exact path="/" component={Home} />
            <Route exact path="/mitch" component={Mitch} />
          </Suspense>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
