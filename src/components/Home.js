import React from 'react';
import '../App.css';
import FormCurrency from './FormCurrency';
import TableResult from './TableResult';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summ: 1,
      selectedCurrency: 'UAH',
      ifBuyCurrency: true,
      ifDisabledButtonKupit: 'success',
      ifDisabledButtonProdat: 'secondary',
    }

    this.handleSelectedCurrencyChange = this.handleSelectedCurrencyChange.bind(this);
    this.handleSummChange = this.handleSummChange.bind(this);
    this.handleBuyCurrencyFalse = this.handleBuyCurrencyFalse.bind(this);
    this.handleBuyCurrencyTrue = this.handleBuyCurrencyTrue.bind(this);

  }

  handleSelectedCurrencyChange(e) {
    this.setState({ selectedCurrency: e });
  }

  handleSummChange(e) {
    this.setState({ summ: e.target.value });
  }

  handleBuyCurrencyTrue(e) {
    this.setState({ ifBuyCurrency: true, ifDisabledButtonKupit: 'success', ifDisabledButtonProdat: 'secondary' })
  }

  handleBuyCurrencyFalse(e) {
    this.setState({ ifBuyCurrency: false, ifDisabledButtonKupit: 'secondary', ifDisabledButtonProdat: 'success' })
  }

  render() {
    return (
      <Container id="body">
        <FormCurrency data={this.props.data}
          stateValues={this.state}
          handleSummChange={this.handleSummChange}
          handleSelectedCurrencyChange={this.handleSelectedCurrencyChange}
          handleBuyCurrencyFalse={this.handleBuyCurrencyFalse}
          handleBuyCurrencyTrue={this.handleBuyCurrencyTrue}
        />
        <Row id="Row">
          <Col md={{ span: 5, offset: 3 }} sm={{ span: 0, offset: 3 }}>
            <TableResult data={this.props.data} stateValues={this.state} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
