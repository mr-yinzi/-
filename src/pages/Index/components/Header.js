import React, { Component } from 'react'
import "./Header.css"
import { NavLink } from "react-router-dom"
export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            navs: [
                {
                    name: "推荐",
                    path: "/index/recommend"
                },
                {
                    name: "热歌榜",
                    path: "/index/hotSing?id=3778678"
                },
                {
                    name: "搜索",
                    path: "/index/search"
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="headerWrap">
                    <div className="header">
                        <div className="headerLeft">优音乐</div>
                        <div className="headerRight">下载APP</div>
                    </div>
                    <div className="nav">
                        {
                            this.state.navs.map(item => {
                                return (
                                    <NavLink activeClassName="red" key={item.path} to={item.path}>
                                        <div>{item.name}</div>
                                    </NavLink>
                                )
                            })
                        }
                        {/* <div className="rec red">推荐</div>
                        <div className="hot">热歌榜</div>
                        <div className="seo">搜索</div> */}
                    </div>
                </div>
                <div className="wrap"></div>
            </div>
        )
    }
}
