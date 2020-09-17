import React, { Component } from 'react'
import "./Search.css"
import { connect } from "react-redux"
import searchImg from "../../assets/img/search.png"
import { searchHot, reqSearchHotAction,isShow ,reqSearchMulAction,searchMul,changeisShowAction,iptValue,changeiptValueAction} from '../../store/modules/search'
import SongList2 from "../../components/SongList2"
import SongList3 from "../../components/SongList3"
class Search extends Component {
    componentDidMount() {
        const {reqSearchHot} = this.props;
        reqSearchHot()
        this.props.changeiptValue("")
        this.props.changeisShow(true)
    }
    iptChange(e){
        this.props.changeiptValue(e.target.value)
        if(e.target.value===""){
            this.props.changeisShow(true)
        }else{
            this.props.changeisShow(false)
             const {reqSearchMul} = this.props;
             reqSearchMul({keywords:e.target.value})
        }
    }
    changeIpt(title){
        this.props.changeiptValue(title)
        this.props.changeisShow(false)
        const {reqSearchMul} = this.props;
        reqSearchMul({keywords:title})
    }
    enterSong(id){
        this.props.history.push("/playSong?id="+id)
    }
    render() {
        const { searchHot,isShow ,searchMul,iptValue} = this.props
        const Hotlist=searchHot?searchHot.hots:null
        const songslist=searchMul.songs?searchMul.songs:[]
        const albums=searchMul.albums?searchMul.albums:[]
        console.log(iptValue);
        return (
            <div className="searchwrap">
                <div className="ipt">
                    <img src={searchImg} alt="" />
                    <input type="text" placeholder="请输入关键词" value={iptValue} onChange={(e)=>this.iptChange(e)} />
                </div>

               { isShow?(<div className="searchbox" >
                {
                    Hotlist?Hotlist.map(item => {
                           return  <span className="searchHot"  key={item.first} onClick={()=>this.changeIpt(item.first)}>{item.first}</span>
                    }):null
                }
                </div>)
               :(<div className="searchKey">
                     {
                     songslist?songslist.map((item,index) => {
                           return  <SongList2 key={item.id+index} item={item} enterSong={(id)=>this.enterSong(id)}></SongList2>
                    }):null
                }
                  {
                     albums?albums.map((item,index) => {
                           return  <SongList3 key={index+item.id} item={item} enterSong={(id)=>this.enterSong(id)}></SongList3>
                    }):null
                }
                </div>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchHot: searchHot(state),
        isShow:isShow(state),
        iptValue:iptValue(state),
        searchMul:searchMul(state)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        reqSearchHot: () => dispatch(reqSearchHotAction()),
        changeisShow:(bool)=>dispatch(changeisShowAction(bool)),
        changeiptValue:(title)=>dispatch(changeiptValueAction(title)),
        reqSearchMul:( keywords)=>dispatch(reqSearchMulAction(
            keywords)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)
