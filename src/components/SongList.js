import React from 'react'
import "./SongList.css"

export default function songList(props) {
    const { item,enterSong } = props
    const attrs =item?item.song.artists:[]
    return (
        <div>
            <div className="songbox" onClick={()=>enterSong(item.id)}>
                <div className="songleft">
                    <div className="songname">{item.name}</div>
                    <div className="songsing">
                        <div className="imgsq"></div>
                        <p>
                            {
                                attrs.map((i,index) => {
                                return <span key={i.id}>{index>0?'/':null} {i.name} </span>
                                })
                            }
                            <span> - {item.name}</span>
                        </p>
                    </div>
                </div>
                <div className="play" ></div>
            </div>
        </div>
    )
}


