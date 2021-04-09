import React, { Component } from 'react'
import dataGhe from '../assets/danhSachGhe.json'
import { connect } from 'react-redux'

class DanhSachGhe extends Component {

    renderHangGhe = () => {
        return dataGhe.map((hangGhe, index) => {
            return <div key={index}>
                <span className="text-white">{hangGhe.hang}</span>
                {this.renderDanhSachGhe(hangGhe.danhSachGhe, hangGhe.hang)}
            </div>
        })
    }
    renderDanhSachGhe = (arr, hangGhe) => {
        return arr.map((ghe, index) => {
            let classGheDuocChon = ghe.daDat ? 'ghe gheDuocChon' : 'ghe';
            if (this.props.danhSachGheDangDat.findIndex((gheDaDat) => gheDaDat.soGhe == ghe.soGhe) != -1) {
                classGheDuocChon = "ghe gheDangChon";
            }
            return <button key={index} className={hangGhe == "" ? "rowNumber" : classGheDuocChon} onClick={() =>{this.props.addToSelection(ghe)}}>{ghe.soGhe}</button>
        })
    }

    render() {
        return (
            <div className="container mt-5">
                <h3 className="text-center text-white display-4">ĐẶT VÉ XEM PHIM CYBERSHOP</h3>
                <div className="text-center text-light">Màn Hình</div>
                <div className="screen"></div>

                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.baiTapDatVeReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addToSelection: (ghe) =>{
            const action = {
                type:'THEM_GHE_DANG_DAT',
                gheChon:ghe
            };
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachGhe)