import { reqPlaylist } from "../../utils/request";

const initState = {
    data: {},
}

//reducer
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "changePlaylist":
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}
//actions
//修改
export const changePlaylistAction = data => {
    return { type: "changePlaylist", data }
}

//组件触发请求
export const reqPlaylistAction=(id)=>{
    return (dispatch,getState)=>{
        const {data}=getState().playlist
        if(id===data.id){
            return;
        }else{
            dispatch(changePlaylistAction({}))
        }
        reqPlaylist({id:id}).then(res=>{
            dispatch(changePlaylistAction(res.data.playlist))
        })
    }
}

//导出数据
export const playlist = state => state.playlist.data;
export default reducer;