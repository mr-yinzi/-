import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import asyncC from "./utils/asyncComponents"
const Index =asyncC(()=>import("./pages/Index/Index"))
const Playlist =asyncC(()=>import("./pages/Playlist/Playlist"))
const PlaySong =asyncC(()=>import("./pages/PlaySong/PlaySong"))
export default function App() {
    return (
        <div>
            {/* Switch-路由出口 Route配置规则 Redirect-重定向 */}
            <Switch>
                <Route path="/index" component={Index}></Route>
                <Route path="/playlist" component={Playlist}></Route>
                <Route path="/PlaySong" component={PlaySong}></Route>
                <Redirect to="/index"></Redirect>
            </Switch>
        </div>
    )
}
