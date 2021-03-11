import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () => {
        alert("hello bro");
    }

    showMess = name => {
        alert(`Hello ${name}`);
    }

    render() {
        return (
            <div>
                <button id="btnClick" onClick={this.handleClick}>Click me</button>
                <button id="btnClick" onClick={() => {
                    alert("hello bro");
                }}>Click me</button>


                <br />
                <button className="btn btn-success mt-2" onClick={() => {
                    this.showMess('Bruh')
                }}>Show message</button>
            </div>
        )
    }
}
