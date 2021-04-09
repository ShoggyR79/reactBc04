import React, { Component } from 'react'
//kết nối component với store từ redux
import { connect } from 'react-redux'
import BaiTapGiohangRedux from './BaiTapGiohangRedux'

class GioHangRedux extends Component {

    renderGioHang = () => {
        return this.props.gioHangProps.map((item, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{item.maSP}</td>
                <td>{item.tenSP}</td>

                <td><img src={item.hinhAnh} width="50" alt={item.tenSP}></img></td>

                <td><button className="btn btn-primary" onClick={() => {
                this.props.incrementValue(index, false)}}>-</button> {item.soLuong} <button className="btn btn-primary" onClick={() => {
                this.props.incrementValue(index, true)}}>+</button></td>

                <td>{item.giaBan.toLocaleString()}đ</td>

                <td>{(item.soLuong * item.giaBan).toLocaleString()}đ</td>

                <td><button className="btn btn-danger" onClick={() => {
                    this.props.xoaGioHang(index);
                }}>Xóa</button></td>

            </tr>
        })
    }
    render() {

        return (
            <div>
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
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => { //rootReducer => state tổng ứng dụng
    //hàm này tạo ra props từ state của redux
    return {
        gioHangProps: rootReducer.gioHangReducer.gioHang
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (index) =>{
            const action ={
                type: 'XOA_PRODUCT',
                spIndex: index
            };
            dispatch(action);
        },
        incrementValue: (index, isAdd) =>{
            const action = {
                type: 'INCREMENT_PRODUCT',
                spIndex: index,
                isAdd: isAdd,
            }
            dispatch(action);
        }
    }
}

//biến đổi BaiTapGioHangRedux thành BaiTapGioHang có kết nối với redux
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux)
