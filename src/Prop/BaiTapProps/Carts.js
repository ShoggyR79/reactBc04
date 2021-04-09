import React, { Component } from 'react'

export default class Carts extends Component {
    renderGioHang = () => {
        //lấy dữ liệu từ component
        let { gioHang, incrementAmount, removeFromCart } = this.props
        return gioHang.map((item, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{item.maSP}</td>
                <td>{item.tenSP}</td>

                <td><img src={item.hinhAnh} width="50" alt={item.tenSP}></img></td>

                <td><button className="btn btn-primary" onClick={() => {
                    incrementAmount(index, false)
                }}>-</button> {item.soLuong} <button className="btn btn-primary" onClick={() => {
                    incrementAmount(index, true)
                }}>+</button></td>

                <td>{item.giaBan.toLocaleString()}đ</td>

                <td>{(item.soLuong * item.giaBan).toLocaleString()}đ</td>

                <td><button className="btn btn-danger" onClick={() => {
                    removeFromCart(item.maSP);
                }}>Xóa</button></td>

            </tr>
        })
    }

    render() {
        // let{gioHang} = this.props

        return (
            <div className="container">
                <h1>Giỏ hàng (1)</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>stt</th>
                            <th>Mã SP</th>
                            <th>Hình ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}
