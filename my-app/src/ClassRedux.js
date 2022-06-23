import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class ClassRedux extends Component {
  render() {
    const { value, myIncrement,myDecrement } = this.props;
    console.log(this.props);
    return (
      <div className="react-redux">
        <h2>Class Component Redux</h2>
        <button onClick={myIncrement}>Increment</button>
        <p>{value}</p>
        <button onClick={myDecrement}>Decrement</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("STATES ALL", state);
  return {
    value: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
    return{ 
        myIncrement: () =>{
            dispatch({type: 'increment'})
        },
        myDecrement: () =>{
            dispatch({type: 'decrement'})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ClassRedux);
