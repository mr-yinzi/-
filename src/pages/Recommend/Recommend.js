import React, { Component } from 'react'
import Banner from "./components/Banner"
import Songmenu from "./components/Songmenu"
import Newsong from "./components/Newsong"
import { connect } from "react-redux"
import { banner, personalized,newsong,reqBannerAction,reqNewsongAction,reqPersonalizedAction} from '../../store/modules/recommend'

class Recommend extends Component {
    componentDidMount() {
        const { reqBanner,reqPersonalized,reqNewsong} = this.props;
        reqBanner()
        reqPersonalized()
        reqNewsong()
    }
    toDetail(id){
        this.props.history.push("/playlist?id="+id)
    }
    enterSong(id){
        this.props.history.push("/playSong?id="+id)

    }
    render() {
        const { banner,personalized,newsong} = this.props;
        return (
            <div>
                 {banner.length > 0 ? <Banner banner={banner}></Banner> : null}
                 {personalized.length > 0 ? <Songmenu personalized={personalized} toDetail={(id)=>this.toDetail(id)}></Songmenu> : null}
                 {newsong.length > 0 ? <Newsong newsong={newsong} enterSong={(id)=>this.enterSong(id)}></Newsong> : null}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        banner: banner(state),
        personalized: personalized(state),
        newsong: newsong(state),
    }
}
const mapDispatchToProps = dispatch => {
    return {
        reqBanner: () => dispatch(reqBannerAction()),
        reqPersonalized: () => dispatch(reqPersonalizedAction()),
        reqNewsong: () => dispatch(reqNewsongAction()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Recommend)