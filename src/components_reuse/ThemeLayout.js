import RespHd from "./RespHd"
import Topbar from "./Topbar"
import Rightside from "./Rightside"
import Leftside from "./Leftside"
import Section from "../pages/newsfeed/newsfeed_components/Section"
import Botbar from "./Botbar"

export default function ThemeLayout() {
    return (
        <div className="theme-layout">
            <div className="postoverlay" />
            <RespHd />
            <Topbar />
            <Rightside />
            <Leftside />
            <Section />
            <Botbar />
        </div>
    )
}