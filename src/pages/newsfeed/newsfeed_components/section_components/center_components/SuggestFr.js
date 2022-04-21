import FrCaro from "./FrCaro"

export default function SuggestFr() {
    return (
        <div className="central-meta">
            <span className="create-post">Suggested Friend's <a href="#" title>See
                All</a></span>
            <ul className="suggested-frnd-caro">

                <FrCaro />
                <FrCaro/>
                <FrCaro/>
                <FrCaro/>
                <FrCaro/>
                <FrCaro/>

            </ul>
        </div>
    )
}