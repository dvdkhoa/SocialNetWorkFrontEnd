import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faUserPlus, faShareAlt
} from '@fortawesome/free-solid-svg-icons'

export default function Popup2() {
    return (
        <div className="popup-wraper2">
            <div className="popup post-sharing">
                <span className="popup-closed"><i className="ti-close" /></span>
                <div className="popup-meta">
                    <div className="popup-head">
                        <select data-placeholder="Share to friends..." multiple className="chosen-select multi">
                            <option>Share in your feed</option>
                            <option>Share in friend feed</option>
                            <option>Share in a page</option>
                            <option>Share in a group</option>
                            <option>Share in message</option>
                        </select>
                        <div className="post-status">
                            <span><i className="fa fa-globe" /></span>
                            <ul>
                                <li><a href="#" title><i className="fa fa-globe" /> Post Globaly</a></li>
                                <li><a href="#" title><i className="fa fa-user" /> Post Private</a></li>
                                <li><a href="#" title><FontAwesomeIcon icon={faUserPlus} /> Post Friends</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="postbox">
                        <div className="post-comt-box">
                            <form method="post">
                                <input type="text" placeholder="Search Friends, Pages, Groups, etc...." />
                                <textarea placeholder="Say something about this..." defaultValue={""} />
                                <div className="add-smiles">
                                    <span title="add icon" className="em em-expressionless" />
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
                        <figure><img src="images/resources/share-post.jpg" alt /></figure>
                        <div className="friend-info">
                            <figure>
                                <img alt src="images/resources/admin.jpg" />
                            </figure>
                            <div className="friend-name">
                                <ins><a title href="time-line.html">Jack Carter</a> share <a title href="#">link</a></ins>
                                <span>Yesterday with @Jack Piller and @Emily Stone at the concert of # Rock'n'Rolla in
                                    Ontario.</span>
                            </div>
                        </div>
                        <div className="share-to-other">
                            <span>Share to other socials</span>
                            <ul>
                                <li><a className="facebook-color" href="#" title><i className="fa fa-facebook-square" /></a>
                                </li>
                                <li><a className="twitter-color" href="#" title><i className="fa fa-twitter-square" /></a></li>
                                <li><a className="dribble-color" href="#" title><i className="fa fa-dribbble" /></a></li>
                                <li><a className="instagram-color" href="#" title><i className="fa fa-instagram" /></a></li>
                                <li><a className="pinterest-color" href="#" title><i className="fa fa-pinterest-square" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="copy-email">
                            <span>Copy &amp; Email</span>
                            <ul>
                                <li><a href="#" title="Copy Post Link"><i className="fa fa-link" /></a></li>
                                <li><a href="#" title="Email this Post"><i className="fa fa-envelope" /></a></li>
                            </ul>
                        </div>
                        <div className="we-video-info">
                            <ul>
                                <li>
                                    <span title data-toggle="tooltip" className="views" data-original-title="views">
                                        <i className="fa fa-eye" />
                                        <ins>1.2k</ins>
                                    </span>
                                </li>
                                <li>
                                    <span title data-toggle="tooltip" className="views" data-original-title="views">
                                        <FontAwesomeIcon icon={faShareAlt} />
                                        <ins>20k</ins>
                                    </span>
                                </li>
                            </ul>
                            <button className="main-btn color" data-ripple>Submit</button>
                            <button className="main-btn cancel" data-ripple>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}