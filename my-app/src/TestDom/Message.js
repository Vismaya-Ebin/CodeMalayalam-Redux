// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import React from "react";
export default class Message extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            show : false
        }
        
    }
    showParagraph = () =>{
        this.setState({show:!this.state.show})
    }
    render() {
      return (<React.Fragment>
            <a href="#" onClick={this.showParagraph}>Want to buy a new car?</a>
           {this.state.show ? <p>Call +11 22 33 44 now!</p> : null}
          </React.Fragment>);
    }
  }
  
  
  