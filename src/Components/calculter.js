import React, { Component } from 'react';
import {connect} from 'react-redux';
import  Button from './button'


class calculter extends Component {
    render() {
        return (
            <div>
                <input type ="number"  onChange = { this.props.change1}/>
                <input type ="number"  onChange = { this.props.change2}/>
                <Button submitHandle = {this.props.submitHandle} submitMinus = {this.props.submitMinus} submitMultiply ={this.props.submitMultiply} submitDivied ={this.props.submitDivied} ></Button>
    
                <h1>{this.props.result}</h1>
            </div>
        );
    }
}
  const mapStateToProps = (state) => {
      return{
       num1: state.num1,
       num2: state.num2,
       result:state.result 
      }
  }

  const mapDispatchToProps = (dispatch) => ({
    change1:(e) => dispatch({type:'add1', val1:e.target.value}),
    change2:(e) => dispatch({type:'add2', val2:e.target.value}),
    submitHandle:() => dispatch({type:'submitHandle'}),
    submitMinus:() => dispatch({type:'submitMinus'}),
    submitMultiply:() => dispatch({type:'submitMultiply'}),
    submitDivied:() => dispatch({type:'submitDivied'})
  })


export default connect(mapStateToProps, mapDispatchToProps)(calculter);