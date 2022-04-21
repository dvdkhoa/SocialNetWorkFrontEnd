import Status from "../../../Status"
import Status1 from "./Status1"
import Status2 from "./Status2"
export default function Loadmore({ posts }) {


    return (
        <div className="loadMore">
            {/* <Status1/>
            <Status2/> */}
            {posts.map((post) => <Status key={post.id} post={post} /> )}
        </div>
    )
}