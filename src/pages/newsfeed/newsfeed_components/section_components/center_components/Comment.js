export default function Comment({ name, text, time, hinh }) {
    console.log('text', text)
    return (
        <li>
            <div className="comet-avatar">
                <img src={hinh} />
            </div>
            <div className="we-comment">
                <h5>
                    <a href="#">{name}</a>
                </h5>
                <p>{text}</p>
                <div className="inline-itms">
                    <span>{time}</span>
                </div>
            </div>
        </li>
    )
}