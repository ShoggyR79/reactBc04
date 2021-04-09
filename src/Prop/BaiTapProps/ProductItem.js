import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {

        let { product, changeProductDetail, addToCart } = this.props

        return (

            <div>
                <div className="card">
                    <img className="card-img-top" height="350" src={product.hinhAnh} alt={product.tenSP} />
                    <div className="card-body">
                        <h4 className="card-title">{product.tenSP}</h4>
                        <button className="btn btn-success" onClick={() => {
                            changeProductDetail(product)
                        }}>Xem chi tiết</button>
                        <button className="ml-2 btn btn-warning" onClick={() => {
                            addToCart(product)
                        }}>Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
