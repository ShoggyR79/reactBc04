import React, { Component } from 'react'
import TableSinhVien from './TableSinhVien';
import { connect } from 'react-redux'


class FormReact extends Component {
    state = {
        values: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        },
        errors: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        }
    }

    handleChangeInput = (event) => {
        let { name, value } = event.target;

        //lấy typeProps (tên tự đặt) của thẻ để xác định email hay phone
        let typeProps = event.target.getAttribute('typeProps');
        let newValue = { ...this.state.values }

        newValue[name] = value;
        let newErrors = { ...this.state.errors }
        let errorMess = ''
        if (newValue[name] == "") {
            errorMess = 'Không được bỏ trống!'
        }
        if (typeProps == "email") {
            let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!regexEmail.test(value)) {
                errorMess = 'Email không hợp lệ'
            }
        }
        newErrors[name] = errorMess;
        this.setState({
            values: newValue,
            errors: newErrors
        }
            , () => {
                console.log(this.state)
            });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        //kiểm tra hợp lệ (all key in value != "", and all key in errors == "")
        let isLegal = true;
        let { values, errors } = this.state;
        for (let key in values) {
            if (values[key] == "") {
                isLegal = false;
                break;

            }
        }
        if (isLegal) {
            for (let key in errors) {
                if (errors[key] != "") {
                    isLegal = false;
                    break;
                }
            }
        }
        if (isLegal) {
            this.props.themSV(this.state.values)
        }
        else {
            alert("nah")
        }
    }
    componentWillReceiveProps(newProps) {
        //lấy dữ liệu từ props gán cho state
        this.setState({
            values: newProps.sinhVienSua
        })
    }

    render() {
        //giá trị input trên giao diện luôn luôn lấy từ state
        let { maSinhVien, tenSinhVien, soDienThoai, email } = this.state.values;
        let fixing = this.props.isFix
        let addClass = fixing ? "btn btn-success d-none" : "btn btn-success d-block";
        let updateClass = fixing ? "btn btn-primary d-block" : "btn btn-primary d-none"

        return (
            <div>
                <form className="container" onSubmit={this.handleSubmit}>
                    <div className="card text-white text-dark">
                        <h3 className="card-header bg-dark text-white">Thông tin sinh viên</h3>

                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <p>Mã SV</p>
                                        <input className="form-control" name="maSinhVien" placeholder="Nhập mã SV" onChange={this.handleChangeInput} value={maSinhVien} />
                                        <p className="text text-danger">{this.state.errors.maSinhVien}</p>
                                    </div>
                                    <div className="form-group">
                                        <p>Số điện thoại</p>
                                        <input className="form-control" name="soDienThoai" placeholder="Nhập SDT SV" onChange={this.handleChangeInput} value={soDienThoai} />
                                        <p className="text text-danger">{this.state.errors.soDienThoai}</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <p>Họ tên</p>
                                        <input className="form-control" name="tenSinhVien" placeholder="Nhập tên SV" onChange={this.handleChangeInput} value={tenSinhVien} />
                                        <p className="text text-danger">{this.state.errors.tenSinhVien}</p>
                                    </div>
                                    <div className="form-group">
                                        <p>Email</p>
                                        <input typeProps="email" type="email" className="form-control" name="email" placeholder="Nhập email SV" onChange={this.handleChangeInput} value={email} />
                                        <p className="text text-danger">{this.state.errors.email}</p>
                                    </div>
                                </div>
                            </div>
                            <button className={addClass}>Thêm sinh viên</button>
                            <button type="button" className={updateClass} onClick={() => {
                                this.props.suaSV(this.state.values)
                            }}>Cập nhật sinh viên</button>

                        </div>
                    </div>

                </form>

                <TableSinhVien />
            </div>

        )
    }
}

const mapStateToProp = (state) => {
    return {
        sinhVienSua: state.quanLySinhVienReducer.sinhVienSua,
        isFix: state.quanLySinhVienReducer.isFix
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        themSV: (sv) => {
            console.log(sv)
            const action = {
                type: 'THEM_SV',
                sinhVien: sv
            };
            dispatch(action);
        },
        suaSV: (sv) => {
            const action = {
                type: 'UPDATE_SV',
                sinhVien: sv
            }
            dispatch(action);
        }

    }
}


export default connect(mapStateToProp, mapDispatchToProps)(FormReact)