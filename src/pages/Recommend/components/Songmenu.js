import React from 'react'
import "./Songmenu.css"

export default function Songmenu(props) {
    const { personalized ,toDetail} = props
    return (
        <div>
            <div className="songmenuTop">推荐歌单</div>
            <div className="songmenucontent">

                {
                    personalized.map(item => {
                        return (<div className="menubox" key={item.id} onClick={()=>toDetail(item.id)}>
                            <img src={item.picUrl} alt="" />
                            <p>{item.name}</p>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}
