import React, { Component } from 'react'

export default class DataBinding extends Component {


    sinhVien = {
        ma: 1,
        ten: 'nguyễn văn tèo'
    }

    renderSinhVien = () => {
        let sinhVien = {
            ma: 1,
            ten: "nguyễn văn a",
            hinhAnh: "https://picsum.photos/50/59"
        }
        return (
            <div className="card text-left">
                <img className="card-img-top" src={sinhVien.hinhAnh} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{sinhVien.ten}</h4>
                    <p className="card-text">{sinhVien.ma}</p>
                </div>
            </div>

        )
    }
    //DataBinding là cơ chế hiển thị dữ liệu lên thành phần giao diện
    render() {
        let name = 'Cybersoft';
        let product = {
            id: 1,
            name: 'IphoneX',
            price: 1000,
            img: 'https://picsum.photos/100/100'
        }

        let renderProduct = () => {
            return (<div><p>{product.name}</p></div>);
        }
        return (
            <div>
                <ul>
                    <li>Mã số sv: {this.sinhVien.ma}</li>
                    <li>Họ tên sinh viên: {this.sinhVien.ten}</li>
                </ul>
                <p id="title">{name}</p>
                <br />

                <div className="card text-left w-25">
                    <img className="card-img-top" src={product.img} alt="somepic" />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.id}</p>
                        <p className="card-text">{product.price}</p>
                        {renderProduct()}
                        {this.renderSinhVien()}

                    </div>
                </div>

            </div>
        )
    }
}
