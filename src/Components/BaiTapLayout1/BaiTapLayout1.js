import React, { Component } from 'react'
import BT1Carousel from './BT1Carousel'
import BT1Header from './BT1Header'
import BT1Laptop from './BT1Laptop'
import BT1Promotion from './BT1Promotion'
import BT1SmarPhone from './BT1SmarPhone'

export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div className="bg-dark">
                <BT1Header></BT1Header>
                <BT1Carousel />
                <BT1SmarPhone />
                <BT1Laptop></BT1Laptop>
                <BT1Promotion></BT1Promotion>
            </div>
        )
    }
}
