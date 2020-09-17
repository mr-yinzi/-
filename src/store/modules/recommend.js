import {
    reqBanner,
    reqPersonalized,
    reqNewsong
} from "../../utils/request";

const initState = {
    //轮播图数据
    banner: [],
    // 推荐歌单
    personalized: [],
    newsong:[]
}

//reducer
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "changeBanner":
            return {
                ...state,
                banner: action.banner
            }
        case "changePersonalized":
             return {
                ...state,
                personalized: action.personalized
            }
        case "changeNewsong":
             return {
                ...state,
                newsong: action.newsong
        }
        default:
        return state;
    }
}
//actions
//修改banner
export const changeBannerAction = (banner) => {
    return {
        type: "changeBanner",
        banner
    }
}
//修改personalized
export const changePersonalizedAction = (personalized) => {
    return {
        type: "changePersonalized",
        personalized
    }
}
//newsong
export const changeNewsongAction = (newsong) => {
    return {
        type: "changeNewsong",
        newsong
    }
}



//组件触发请求banner action
export const reqBannerAction = () => {
    return (dispatch, getState) => {
        const {
            banner
        } = getState().recommend
        if (banner.length > 0) {
            return;
        }
        reqBanner().then(res => {
            dispatch(changeBannerAction(res.data.banners))
        })
    }
}
//personalized action
export const reqPersonalizedAction = () => {
    return (dispatch, getState) => {
        const {
            personalized
        } = getState().recommend
        if (personalized.length > 0) {
            return;
        }
        reqPersonalized().then(res => {
            dispatch(changePersonalizedAction(res.data.result))
        })
    }
}
//newsong action
export const reqNewsongAction = () => {
    return (dispatch, getState) => {
        const {
            newsong
        } = getState().recommend
        if (newsong.length > 0) {
            return;
        }
        reqNewsong().then(res => {
            dispatch(changeNewsongAction(res.data.result))
        })
    }
}


//导出数据
export const banner = state => state.recommend.banner;
export const personalized = state => state.recommend.personalized;
export const newsong = state => state.recommend.newsong;
export default reducer;