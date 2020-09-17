import React, { Component } from 'react'
import Header from "./components/Header"
import { Switch, Route, Redirect } from "react-router-dom"
import Recommend from "../Recommend/Recommend"
import HotSing from "../HotSing/HotSing"
import Search from "../Search/Search"
export default class Index extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                 {/* 二级路由出口 */}
                 <Switch>
                    <Route path="/index/recommend" component={Recommend}></Route>
                    <Route path="/index/hotSing" component={HotSing}></Route>
                    <Route path="/index/search" component={Search}></Route>
                    <Redirect to="/index/recommend"></Redirect>
                </Switch>
            </div>
        )
    }
}
