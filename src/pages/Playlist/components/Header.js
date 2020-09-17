import React from 'react'
import "./Header.css"
export default function Header(props) {
    const { playlist,back } = props
    return (
        <div className="header1box">
            <div className="header1">
            {/* <div class="plhead_bg" style={{backgroundImage: url(playlist.coverImgUrl)}}></div> */}
                <div className="back" onClick={()=>back()}> 返回 </div>
                <div className="wrap">
                    <div className="imgbox">
                        <img src={playlist.coverImgUrl} alt="" />
                    </div>
                    <div className="title">{playlist.name}</div>
                </div>
            </div>
        </div>
    )
}
