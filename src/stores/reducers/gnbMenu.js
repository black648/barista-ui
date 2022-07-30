import { createAction, handleActions } from 'redux-actions';

const CLOSE = 'gnbMenu/CLOSE';
//GNB 세팅
const SET_GNB_MENU_ITEMS = 'gnbMenu/SET_GNB_MENU_ITEMS';
//LNB 세팅
const SET_2DEPTH_CHILD_LNB_MENU_ITEMS = 'gnbMenu/SET_2DEPTH_CHILD_LNB_MENU_ITEMS';
//메뉴 초기화
const SET_MENU_ITEMS = 'gnbMenu/SET_MENU_ITEMS';

const SET_STATE = 'gnbMenu/SET_STATE';

const initialState = {
    menuItems: [],//메뉴리스트
    loadedMenuItems: [],//현재 탭 리스트
    activeMenuItem: null,//활성화 GNB 정보
    activeLnbMenuItem: null,//활성화 LNB 정보
    recentMenuItems: [],//최근사용 메뉴
    showNewPortal: window.location.hash === '#/',// newPortal 관련
    totalsearchLayerFlag: 'open'
};


export const close = createAction(CLOSE);
export const setGnbMenuItems = createAction(SET_GNB_MENU_ITEMS);
export const set2DepthChildLnbMenuItems = createAction(SET_2DEPTH_CHILD_LNB_MENU_ITEMS);
export const setMenuItems = createAction(SET_MENU_ITEMS);
export const setState = createAction(SET_STATE);

//handleActions
export default handleActions({
    [SET_STATE]: (state, action) => {
        return { ...state, ...action.payload };
    }

}, initialState);