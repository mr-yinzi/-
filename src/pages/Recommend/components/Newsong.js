import React from 'react'
import SongList from "../../../components/SongList"
import "./Newsong.css"
export default function Newsong(props) {
    const { newsong,enterSong } = props
    return (
        <div>
             <div className="songTop">最新音乐</div>
              
                {
                    newsong.map(item => {
                           return  <SongList key={item.id} item={item} enterSong={enterSong}></SongList>
                    })
                }
        </div>
    )
}
