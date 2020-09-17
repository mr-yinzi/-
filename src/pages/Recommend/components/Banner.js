import "./Banner.css"
import {Carousel} from "antd-mobile"
import React from 'react'
export default function Banner(props) {
    const {banner}=props
    return (
        <div className="banner">
            <Carousel
            autoplay
            infinite
            >
                {
                    banner.map(item=>{
                        return <img key={item.bannerId} src={item.pic} alt=""/>
                    })
                }
            </Carousel>
        </div>
    )
}
