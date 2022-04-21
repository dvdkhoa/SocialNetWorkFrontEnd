import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
    faShareAlt, faCommenting
} from "@fortawesome/free-solid-svg-icons"

export default function Status2(){
    return (
        <div className="central-meta item">
        <div className="user-post">
            <div className="friend-info">
                <figure>
                    <img src="images/resources/friend-avatar10.jpg" alt />
                </figure>
                <div className="friend-name">
                    <div className="more">
                        <div className="more-post-optns"><i className="ti-more-alt" />
                            <ul>
                                <li><i className="fa fa-pencil-square-o" />Edit Post
                                </li>
                                <li><i className="fa fa-trash-o" />Delete Post</li>
                                <li className="bad-report"><i className="fa fa-flag" />Report Post</li>
                                <li><i className="fa fa-address-card-o" />Boost This
                                    Post</li>
                                <li><i className="fa fa-clock-o" />Schedule Post</li>
                                <li><i className="fa fa-wpexplorer" />Select as
                                    featured</li>
                                <li><i className="fa fa-bell-slash-o" />Turn off
                                    Notifications</li>
                            </ul>
                        </div>
                    </div>
                    <ins><a href="time-line.html" title>Mathilda
                        Brinker</a></ins>
                    <span>published: june,2 2020 19:PM</span>
                </div>
                <div className="post-meta">
                    <div className="description">
                        <p>
                            World's most beautiful car in Curabitur <a href="#" title>#test drive booking !</a> the most
                            beatuiful car available in america and the saudia
                            arabia, you can book your test drive by our official
                            website
                        </p>
                    </div>
                    <ul className="like-dislike">
                        <li><a href="#" title="Save to Pin Post"><i className="fa fa-thumb-tack" /></a></li>
                        <li><a href="#" title="Like Post"><i className="ti-thumb-up" /></a></li>
                        <li><a href="#" title="dislike Post"><i className="ti-thumb-down" /></a></li>
                    </ul>
                    <div className="we-video-info">
                        <ul>

                            <li>
                                <div className="likes heart" title="Like/Dislike">❤
                                    <span>2K</span></div>
                            </li>
                            <li>
                                <span className="comment" title="Comments">
                                    <FontAwesomeIcon icon={faCommenting} />
                                    <ins>52</ins>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <a className="share-pst" href="#" title="Share">
                                        <FontAwesomeIcon icon={faShareAlt} />
                                    </a>
                                    <ins>20</ins>
                                </span>
                            </li>
                        </ul>
                        <div className="users-thumb-list">
                            <a data-toggle="tooltip" title="Anderw" href="#">
                                <img alt src="images/resources/userlist-1.jpg" />
                            </a>
                            <a data-toggle="tooltip" title="frank" href="#">
                                <img alt src="images/resources/userlist-2.jpg" />
                            </a>
                            <a data-toggle="tooltip" title="Sara" href="#">
                                <img alt src="images/resources/userlist-3.jpg" />
                            </a>
                            <a data-toggle="tooltip" title="Amy" href="#">
                                <img alt src="images/resources/userlist-4.jpg" />
                            </a>
                            <a data-toggle="tooltip" title="Ema" href="#">
                                <img alt src="images/resources/userlist-5.jpg" />
                            </a>
                            <span><strong>You</strong>, <b>Sarah</b> and <a href="#" title>24+ more</a> liked</span>
                        </div>
                    </div>
                </div>
                <div className="coment-area" style={{}}>
                    <ul className="we-comet">
                        <li>
                            <div className="comet-avatar">
                                <img src="images/resources/nearly3.jpg" alt />
                            </div>
                            <div className="we-comment">
                                <h5><a href="time-line.html" title>Jason
                                    borne</a></h5>
                                <p>we are working for the dance and sing songs. this
                                    video is very awesome for the youngster. please
                                    vote this video and like our channel</p>
                                <div className="inline-itms">
                                    <span>1 year ago</span>

                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="comet-avatar">
                                <img src="images/resources/comet-4.jpg" alt />
                            </div>
                            <div className="we-comment">
                                <h5><a href="time-line.html" title>Sophia</a>
                                </h5>
                                <p>we are working for the dance and sing songs. this
                                    video is very awesome for the youngster.
                                    <i className="em em-smiley" />
                                </p>
                                <div className="inline-itms">
                                    <span>1 year ago</span>

                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" title className="showmore underline">more
                                comments+</a>
                        </li>
                        <li className="post-comment">
                            <div className="comet-avatar">
                                <img src="images/resources/nearly1.jpg" alt />
                            </div>
                            <div className="post-comt-box">
                                <form method="post">
                                    <textarea placeholder="Post your comment" defaultValue={""} />
                                    <div className="add-smiles">
                                        <div className="uploadimage">
                                            <i className="fa fa-image" />
                                            <label className="fileContainer">
                                                <input type="file" />
                                            </label>
                                        </div>
                                        <span className="em em-expressionless" title="add icon" />
                                        <div className="smiles-bunch">
                                            <i className="em em---1" />
                                            <i className="em em-smiley" />
                                            <i className="em em-anguished" />
                                            <i className="em em-laughing" />
                                            <i className="em em-angry" />
                                            <i className="em em-astonished" />
                                            <i className="em em-blush" />
                                            <i className="em em-disappointed" />
                                            <i className="em em-worried" />
                                            <i className="em em-kissing_heart" />
                                            <i className="em em-rage" />
                                            <i className="em em-stuck_out_tongue" />
                                        </div>
                                    </div>
                                    <button type="submit" />
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}