import React, { Component } from 'react'
import BT3Content from './BT3Content'
import BT3Footer from './BT3Footer'
import Header from './Header'

export default class BaiTapthucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <BT3Content />
                <BT3Footer />
            </div>
        )
    }
}
