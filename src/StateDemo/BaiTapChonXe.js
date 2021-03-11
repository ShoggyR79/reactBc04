import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        src: "./img/car/products/black-car.jpg"
    }

    changeCarColor = (color) => {
        this.setState({
            src: `./img/car/products/${color}-car.jpg`
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="display-4">Bài tập chọn xe</h1>
                <div className="row">
                    <div className="col-6">
                        <img src={this.state.src} className="w-100" />
                    </div>
                    <div className="col-6">
                        <button className="btn" style={{
                            backgroundColor: 'red',
                            cursor: 'pointer'
                        }} onClick={() => {
                            this.changeCarColor('red')
                        }

                        }>Red Color</button>

                        <button className="btn ml-3" style={{
                            backgroundColor: 'silver',
                            cursor: 'pointer'
                        }} onClick={() => {
                            this.changeCarColor('silver')
                        }

                        }>Silver Color</button>

                        <button className="btn ml-3" style={{
                            backgroundColor: 'black',
                            cursor: 'pointer',
                            color: 'silver'
                        }} onClick={() => {
                            this.changeCarColor('black')

                        }
                        }>Black Color</button>

                        <button className="btn ml-3" style={{
                            backgroundColor: 'lightgray',
                            cursor: 'pointer',
                        }} onClick={() => {
                            this.changeCarColor('steel')

                        }
                        }>Steel Color</button>

                    </div>

                </div>
            </div >
        )
    }
}
