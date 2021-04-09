import React, { Component } from 'react'
import SanPhamProps from './SanPhamProps'

export default class DanhSachSanPhamProps extends Component {
    productList = [
        { id: 1, name: 'Iphone X', price: 1000, img: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg' },
        { id: 2, name: 'Iphone 11', price: 1100, img: "http://tanphatmobile.vn/hinh-anh/san-pham/1_55_5.jpg" },
        { id: 3, name: 'Iphone 12', price: 1300, img: 'https://salt.tikicdn.com/cache/w444/ts/product/0f/4a/19/e2c1e692c76e5aeb99baa2dcef13cdcb.jpg' },
    ]

    renderSanPham = () => {
        return this.productList.map((sanPham, index) => {
            return <div className="col-4" key={index}>
                <SanPhamProps sp={sanPham}></SanPhamProps>
            </div>
        })
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    {this.renderSanPham()}
                </div>


            </div>
        )
    }
}
