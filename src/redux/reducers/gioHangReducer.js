const stateDefault = {
    gioHang: []
}


export const gioHangReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            console.log(action)

            let gioHangCapNhat = [...state.gioHang];

            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
            if (index !== -1) {
                gioHangCapNhat[index].soLuong += 1;
            } else {
                gioHangCapNhat.push(action.spGioHang);
            }
            //cập nhật lại state tương ứng setState
            state.gioHang = gioHangCapNhat;
            return { ...state }
        }

        case 'XOA_PRODUCT':{
            let gioHangCapNhat = [...state.gioHang];
            gioHangCapNhat.splice(action.spIndex, 1);
            state.gioHang = gioHangCapNhat;
            return {...state}
        }

        case 'INCREMENT_PRODUCT':{
            let gioHangCapNhat = [...state.gioHang];
            if (action.isAdd){
                gioHangCapNhat[action.spIndex].soLuong++;
            }else{
                if (gioHangCapNhat[action.spIndex].soLuong > 0){
                    gioHangCapNhat[action.spIndex].soLuong--;
                }
            }
            state.gioHang = gioHangCapNhat;
            return {...state}
        }
    }
    return state;
}