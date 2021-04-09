const initialState = {
    listSinhVien: [
        { maSinhVien: 1, tenSinhVien: 'Nguyễn Văn A', soDienThoai: '0909090900', email: 'nguyenvana@gmail.com' },
        { maSinhVien: 2, tenSinhVien: 'Nguyễn Văn B', soDienThoai: '0912313120', email: 'nguyenvanb@gmail.com' }

    ], //dữ liệu sinh viên của table
    sinhVienSua: {
    },
    isFix: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'THEM_SV': {

            let updateList = [...state.listSinhVien];
            let index = (updateList.findIndex((sv) => sv.maSinhVien == action.sinhVien.maSinhVien))
            if (!state.isFix) {
                if (index == -1) {
                    updateList.push(action.sinhVien);
                }
                else {

                    alert('mã SV đã tồn tại')
                }
                updateList.sort((a, b) => { return a.maSinhVien - b.maSinhVien })
                state.listSinhVien = updateList;
            }
            else {
                state.listSinhVien[index] = action.sinhVien;
            }


            return { ...state };

        }
        case 'XOA_SV': {
            const updateList = [...state.listSinhVien.filter(sv => sv.maSinhVien !== action.sv.maSinhVien)];
            state.listSinhVien = updateList;
            return { ...state }
        } case 'SUA_SV': {
            const sinhVienSuaUpdate = { ...state.listSinhVien.find(sv => sv.maSinhVien == action.maSinhVien) };
            state.sinhVienSua = sinhVienSuaUpdate;
            state.isFix = true;
            return { ...state }
        }
        case 'UPDATE_SV': {
            let updateList = [...state.listSinhVien];
            console.log(action.sinhVien)
            let svUpdate = updateList.findIndex((sv) => sv.maSinhVien == action.sinhVien.maSinhVien);
            if (svUpdate != -1) {
                updateList[svUpdate] = action.sinhVien
            }

            state.listSinhVien = updateList;
            state.isFix = false;
            state.sinhVienSua = {};
            return { ...state }

        }
        default:
            return state
    }
}
