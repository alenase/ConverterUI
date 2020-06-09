import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import('./components/Home'));
const AboutAPI = lazy(() => import('./components/AboutAPI'));


const data = [
  { id: 1, currency: "CHF", saleRateNB: 15.6389750, purchaseRateNB: 15.6389750 },
  { id: 2, currency: "EUR", saleRateNB: 18.7949200, purchaseRateNB: 18.7949200 },
  { id: 3, currency: "GBP", saleRateNB: 23.6324910, purchaseRateNB: 23.6324910 },
  { id: 4, currency: "PLZ", saleRateNB: 4.4922010, purchaseRateNB: 4.4922010 },
  { id: 5, currency: "RUB", saleRateNB: 0.3052700, purchaseRateNB: 0.3052700 },
  { id: 7, currency: "UAH", saleRateNB: 1.0000000, purchaseRateNB: 1.0000000 },
  { id: 8, currency: "USD", saleRateNB: 15.0564130, purchaseRateNB: 15.0564130 },
  { id: 9, currency: "CZK", saleRateNB: 15.0564130, purchaseRateNB: 15.0564130 }

];

const infoMap = new Map([
  ['EUR', 'Евро'],
  ['RUB', 'Российский рубль'],
  ['USD', 'Доллар США'],
  ['CHF', 'Швейцарский франк'],
  ['CZK', 'Чешская крона'],
  ['GBP', 'Фунт стерлингов'],
  ['PLZ', 'Польский злотый'],
  ['UAH', 'Гривна']
]);

const pictureLinks = [
  { id: 1, link: "https://picsum.photos/800/300" },
  { id: 2, link: "https://picsum.photos/801/301" },
  { id: 3, link: "https://picsum.photos/802/302" },
  { id: 4, link: "https://picsum.photos/803/303" }
];


function LoadBody(props) {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/about-api" component={() => <AboutAPI data={props.data}
            infoMap={infoMap} pictureLinks={props.pictureLinks} />} />
          <Route default render={() => <Home data={props.data} />} />
        </Switch>
      </Suspense>
    </Router>
  );
}

function App(props) {
  return (
    <div className="App">
      <Header />
      <LoadBody data={data} infoMap={infoMap} pictureLinks={pictureLinks} />
      <Footer />
    </div>
  );
}

export default App;
