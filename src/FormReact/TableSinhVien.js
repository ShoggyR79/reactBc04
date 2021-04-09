import React, { Component } from 'react'
import { connect } from 'react-redux'


class TableSinhVien extends Component {
    renderSV = () => {
        return this.props.listSinhVien.map((sv, index) => {
            return <tr>
                <td>{sv.maSinhVien}</td>
                <td>{sv.tenSinhVien}</td>
                <td>{sv.soDienThoai}</td>
                <td>{sv.email}</td>
                <td><button className="btn btn-warning" onClick={() => {
                    this.props.dispatch({
                        type: 'SUA_SV',
                        maSinhVien: sv.maSinhVien
                    })
                }}>Sửa</button> <button className="btn btn-danger" onClick={() => {
                    this.props.dispatch({
                        type: 'XOA_SV',
                        maSinhVien: sv.maSinhVien
                    })
                }}>Xóa</button>
                </td>

            </tr>
        })
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Mã SV</th>
                            <th>Họ tên</th>
                            <th>SDT</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSV()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProp = (state) => {
    return {
        listSinhVien: state.quanLySinhVienReducer.listSinhVien
    }

}


export default connect(mapStateToProp)(TableSinhVien)