import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTinDatGhe extends Component {

    render() {
        return (
            <div className="text-light">
                <h1 className="display-4 text-center mb-5">Danh sách ghế đang chọn</h1>
                <div>
                    <button className="gheDuocChon"></button> Ghế đã đặt
                </div>
                <div>
                    <button className="gheDangChon"></button> Ghế đang chọn
                </div>
                <div>
                    <button className="ghe m-0"></button> Ghế chưa chọn
                </div>

                <table className="table text-white">
                    <thead>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.danhSachGheDangDat.map((ghe, index) => {
                            return <tr key={index}>
                                <th>{ghe.soGhe}</th>
                                <th>{ghe.gia.toLocaleString()}</th>
                                <th><button className="btn btn-warning" onClick={()=>this.props.deleteSelection(ghe)}>Xóa</button></th>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //lấy state danhSachGheDangDat từ reducer về tạo thành props component
    return {
        danhSachGheDangDat: state.baiTapDatVeReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        deleteSelection:(ghe) => {
            const action ={
                type: 'DELETE_SELECTION',
                gheXoa: ghe
            }
            dispatch(action) 
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);