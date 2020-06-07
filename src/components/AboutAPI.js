import React from 'react';
import '../App.css';
import '../styles/about_api.css';
import TableInfo from './TableInfo';
import Container from 'react-bootstrap/Container';
import Slider from './Slider';

const data = [
  {"baseCurrency":"UAH","saleRateNB":18.4478000,"purchaseRateNB":18.4478000},
  {"baseCurrency":"UAH","currency":"EUR","saleRateNB":29.9975000,"purchaseRateNB":29.9975000,"saleRate":30.3100000,"purchaseRate":29.5000000},    
  {"baseCurrency":"UAH","currency":"RUB","saleRateNB":0.3855700,"purchaseRateNB":0.3855700,"saleRate":0.3900000,"purchaseRate":0.3600000},    
  {"baseCurrency":"UAH","currency":"USD","saleRateNB":26.6953000,"purchaseRateNB":26.6953000,"saleRate":26.8500000,"purchaseRate":26.4500000}
];

const infoMap = new Map([
  ['EUR', 'евро'],
  ['RUB', 'российский рубль'],
  ['USD', 'доллар США']
]);

const pictureLinks = [
  {id: 1, link: "https://www.geont.ru/assets/cache/images/images/sliders/costa_rica/costa_rica10-800x300-d02.jpg"},
  {id: 2, link: "https://iveron.ru/wp-content/uploads/2019/03/2-800x300.jpg"},
  {id: 3, link: "https://lh3.googleusercontent.com/proxy/glnBjS5LI3qxYaokA_d9tvrPjmfcW3FY39Qmt55l07z6Yz86Mgaqnh61_6LBMElDREIpsMdwEBlPJAvE0RioHf5Ylms_isG4dHW1OQvyLFY6cJYGW_mUbZ8mANX_onXK-1gtawijjL4"},
  {id: 4, link: "https://www.geont.ru/assets/cache/images/images/sliders/costa_rica/costa_rica9-800x300-c71.jpg"}
];

function AboutAPI() {
  return (
    <Container id="Body">
      <h1>Privat Api</h1>
      <div>
        <h4>Наш сайт позволяет производить конвертацию между следующими валютами</h4>
        <div>
          <h6 align="left">Cписок доступных валют:</h6>
          <TableInfo data={data} info={infoMap}/>
        </div>
      </div>
      <Slider pictures={pictureLinks}/>
    </Container>
  );
}

export default AboutAPI;
