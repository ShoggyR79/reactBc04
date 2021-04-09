import React, { Component } from 'react'
import Carts from './Carts'
import ProductItem from './ProductItem'

// eslint-disable-next-line import/no-anonymous-default-export
export default class
    extends Component {

    arrProduct = [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },

        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },

        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    ]

    state = {
        productDetail: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },
        gioHang: [

        ]
    }

    renderProduct = () => {
        return this.arrProduct.map((product, index) => {
            return <div className="col-4" key={index}>
                <ProductItem changeProductDetail={this.changeProductDetail} product={product} addToCart={this.addToCart}></ProductItem>
            </div>
        })
    }

    changeProductDetail = (product) => {
        this.setState({
            productDetail: product
        })
    }

    incrementAmount = (index, isAdd) => {
        let newGioHang = this.state.gioHang;
        if (isAdd) {
            newGioHang[index].soLuong++;
        }
        else {
            if (newGioHang[index].soLuong !== 0) {
                newGioHang[index].soLuong--;
            }
            else {
                alert('số lượng phải lớn hơn 0')
            }
        }
        this.setState({
            gioHang: newGioHang
        })
    }

    addToCart = (product) => {
        let findResult = this.state.gioHang.findIndex((item) => (item.maSP === product.maSP));
        if (findResult >= 0) {
            this.incrementAmount(findResult, true);
        }
        else {
            let newProduct = {
                maSP: product.maSP, tenSP: product.tenSP, giaBan: product.giaBan, soLuong: 1, hinhAnh: product.hinhAnh
            }
            let newGioHang = [...this.state.gioHang, newProduct]
            this.setState({
                gioHang: newGioHang
            })
        }

    }
    // removeFromCart = (index) => {
    //     let newGioHang = this.state.gioHang;
    //     newGioHang.splice(index, 1);
    //     this.setState({
    //         gioHang: newGioHang
    //     })

    // }
    removeFromCart = (maSP) => {
        let newGioHang = [...this.state.gioHang];
        newGioHang.splice(newGioHang.findIndex((item) => {
            return item.maSP == maSP
        }), 1);
        this.setState({
            gioHang: newGioHang
        })

    }
    render() {
        let { hinhAnh, ram, rom, manHinh, cameraSau, cameraTruoc, heDieuHanh, giaBan } = this.state.productDetail;

        return (
            <div className="container">

                <Carts gioHang={this.state.gioHang} incrementAmount={this.incrementAmount} removeFromCart={this.removeFromCart} />
                <h3 className="text-center display-4">Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderProduct()}
                </div>
                <div className="productDetail mt-2">
                    <div className="row">
                        <div className="col-4">
                            <h3 className="text-center">VinSmart Live</h3>
                            <img src={hinhAnh} height="400" alt="" />
                        </div>
                        <div className="col-8">
                            <h3>Thông số kỹ thuật</h3>
                            <table className="table mt-4">
                                <thead>
                                    <tr>
                                        <td>Màn Hình</td>
                                        <td>{manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ Điều Hành</td>
                                        <td>{heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera Trước</td>
                                        <td>{cameraTruoc}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera Sau</td>
                                        <td>{cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <td>RAM</td>
                                        <td>{ram}</td>
                                    </tr>
                                    <tr>
                                        <td>ROM</td>
                                        <td>{rom}</td>
                                    </tr>
                                    <tr>
                                        <td>Giá</td>
                                        <td>{giaBan.toLocaleString()}đ</td>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}
