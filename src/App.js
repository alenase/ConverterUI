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
  { id: 6, currency: "SEK", saleRateNB: 2.0283750, purchaseRateNB: 2.0283750 },
  { id: 7, currency: "UAH", saleRateNB: 1.0000000, purchaseRateNB: 1.0000000 },
  { id: 8, currency: "USD", saleRateNB: 15.0564130, purchaseRateNB: 15.0564130 },
  { id: 9, currency: "XAU", saleRateNB: 17747.7470000, purchaseRateNB: 17747.7470000 },
  { id: 10, currency: "CAD", saleRateNB: 13.2107400, purchaseRateNB: 13.2107400 }

];

const infoMap = new Map([
  ['EUR', 'евро'],
  ['RUB', 'российский рубль'],
  ['USD', 'доллар США']
]);

const pictureLinks = [
  { id: 1, link: "https://www.geont.ru/assets/cache/images/images/sliders/costa_rica/costa_rica10-800x300-d02.jpg" },
  { id: 2, link: "https://iveron.ru/wp-content/uploads/2019/03/2-800x300.jpg" },
  { id: 3, link: "https://lh3.googleusercontent.com/proxy/glnBjS5LI3qxYaokA_d9tvrPjmfcW3FY39Qmt55l07z6Yz86Mgaqnh61_6LBMElDREIpsMdwEBlPJAvE0RioHf5Ylms_isG4dHW1OQvyLFY6cJYGW_mUbZ8mANX_onXK-1gtawijjL4" },
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
