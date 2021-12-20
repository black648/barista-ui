import { createAction, handleActions } from "redux-actions";

const SETMEMBER = "member/SETMEMBER";

export const setMember = createAction(SETMEMBER);

const initialState = {
    email: "",
    mberName: "",
    mberNo: null,
    tokenKey: "",
    member: {
        mberNo: "", // 그룹 시퀀스
        mberName: "", // 포탈 로그인 아이디
        mberId: "", // 사용자 시퀀스
        mberSe: "", // 사용자 명
        email: "", // 사용 언어
    }
};

export default handleActions(
    {
        [SETMEMBER]: (state, action) => {
            console.log("member.SETMEMBER", action.payload);

            return { ...state, ...action.payload };
        }
    },
    initialState
);
