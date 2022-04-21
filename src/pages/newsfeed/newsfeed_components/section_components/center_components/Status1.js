import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
    faShareAlt, faCommenting
} from "@fortawesome/free-solid-svg-icons"

import Comment from "./Comment"
import PostCmt from "./PostCmt"

export default function Status1() {
    return (
        <div className="central-meta item">
            <div className="user-post">
                <div className="friend-info">
                    <figure>
                        <img src="images/resources/nearly1.jpg" alt />
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
                        <ins><a href="time-line.html" title>Jack Carter</a> Post
                            Album</ins>
                        <span><i className="fa fa-globe" /> published: September,15 2020
                            19:PM </span>
                    </div>
                    <div className="post-meta">
                        <p>
                            Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                            condimentum rhoncus, sem quam semper libero.
                        </p>
                        <figure>
                            <div className="img-bunch">
                                <div className="row">
                                    <img src="images/resources/album6.jpg" />
                                </div>
                            </div>
                            <ul className="like-dislike">
                                <li><a className="bg-purple" href="#" title="Save to Pin Post"><i className="fa fa-thumb-tack" /></a></li>
                                <li><a className="bg-blue" href="#" title="Like Post"><i className="ti-thumb-up" /></a></li>
                                <li><a className="bg-red" href="#" title="dislike Post"><i className="ti-thumb-down" /></a></li>
                            </ul>
                        </figure>
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
                            <Comment />
                            <PostCmt/>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}