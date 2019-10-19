import React, * as react from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import './App.css';

import * as actions from "./Action";
import NumBtn from "./components/NumBtn";
import CalcBtn from "./components/CalcBtn";
import Result from "./components/Result";
import ClearAll from "./components/ClearAll";


class App extends react.Component {
  render() {
    const { calculator, actions } = this.props;
    return (
      <React.Fragment>
        <div className="calclator">
          <div>
            <Result result={calculator.showingResult
              ? calculator.resultValue : calculator.inputValue} />
          </div>
          <div className="topBtn">
            <ClearAll />
            <button>BS</button>
            <button></button>
            <span className="opBtn">
              <CalcBtn calcKey={"+"} onClick={() => actions.onPlusClick()} />
            </span>
          </div>

          <div>
            <NumBtn numKey={1} onClick={() => actions.onNumClick(1)} />
            <NumBtn numKey={2} onClick={() => actions.onNumClick(2)} />
            <NumBtn numKey={3} onClick={() => actions.onNumClick(3)} />
            <span className="opBtn">
              <CalcBtn calcKey={"-"} onClick={() => actions.onMinusClick()} />
            </span>
          </div>
          <div>
            <NumBtn numKey={4} onClick={() => actions.onNumClick(4)} />
            <NumBtn numKey={5} onClick={() => actions.onNumClick(5)} />
            <NumBtn numKey={6} onClick={() => actions.onNumClick(6)} />
            <span className="opBtn">
              <CalcBtn calcKey={"*"} onClick={() => actions.onMultiplyClick()} />
            </span>
          </div>
          <div>
            <NumBtn numKey={7} onClick={() => actions.onNumClick(7)} />
            <NumBtn numKey={8} onClick={() => actions.onNumClick(8)} />
            <NumBtn numKey={9} onClick={() => actions.onNumClick(9)} />
            <span className="opBtn">
              <CalcBtn calcKey={"/"} onClick={() => actions.onDivideClick()} />
            </span>
          </div>
          <div>
            <span className="underBtn">
              <NumBtn numKey={0} onClick={() => actions.onNumClick(0)} />
              <NumBtn numKey={"."} onClick={() => actions.onNumClick(".")} />
            </span>
            <CalcBtn calcKey={"="} onClick={() => actions.onEditClick()} />
            <button></button>

          </div>
          <div>

          </div>
        </div>

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  calculator: state.calculator,
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
