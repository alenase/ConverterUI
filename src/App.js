import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import('./components/Home'));
const AboutAPI = lazy(() => import('./components/AboutAPI'));

const infoMap = new Map([
  ['EUR', 'евро'],
  ['CHF', 'швейцарский франк'],
  ['CZK', 'чешская крона'],
  ['GBP', 'британский фунт'],
  ['PLZ', 'польский злотый'],
  ['RUB', 'российский рубль'],
  ['USD', 'доллар США'],
  ['UAH', 'гривна']
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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  getData(date) {
    let result = axios.get(`https://api.privatbank.ua/p24api/exchange_rates?json&date=${date}`)
      .then(res => res.data.exchangeRate)
      .catch(error => alert('Something went wrong ' + error));
    return result;
  }

  async componentDidMount() {
    const date = new Date();
    let paramDate = `${date.getDate()}.${(date.getMonth() + 1)}.${date.getFullYear()}`;
    let responseData = await this.getData(paramDate);
    console.log('componentDidMount responseData', responseData);

    if (responseData === undefined) {
      paramDate = `${date.getDate() - 1}.${(date.getMonth() + 1)}.${date.getFullYear()}`;
      console.log(paramDate);
      responseData = await this.getData(paramDate);
      console.log(responseData);
    }

    responseData.shift();
    const correctData = responseData.filter(item => item.saleRate != null || item.currency === 'UAH');
    this.setState({ data: correctData });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <LoadBody data={this.state.data} infoMap={infoMap} pictureLinks={pictureLinks} />
        <Footer />
      </div>
    );
  }
}

export default App;
