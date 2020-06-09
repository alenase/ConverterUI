import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import('./components/Home'));
const AboutAPI = lazy(() => import('./components/AboutAPI'));

const data = [
  { id: 1, "currency": "CHF", "saleRateNB": 27.8308000, "purchaseRateNB": 27.8308000, "saleRate": 28.4500000, "purchaseRate": 26.5500000 },
  { id: 2, "currency": "CZK", "saleRateNB": 1.1264000, "purchaseRateNB": 1.1264000, "saleRate": 1.1400000, "purchaseRate": 0.9500000 },
  { id: 3, "currency": "EUR", "saleRateNB": 29.9975000, "purchaseRateNB": 29.9975000, "saleRate": 30.3100000, "purchaseRate": 29.5000000 },
  { id: 4, "currency": "GBP", "saleRateNB": 33.4786000, "purchaseRateNB": 33.4786000, "saleRate": 34.2000000, "purchaseRate": 32.2000000 },
  { id: 5, "currency": "PLZ", "saleRateNB": 6.7665000, "purchaseRateNB": 6.7665000, "saleRate": 6.8500000, "purchaseRate": 6.050000 },
  { id: 6, "currency": "RUB", "saleRateNB": 0.3855700, "purchaseRateNB": 0.3855700, "saleRate": 0.3900000, "purchaseRate": 0.3600000 },
  { id: 7, "currency": "USD", "saleRateNB": 26.6953000, "purchaseRateNB": 26.6953000, "saleRate": 26.8500000, "purchaseRate": 26.4500000 }
];

const infoMap = new Map([
  ['EUR', 'евро'],
  ['CHF', 'швейцарский франк'],
  ['CZK', 'чешская крона'],
  ['GBP', 'британский фунт'],
  ['PLZ', 'польский злотый'],
  ['RUB', 'российский рубль'],
  ['USD', 'доллар США']
]);

const pictureLinks = [
  { id: 1, link: "https://www.geont.ru/assets/cache/images/images/sliders/costa_rica/costa_rica10-800x300-d02.jpg" },
  { id: 2, link: "https://iveron.ru/wp-content/uploads/2019/03/2-800x300.jpg" },
  { id: 3, link: "https://ladolcevita.com.ua/wp-content/uploads/2020/04/zamki-iz-Kharkova-800x300.jpg" },
  { id: 4, link: "https://www.geont.ru/assets/cache/images/images/sliders/costa_rica/costa_rica9-800x300-c71.jpg" }
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
