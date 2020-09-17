import axios from "axios"
// import qs from "qs"

// 响应拦截
axios.interceptors.response.use(res=>{
    console.group("=======请求地址："+res.config.url+"=============")
    console.log(res);
    console.groupEnd()
    return res;
    
})

//banner 
export const reqBanner = () => {
    return axios({
        url: "/banner?type=2",
    })
}
//推荐歌单
export const reqPersonalized = () => {
    return axios({
        url: "/personalized?limit=6",
    })
}
//最新音乐
export const reqNewsong = () => {
    return axios({
        url: "/personalized/newsong",
    })
}
//歌单详情
export const reqPlaylist = (params) => {
    return axios({
        url: "/playlist/detail",
        method:"get",
        params
    })
}

// 热搜列表
export const reqSearchHot = () => {
    return axios({
        url: "/search/hot",
        method:"get",
    })
}
// /search/multimatch
// 搜索结果
export const reqSearchMul= (params) => {
    return axios({
        url: "/search/suggest",
        method:"get",
        params
    })
}

// 获取歌词  id
export const reqLyric= (params) => {
    return axios({
        url: "/lyric",
        method:"get",
        params
    })
}

// 获取歌曲url  id
export const reqSongurl= (params) => {
    return axios({
        url: "/song/url",
        method:"get",
        params
    })
}
//获取音乐详情/song/detail  ids
export const reqSongdetail= (params) => {
    return axios({
        url: "/song/detail",
        method:"get",
        params
    })
}