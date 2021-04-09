const stateDefault = {
    danhSachGheDangDat: [
        { soGhe: "D1", gia: 75000, daDat: false },
    ]
}

export const baiTapDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_GHE_DANG_DAT': {
            if (!action.gheChon.daDat) {
                let updateList = [...state.danhSachGheDangDat]
                let indexGhe = updateList.findIndex((ghe) => ghe.soGhe == action.gheChon.soGhe);
                if (indexGhe == -1) {
                    updateList.push(action.gheChon);
                }
                else {
                    updateList.splice(indexGhe, 1);
                }
                state.danhSachGheDangDat = updateList;
                return { ...state };
            }
        }
        case 'DELETE_SELECTION': {
            let updateList = [...state.danhSachGheDangDat]
            let indexGhe = updateList.findIndex((ghe) => ghe.soGhe == action.gheXoa.soGhe);
            updateList.splice(indexGhe, 1);
            state.danhSachGheDangDat = updateList;
            return { ...state };
        }
    }
    return { ...state };
}