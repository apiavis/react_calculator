import React from 'react';
import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";

var result = 0;

class Calculator extends React.Component {
  constructor() {
    super()
    this.state = {
      display: 0
    }
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress(value) {
    this.setState(prevState => {
      if(value !== "=" && value !== "AC" && value !== "+/-" && value !== "%") {
        
        if(prevState.display === 0) {
          return {
            display: value
          }
        } else {
          return {
            display: prevState.display + value
          }
        }

      } else if (value === "+/-") {
        let currentDisplay = String(prevState.display);
        
        if ((currentDisplay.length === 1 || 
            currentDisplay[0] === "." || 
            currentDisplay[0] === "0") ||
            (!((currentDisplay).includes("+")) && 
            !((currentDisplay).includes("-")) &&
            !((currentDisplay).includes("x")) && 
            !((currentDisplay).includes("/")))) {
          return {
            display: "-" + prevState.display
          }
        } else {
          let negNumDisplay = currentDisplay.replace(currentDisplay[(currentDisplay.length) - 1],`-${currentDisplay[(currentDisplay.length) - 1]}`);
          return {
            display: negNumDisplay
          }
        }

      } else if (value === "%") {
        let currentDisplay = String(prevState.display);
        
        if ((currentDisplay).includes("+") ||
            (currentDisplay).includes("-") ||
            (currentDisplay).includes("x") || 
            (currentDisplay).includes("/")) {
              return {
                display: prevState.display
              }
        } else {
          return {
            display: (prevState.display / 100)
          }
        }

      } else if (value === "=") {
        let resultStr = prevState.display;
        
        if (resultStr[0] === "/" ||
            resultStr[0] === "x") {
            return {
              display: "ERR"
            }
        } else if
          (resultStr[(resultStr.length - 1)] === "+" ||
          resultStr[(resultStr.length - 1)] === "-" ||
          resultStr[(resultStr.length - 1)] === "/" ||
          resultStr[(resultStr.length - 1)] === "x") {
            return {
              display: resultStr
            }  
        } else {
          
          let currentNum = 0;
          let numArr = [];
          let operatorArr = [];
          
          for (let i = 0; i < resultStr.length; i++) {
            if (i === (resultStr.length - 1)) {
                currentNum += resultStr.charAt(i);
                numArr.push(Number(currentNum));
                currentNum = 0;
            } else if ((resultStr.charAt(i)) === "+" ||
                (resultStr.charAt(i)) === "-" ||
                (resultStr.charAt(i)) === "/" ||
                (resultStr.charAt(i)) === "x") {
                operatorArr.push(resultStr.charAt(i));
                numArr.push(Number(currentNum));
                currentNum = 0;
            } else {
                currentNum += resultStr.charAt(i);
            }
          }
          
          let num1 = numArr[0];
          
          for (let i = 0; i < operatorArr.length; i++) {
            if (operatorArr[i] === "+") {
              result = this.add(num1,numArr[i+1]);
              num1 = result;
            } 
            if (operatorArr[i] === "-") {
              result = this.subtract(num1,numArr[i+1]);
              num1 = result;
            }
            if (operatorArr[i] === "/") {
              result = this.divide(num1,numArr[i+1]);
              num1 = result;
            } 
            if (operatorArr[i] === "x") {
              result = this.multiply(num1,numArr[i+1]);
              num1 = result;
            } 
          }

          return {
            display: result
          }
        }

      } else {
        return {
          display: 0
        }
      }
    })
  }

  add(num1,num2) {
    return num1+num2;
  }

  subtract(num1,num2) {
    return num1-num2;
  }

  multiply(num1,num2) {
    return num1*num2;
  }

  divide(num1,num2) {
    return num1/num2;
  }
  
  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay display={this.state.display}/>
        <CalculatorButton 
          value="AC"
          className="calculator-btn btn-ac"
          handleButtonPress={this.handleButtonPress}
        />
        <CalculatorButton 
          value="+/-"
          className="calculator-btn btn-plus-minus"
          handleButtonPress={this.handleButtonPress}
        />
        <CalculatorButton 
          value="%"
          className="calculator-btn btn-percent"
          handleButtonPress={this.handleButtonPress}
        />
        <CalculatorButton 
          value="/"
          className="calculator-btn btn-divide btn-orange"
          handleButtonPress={this.handleButtonPress}
        />
        <CalculatorButton 
          value="x"
          className="calculator-btn btn-multiply btn-orange"
          handleButtonPress={this.handleButtonPress}
        />
        <CalculatorButton 
          value="-"
          className="calculator-btn btn-subtract btn-orange"
          handleButtonPress={this.handleButtonPress}
        />
        <CalculatorButton 
          value="+"
          className="calculator-btn btn-add btn-orange"
          handleButtonPress={this.handleButtonPress}
        />
        <CalculatorButton 
          value="="
          className="calculator-btn btn-equals btn-orange"
          handleButtonPress={this.handleButtonPress}
        />
        <CalculatorButton 
          value="."
          className="calculator-btn btn-decimal"
          handleButtonPress={this.handleButtonPress}
        />
        <CalculatorButton 
          value="1"
          className="calculator-btn btn-one"
          handleButtonPress={this.handleButtonPress}
        />
        <CalculatorButton 
          value="2"
          className="calculator-btn btn-two"
          handleButtonPress={this.handleButtonPress}
        />
        <CalculatorButton 
          value="3"
          className="calculator-btn btn-three"
          handleButtonPress={this.handleButtonPress}
        />
        <CalculatorButton 
          value="4"
          className="calculator-btn btn-four"
          handleButtonPress={this.handleButtonPress}
        />
        <CalculatorButton 
          value="5"
          className="calculator-btn btn-five"
          handleButtonPress={this.handleButtonPress}
        />
        <CalculatorButton 
          value="6"
          className="calculator-btn btn-six"
          handleButtonPress={this.handleButtonPress}
        />
        <CalculatorButton 
          value="7"
          className="calculator-btn btn-seven"
          handleButtonPress={this.handleButtonPress}
        />
        <CalculatorButton 
          value="8"
          className="calculator-btn btn-eight"
          handleButtonPress={this.handleButtonPress}
        />
        <CalculatorButton 
          value="9"
          className="calculator-btn btn-nine"
          handleButtonPress={this.handleButtonPress}
        />
        <CalculatorButton 
          value="0"
          className="calculator-btn btn-zero"
          handleButtonPress={this.handleButtonPress}
        />
      </div>
    );
  }
}

export default Calculator;