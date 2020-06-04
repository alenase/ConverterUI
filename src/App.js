import React, { Suspense, lazy }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import('./components/Home'));
const AboutAPI = lazy(() => import('./components/AboutAPI'));

const LoadBody = () => (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/about-api" component={AboutAPI} />
          <Route default component={Home} />
        </Switch>
      </Suspense>
    </Router>
);

function App() {
  return (
    <div className="App">
          <Header/>
            <LoadBody/>
           <Footer/>
    </div>
  );
}

export default App;
