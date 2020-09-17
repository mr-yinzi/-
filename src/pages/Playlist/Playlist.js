import React, { Component } from 'react'
import "./Playlist.css"
import querystring from "querystring"
import { connect } from "react-redux"
import { playlist, reqPlaylistAction } from '../../store/modules/playlist'
import Header from "./components/Header"
import SongList1 from "../../components/SongList1"
 class Playlist extends Component {
    componentDidMount() {
        let id = querystring.parse(this.props.location.search.slice(1)).id
        this.props.reqPlaylist(id)
    }
    back(){
        this.props.history.goBack(-1)
    }
    enterSong(id){
        this.props.history.push("/playSong?id="+id)
    }
    render() {
        const { playlist } = this.props
        const songList= playlist?playlist.tracks:null
        return (
            <div>
                {console.log(playlist)}
                {playlist?<Header playlist={playlist} back={()=>this.back()}></Header>:null}
                {
                    songList?songList.map((item,index) => {
                           return <div className="playwrap" key={item.id}>
                               <div className="playIndex">{(index+1+"").padStart(2,"0")}</div>
                            <SongList1  item={item} enterSong={(id)=>this.enterSong(id)}></SongList1>
                            </div>
                    }):null
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        playlist: playlist(state),
    }
}
const mapDispatchToProps = dispatch => {
    return {
        reqPlaylist: (id) => dispatch(reqPlaylistAction(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
