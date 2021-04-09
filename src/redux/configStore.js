import { combineReducers, createStore } from 'redux';
import { baiTapDatVeReducer } from './reducers/baiTapDatVeReducer';

import {gioHangReducer} from './reducers/gioHangReducer'
import quanLySinhVienReducer from './reducers/quanLySinhVienReducer';

const rootReducer = combineReducers({

    gioHangReducer,
    baiTapDatVeReducer,
    quanLySinhVienReducer
})

export const store = createStore(rootReducer);