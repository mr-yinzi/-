import { reqLyric,reqSongdetail,reqSongurl} from "../../utils/request";

const initState = {
    data: {},
    detail:{},
    url:{},
    playstart:false,
    index:0,
}

//reducer
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "changePlaysong":
            return {
                ...state,
                data: action.data
            }
            case "changePlaysongdetail":
                return {
                    ...state,
                    detail: action.detail
                }
                case "changePlaysongUrl":
                    return {
                        ...state,
                        url: action.url
                    }
                    case "changePlaystart":
                        return {
                            ...state,
                            playstart: action.bool
                        }
                        case "changeIndex":
                            return {
                                ...state,
                                index: action.index
                            }
        default:
            return state;
    }
}
//actions
//修改
export const changePlaysongAction = data => {
    return { type: "changePlaysong", data }
}
export const changePlaysongdetailAction = detail => {
    return { type: "changePlaysongdetail", detail }
}
export const changePlaysongUrlAction = url => {
    return { type: "changePlaysongUrl", url }
}
export const changePlaystartAction = bool => {
    return { type: "changePlaystart", bool }
}
export const changeIndexAction = index => {
    return { type: "changeIndex", index }
}



//组件触发请求
export const reqPlaysongAction=(id)=>{
    return (dispatch,getState)=>{
        const {data}=getState().playsong
        if(id===data.id){
            return;
        }else{
            dispatch(changePlaysongAction({}))
        }
        reqLyric({id:id}).then(res=>{
            let lyric = res.data.lrc.lyric;
            let arr = lyric.split('[').slice(1)
            let result = []
            arr.forEach(item => {
              //item- '00:00.000] 作曲 : 姚六一'
              let tempArr = item.split(']');//['00:00.000','作曲 : 姚六一']
              result.push({
                time: tempArr[0].slice(0, 5),
                lyc: tempArr[1]
              })
            })
            lyric=result.filter(item => item.lyc !== '\n')
            dispatch(changePlaysongAction(lyric))
        })
    }
}
export const reqPlaysongdetailAction=(id)=>{
    return (dispatch,getState)=>{
        const {data}=getState().playsong
        if(id===data.id){
            return;
        }else{
            dispatch(changePlaysongdetailAction({}))
        }
        reqSongdetail({ids:id}).then(res=>{
            dispatch(changePlaysongdetailAction(res.data.songs[0].al))
        })
    }
}
export const reqPlaysongUrlAction=(id)=>{
    return (dispatch,getState)=>{
        const {data}=getState().playsong
        if(id===data.id){
            return;
        }else{
            dispatch(changePlaysongUrlAction({}))
        }
        reqSongurl({id:id}).then(res=>{
            dispatch(changePlaysongUrlAction(res.data.data[0]))
        })
    }
}

//导出数据
export const playsong = state => state.playsong.data;
export const playsongdetail = state => state.playsong.detail;
export const playsongUrl= state => state.playsong.url;
export const playstart= state => state.playsong.playstart;
export const index= state => state.playsong.index;
export default reducer;