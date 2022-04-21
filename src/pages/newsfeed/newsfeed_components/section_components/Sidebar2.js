import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faVideoCamera, faCamera, faHeart, faUserPlus, faPencilAlt,
    faMessage, faComment
} from '@fortawesome/free-solid-svg-icons'

export default function Sidebar2() {
    return (
        <div className="col-lg-3">
            <aside className="sidebar static right">
                <div className="widget">
                    <h4 className="widget-title">Your page</h4>
                    <div className="your-page">
                        <figure>
                            <a href="#" title><img src="images/resources/friend-avatar9.jpg" alt /></a>
                        </figure>
                        <div className="page-meta">
                            <a href="#" title className="underline">My Creative Page</a>
                            <span><FontAwesomeIcon icon={faComment} /> <a href="insight.html" title>Messages <em>9</em></a></span>
                            <span><FontAwesomeIcon icon={faMessage} /> <a href="insight.html" title>Notifications <em>2</em></a></span>
                        </div>
                        <ul className="page-publishes">
                            <li>
                                <span><FontAwesomeIcon style={{ display: "block" }} icon={faPencilAlt} />Publish</span>
                            </li>
                            <li>
                                <span><FontAwesomeIcon style={{ display: "block" }} icon={faCamera} /> Photo</span>
                            </li>
                            <li>
                                <span><FontAwesomeIcon style={{ display: "block" }} icon={faVideoCamera} /> Live</span>
                            </li>
                            <li>
                                <span><FontAwesomeIcon style={{ display: "block" }} icon={faUserPlus} /> Invite</span>
                            </li>
                        </ul>
                        <div className="page-likes">
                            <ul className="nav nav-tabs likes-btn">
                                <li className="nav-item"><a className="active" href="#link1" data-toggle="tab" data-ripple>likes</a></li>
                                <li className="nav-item"><a className href="#link2" data-toggle="tab" data-ripple>views</a></li>
                            </ul>
                            {/* Tab panes */}
                            <div className="tab-content">
                                <div className="tab-pane active fade show " id="link1">
                                    <span><FontAwesomeIcon icon={faHeart} /> 884</span>
                                    <a href="#" title="weekly-likes">35 new likes this week</a>
                                    <div className="users-thumb-list">
                                        <a href="#" title="Anderw" data-toggle="tooltip">
                                            <img src="images/resources/userlist-1.jpg" alt />
                                        </a>
                                        <a href="#" title="frank" data-toggle="tooltip">
                                            <img src="images/resources/userlist-2.jpg" alt />
                                        </a>
                                        <a href="#" title="Sara" data-toggle="tooltip">
                                            <img src="images/resources/userlist-3.jpg" alt />
                                        </a>
                                        <a href="#" title="Amy" data-toggle="tooltip">
                                            <img src="images/resources/userlist-4.jpg" alt />
                                        </a>
                                        <a href="#" title="Ema" data-toggle="tooltip">
                                            <img src="images/resources/userlist-5.jpg" alt />
                                        </a>
                                        <a href="#" title="Sophie" data-toggle="tooltip">
                                            <img src="images/resources/userlist-6.jpg" alt />
                                        </a>
                                        <a href="#" title="Maria" data-toggle="tooltip">
                                            <img src="images/resources/userlist-7.jpg" alt />
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="link2">
                                    <span><i className="fa fa-eye" />440</span>
                                    <a href="#" title="weekly-likes">440 new views this week</a>
                                    <div className="users-thumb-list">
                                        <a href="#" title="Anderw" data-toggle="tooltip">
                                            <img src="images/resources/userlist-1.jpg" alt />
                                        </a>
                                        <a href="#" title="frank" data-toggle="tooltip">
                                            <img src="images/resources/userlist-2.jpg" alt />
                                        </a>
                                        <a href="#" title="Sara" data-toggle="tooltip">
                                            <img src="images/resources/userlist-3.jpg" alt />
                                        </a>
                                        <a href="#" title="Amy" data-toggle="tooltip">
                                            <img src="images/resources/userlist-4.jpg" alt />
                                        </a>
                                        <a href="#" title="Ema" data-toggle="tooltip">
                                            <img src="images/resources/userlist-5.jpg" alt />
                                        </a>
                                        <a href="#" title="Sophie" data-toggle="tooltip">
                                            <img src="images/resources/userlist-6.jpg" alt />
                                        </a>
                                        <a href="#" title="Maria" data-toggle="tooltip">
                                            <img src="images/resources/userlist-7.jpg" alt />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* page like widget */}
                <div className="widget">
                    <h4 className="widget-title">Profile intro</h4>
                    <ul className="short-profile">
                        <li>
                            <span>about</span>
                            <p>Hi, i am jhon kates, i am 32 years old and worked as a web
                                developer in microsoft </p>
                        </li>
                        <li>
                            <span>fav tv show</span>
                            <p>Sacred Games, Spartcus Blood, Games of Theron </p>
                        </li>
                        <li>
                            <span>favourit music</span>
                            <p>Justin Biber, Shakira, Nati Natasah</p>
                        </li>
                    </ul>
                </div>
                <div className="widget">
                    <div className="banner medium-opacity purple">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/resources/baner-widgetbg.jpg)' }}>
                        </div>
                        <div className="baner-top">
                            <span><img alt src="images/book-icon.png" /></span>
                            <i className="fa fa-ellipsis-h" />
                        </div>
                        <div className="banermeta">
                            <p>
                                create your own favourit page.
                            </p>
                            <span>like them all</span>
                            <a data-ripple title href="#">start now!</a>
                        </div>
                    </div>
                </div>
                <div className="widget stick-widget">
                    <h4 className="widget-title">Liên kết hiện tại <a title href="#" className="see-all">XEM TẤT CẢ</a></h4>
                    <ul className="recent-links">
                        <li>
                            <figure><img src="images/resources/recentlink-1.jpg" alt />
                            </figure>
                            <div className="re-links-meta">
                                <h6><a href="#" title>Moira's fade reaches much farther than
                                    you think.</a></h6>
                                <span>2 tuần trước</span>
                            </div>
                        </li>
                        <li>
                            <figure><img src="images/resources/recentlink-2.jpg" alt />
                            </figure>
                            <div className="re-links-meta">
                                <h6><a href="#" title>Daniel asks if we want him to do the
                                    voice of doomfist</a></h6>
                                <span>3 tháng trước</span>
                            </div>
                        </li>
                        <li>
                            <figure><img src="images/resources/recentlink-3.jpg" alt />
                            </figure>
                            <div className="re-links-meta">
                                <h6><a href="#" title>The pitnik overwatch scandals.</a></h6>
                                <span>1 ngày trước</span>
                            </div>
                        </li>
                    </ul>
                </div>{/* recent links */}
            </aside>
        </div>
    )
}