import React from 'react'
import "./SongList.css"

export default function songList(props) {
    const { item,enterSong } = props

    console.log(item);
    return (
        <div>
            <div className="songbox"  onClick={()=>enterSong(item.id)}>
                <div className="songleft">
                    <div className="songname">{item.name}</div>
                    <div className="songsing">
                        <div className="imgsq"></div>
                        <p>
                                return <span >{item.artist.name} </span>
                            <span> - {item.name}</span>
                        </p>
                    </div>
                </div>
                <div className="play" ></div>
            </div>
        </div>
    )
}

