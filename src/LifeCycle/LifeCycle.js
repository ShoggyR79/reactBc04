import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class LifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            numberObj: {
                num:1
            }
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps')
        return currentState

    }

    shouldComponentUpdate(newProps, newState) {
        return this.state.number >= 10 ? false : true;
    }

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>Child component</h3>
                <ChildComponent numberObj={this.state.numberObj}/>
                
                <h1>{this.state.numberObj.num}</h1>
                <button className="btn btn-success" onClick={() => {
                    let numberObjUp = {...this.state.numberObj};
                    numberObjUp.num += 1;
                    this.setState({
                        numberObj: numberObjUp
                    })
                }}>+</button>
                <hr />
                
            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        //Hạn chế setState (muốn setState phải có if)
        console.log('componentDidUpdate')
    }

}
