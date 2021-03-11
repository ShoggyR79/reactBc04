import React, { Component } from 'react'
import BT3Product from './BT3Product'

export default class BT3ProductList extends Component {
    render() {
        return (
            <div className="row text-center">
                <BT3Product/>
                <BT3Product/>
                <BT3Product/>
                <BT3Product/>
            </div>
        )
    }
}
