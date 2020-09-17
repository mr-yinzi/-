import {
    reqSearchHot,
    reqSearchMul
} from "../../utils/request";

const initState = {
    data: [],
    isShow: true,
    searchMul: [],
    iptValue:""
}

//reducer
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "changeSearchHot":
            return {
                ...state,
                data: action.data
            }
            case "changeisShow":
                return {
                    ...state,
                    isShow: action.bool
                }
                case "changeSearchMul":
                    return {
                        ...state,
                        searchMul: action.data
                    }
                    case "changeiptValue":
                    return {
                        ...state,
                        iptValue: action.data
                    }
                    default:
                        return state;
    }
}
//actions
//修改
export const changeSearchHotAction = data => {
    return {
        type: "changeSearchHot",
        data
    }
}
export const changeisShowAction = bool => ({
    type: "changeisShow",
    bool
})
export const changeSearchMulAction = data => {
    return {
        type: "changeSearchMul",
        data
    }
}
export const changeiptValueAction = data => {
    return {
        type: "changeiptValue",
        data
    }
}
export const reqSearchHotAction = () => {
    return (dispatch, getState) => {
        const {
            searchHot
        } = getState().search
        if (searchHot) {
            return;
        }
        reqSearchHot().then(res => {
            dispatch(changeSearchHotAction(res.data.result))
        })
    }
}
export const reqSearchMulAction = (keywords) => {
    return (dispatch, getState) => {
        const {data}=getState().search
        if(keywords===data.keywords){
            return;
        }else{
            dispatch(changeSearchMulAction({}))
        }
        reqSearchMul(keywords).then(res => {
            dispatch(changeSearchMulAction(res.data.result))
        })
    }
}

//导出数据
export const searchHot = state => state.search.data;
export const searchMul = state => state.search.searchMul;
export const isShow = state => state.search.isShow;
export const iptValue = state => state.search.iptValue;
export default reducer;