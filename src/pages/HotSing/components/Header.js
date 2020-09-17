import React from 'react'
import "./Header.css"
import {filterTime} from "../../../filters/index"
export default function Header(props) {
    const { playlist } = props
    return (
        <div className="header2box">
            <div className="header2">
                <div className="back" >  </div>
                <div className="wrap">
                    <div className="imgbox">
                        <img src={playlist.coverImgUrl} alt="" />
                    </div>
                    <div className="title">
                        <p>{playlist.name}</p>
                        <p className="updateTime">更新日期：{playlist.updateTime?filterTime(playlist.updateTime):null}</p>
                        </div>
                </div>
            </div>
        </div>
    )
}
