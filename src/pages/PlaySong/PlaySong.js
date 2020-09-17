import React, { Component } from 'react'
import "./PlaySong.css"
import querystring from "querystring"
import { connect } from "react-redux"
import { playsong,index,changeIndexAction, playstart, reqPlaysongAction, playsongdetail, reqPlaysongdetailAction, playsongUrl, reqPlaysongUrlAction, changePlaystartAction } from '../../store/modules/Playsong'

class PlaySong extends Component {
    constructor(props) {
        super(props)
        this.outer = React.createRef()
        this.inner = React.createRef()
        this.audio = React.createRef()
      }
    componentDidMount() {
        let id = querystring.parse(this.props.location.search.slice(1)).id
        this.props.reqPlaysong(id)
        this.props.reqPlaysongdetail(id)
        this.props.reqPlaysongUrl(id)
        this.props.changePlaystart(false)
    }
    // 返回
    back() {
        this.props.changePlaystart(false)
        this.props.history.goBack(-1)
        this.changePlay(false) 
    }
    // 播放暂停
    changePlay(bool) {
        var audio = document.getElementById('music');
        this.props.changePlaystart(bool)
        if (bool) {
            audio.play()
        } else {
            audio.pause()
        }
        this.playAudio()
    }
    //歌曲播放
  playAudio() {
    const lyc  = this.props.playsong
    let audio = this.audio.current;
    let inner = this.inner.current;
    audio.ontimeupdate = () => {
      let outerH = this.outer.current.clientHeight
      let itemHeight = outerH / 7;
      //当前播放时间
      let currentTime = audio.currentTime;//歌曲当前时间
      let transTime = (Math.floor(currentTime / 60) + '').padStart(2, '0') + ":" + (Math.floor(currentTime % 60) + '').padStart(2, '0')
      
      let index = lyc.findIndex(item => item.time === transTime);
      if (index === -1) {
        return;
      }
    this.props.changeIndex(index)

      inner.style.top = -(index - 3) * itemHeight+ "px"
    }
    
  }
    render() {
        const { playsongdetail, playsongUrl, playsong, playstart,index } = this.props
        console.log(playsong);
        return (
            <div>
                <div className="playsongWrap">
                    <div className={playstart ? "imgNeedle1" : "imgNeedle"}></div>
                    <div className="back" onClick={() => this.back()}> 返回 </div>
                    <div className={playstart ? "playbox  run" : "playbox"}>
                        <div className="playimg">
                            {playsongdetail.picUrl ? <img src={playsongdetail.picUrl} alt="" /> : null}
                            {playstart ? <div className="playnow1" onClick={() => this.changePlay(false)}></div> : <div className="playnow" onClick={() => this.changePlay(true)}></div>}
                            {playsongUrl.url ? <audio src={playsongUrl.url} ref={this.audio} id="music"></audio> : null}
                        </div>
                    </div>
                    {/* 歌词 */}
                    <div className="songwordsWrap" ref={this.outer}>
                        <div className="songwordsInner" ref={this.inner}>
                            {
                                playsong.length>0?playsong.map((item, idx) => {
                                    return <div key={item.time+item.lyc} className={idx === index ? "item select" : 'item'}>{item.lyc}</div>
                                }):null
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        playsong: playsong(state),
        playsongdetail: playsongdetail(state),
        playsongUrl: playsongUrl(state),
        playstart: playstart(state),
        index: index(state),
    }
}
const mapDispatchToProps = dispatch => {
    return {
        reqPlaysong: (id) => dispatch(reqPlaysongAction(id)),
        reqPlaysongdetail: (id) => dispatch(reqPlaysongdetailAction(id)),
        reqPlaysongUrl: (id) => dispatch(reqPlaysongUrlAction(id)),
        changePlaystart: (bool) => dispatch(changePlaystartAction(bool)),
        changeIndex: (bool) => dispatch(changeIndexAction(bool)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlaySong)