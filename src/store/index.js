import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import recommend from "./modules/recommend"
import playlist from "./modules/playlist"
import playsong from "./modules/Playsong"
import search from "./modules/search"

//创建根reducer
const reducer=combineReducers({
    recommend,
    playlist,
    search,
    playsong
})
//创建仓库
const store=createStore(reducer,applyMiddleware(thunk));

//测试
// store.dispatch(reqDetailAction())

//添加监听
store.subscribe(()=>{
    console.log(store.getState());
})

export default store;

