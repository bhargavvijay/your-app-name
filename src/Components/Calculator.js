// Components/Calculator.js
import React, { Component } from 'react';
import './Calculator.css'; // Import the CSS file for styling


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
    };
  }

  handleButtonClick = (value) => {
    this.setState((prevState) => ({
      display: prevState.display === '0' ? String(value) : prevState.display + value,
    }));
  };

  handleClear = () => {
    this.setState({
      display: '0',
    });
  };

  handleCalculate = () => {
    try {
      this.setState((prevState) => ({
        display: eval(prevState.display).toString(),
      }));
    } catch (error) {
      this.setState({
        display: 'Error',
      });
    }
  };

  render() {
    return (
      <div className="calculator-container">
        <input type="text" value={this.state.display} readOnly />
        <div className="button-container">
          <button onClick={() => this.handleButtonClick(1)}>1</button>
          <button onClick={() => this.handleButtonClick(2)}>2</button>
          <button onClick={() => this.handleButtonClick(3)}>3</button>
          <button onClick={this.handleClear}>C</button>
        </div>
        <div className="button-container">
          <button onClick={() => this.handleButtonClick(4)}>4</button>
          <button onClick={() => this.handleButtonClick(5)}>5</button>
          <button onClick={() => this.handleButtonClick(6)}>6</button>
          <button onClick={() => this.handleButtonClick('+')}>+</button>
        </div>
        <div className="button-container">
          <button onClick={() => this.handleButtonClick(7)}>7</button>
          <button onClick={() => this.handleButtonClick(8)}>8</button>
          <button onClick={() => this.handleButtonClick(9)}>9</button>
          <button onClick={() => this.handleButtonClick('-')}>-</button>
        </div>
        <div className="button-container">
          <button onClick={() => this.handleButtonClick(0)}>0</button>
          <button onClick={() => this.handleCalculate()}>=</button>
          <button onClick={() => this.handleButtonClick('*')}>*</button>
          <button onClick={() => this.handleButtonClick('/')}>/</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
