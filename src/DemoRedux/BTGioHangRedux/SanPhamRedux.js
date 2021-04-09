import React, { Component } from 'react'
import { connect } from 'react-redux'

class SanPhamRedux extends Component {



    render() {
        console.log(this.props);
        let product = this.props.product
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" height="350" src={product.hinhAnh} alt={product.tenSP} />
                    <div className="card-body">
                        <h4 className="card-title">{product.tenSP}</h4>
                        <button className="btn btn-success" onClick={() => {
                            this.props.changeProductDetail(product)
                        }}>Xem chi tiết</button>
                        <button className="ml-2 btn btn-warning" onClick={() => {
                            this.props.addToCart(product)
                        }}>Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (spClick) => {
            // console.log(spClick)
            //từ spClick tạo ra sp giỏ hàng
            const spGioHang = {
                maSP: spClick.maSP, tenSP: spClick.tenSP, giaBan: spClick.giaBan, soLuong: 1, hinhAnh: spClick.hinhAnh
            };

            //đóng gói dữ liệu gửi lên sotre
            const action = {
                type: 'THEM_GIO_HANG', //đây là thuộc tính bắt buộc để reducer nhận biến giá trị xử lý
                spGioHang:spGioHang
            };
            dispatch(action);
        }

    }
}

//connect component with store
export default connect(null, mapDispatchToProps)(SanPhamRedux)