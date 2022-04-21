export default function Sidebar() {
    return (
        <div className="col-lg-3">
            <aside className="sidebar static left">

                <div className="widget">
                    <div className="weather-widget low-opacity bluesh">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/resources/weather.jpg)' }} />
                        <span className="refresh-content"><i className="fa fa-refresh" /></span>
                        <div className="weather-week">
                            <div className="icon sun-shower">
                                <div className="cloud" />
                                <div className="sun">
                                    <div className="rays" />
                                </div>
                                <div className="rain" />
                            </div>
                        </div>
                        <div className="weather-infos">
                            <span className="weather-tem">25</span>
                            <h3>Cloudy Skyes<i>Sicklervilte, New Jersey</i></h3>
                            <div className="weather-date skyblue-bg">
                                <span>MAY<strong>21</strong></span>
                            </div>
                        </div>
                        <div className="monthly-weather">
                            <ul>
                                <li>
                                    <span>Sun</span>
                                    <a href="#" title><i className="wi wi-day-sunny" /></a>
                                    <em>40°</em>
                                </li>
                                <li>
                                    <span>Mon</span>
                                    <a href="#" title><i className="wi wi-day-cloudy" /></a>
                                    <em>10°</em>
                                </li>
                                <li>
                                    <span>Tue</span>
                                    <a href="#" title><i className="wi wi-day-hail" /></a>
                                    <em>20°</em>
                                </li>
                                <li>
                                    <span>Wed</span>
                                    <a href="#" title><i className="wi wi-day-lightning" /></a>
                                    <em>34°</em>
                                </li>
                                <li>
                                    <span>Thu</span>
                                    <a href="#" title><i className="wi wi-day-showers" /></a>
                                    <em>22°</em>
                                </li>
                                <li>
                                    <span>Fri</span>
                                    <a href="#" title><i className="wi wi-day-windy" /></a>
                                    <em>26°</em>
                                </li>
                                <li>
                                    <span>Sat</span>
                                    <a href="#" title><i className="wi wi-day-sunny-overcast" /></a>
                                    <em>30°</em>
                                </li>
                            </ul>
                        </div>
                    </div>{/* Weather Widget */}
                </div>{/* twitter feed*/}
                <div className="widget">
                    <h4 className="widget-title">Twitter feed</h4>
                    <ul className="twiter-feed">
                        <li>
                            <i className="fa fa-twitter" />
                            <span>
                                <i>jhon william</i>
                                @jhonwilliam
                            </span>
                            <p>tomorrow with the company we were working and 5 child run away
                                from the working place. <a href="#" title>#daydream5k</a>
                            </p>
                            <em>2 hours ago</em>
                        </li>
                        <li>
                            <i className="fa fa-twitter" />
                            <span>
                                <i>Kelly watson</i>
                                @kelly
                            </span>
                            <p>tomorrow with the company we were working and 5 child run away
                                from the working place. <a href="#" title>#daydream5k</a>
                            </p>
                            <em>2 hours ago</em>
                        </li>
                        <li>
                            <i className="fa fa-twitter" />
                            <span>
                                <i>Jony bravo</i>
                                @jonibravo
                            </span>
                            <p>tomorrow with the company we were working and 5 child run away
                                from the working place. <a href="#" title>#daydream5k</a>
                            </p>
                            <em>2 hours ago</em>
                        </li>
                    </ul>
                </div>{/* twitter feed*/}
                <div className="advertisment-box">
                    <h4 className>advertisment</h4>
                    <figure>
                        <a href="#" title="Advertisment"><img src="images/resources/ad-widget.gif" alt /></a>
                    </figure>
                </div>
                <div className="widget">
                    <h4 className="widget-title">Shortcuts</h4>
                    <ul className="naves">
                        <li>
                            <i className="ti-clipboard" />
                            <a href="newsfeed.html" title>News feed</a>
                        </li>
                        <li>
                            <i className="ti-mouse-alt" />
                            <a href="inbox.html" title>Inbox</a>
                        </li>
                        <li>
                            <i className="ti-files" />
                            <a href="fav-page.html" title>My pages</a>
                        </li>
                        <li>
                            <i className="ti-user" />
                            <a href="timeline-friends.html" title>friends</a>
                        </li>
                        <li>
                            <i className="ti-image" />
                            <a href="timeline-photos.html" title>images</a>
                        </li>
                        <li>
                            <i className="ti-video-camera" />
                            <a href="timeline-videos.html" title>videos</a>
                        </li>
                        <li>
                            <i className="ti-comments-smiley" />
                            <a href="messages.html" title>Messages</a>
                        </li>
                        <li>
                            <i className="ti-bell" />
                            <a href="notifications.html" title>Notifications</a>
                        </li>
                        <li>
                            <i className="ti-share" />
                            <a href="people-nearby.html" title>People Nearby</a>
                        </li>
                        <li>
                            <i className="fa fa-bar-chart-o" />
                            <a href="insights.html" title>insights</a>
                        </li>
                        <li>
                            <i className="ti-power-off" />
                            <a href="landing.html" title>Logout</a>
                        </li>
                    </ul>
                </div>{/* Shortcuts */}
                <div className="widget">
                    <h4 className="widget-title">Recent Activity</h4>
                    <ul className="activitiez">
                        <li>
                            <div className="activity-meta">
                                <i>10 hours Ago</i>
                                <span><a href="#" title>Commented on Video posted </a></span>
                                <h6>by <a href="time-line.html">black demon.</a></h6>
                            </div>
                        </li>
                        <li>
                            <div className="activity-meta">
                                <i>30 Days Ago</i>
                                <span><a href="#" title>Posted your status. “Hello guys, how
                                    are you?”</a></span>
                            </div>
                        </li>
                        <li>
                            <div className="activity-meta">
                                <i>2 Years Ago</i>
                                <span><a href="#" title>Share a video on her
                                    timeline.</a></span>
                                <h6>"<a href="#">you are so funny mr.been.</a>"</h6>
                            </div>
                        </li>
                    </ul>
                </div>{/* recent activites */}
                <div className="widget stick-widget">
                    <h4 className="widget-title">Who's follownig</h4>
                    <ul className="followers">
                        <li>
                            <figure><img src="images/resources/friend-avatar2.jpg" alt />
                            </figure>
                            <div className="friend-meta">
                                <h4><a href="time-line.html" title>Kelly Bill</a></h4>
                                <a href="#" title className="underline">Add Friend</a>
                            </div>
                        </li>
                        <li>
                            <figure><img src="images/resources/friend-avatar4.jpg" alt />
                            </figure>
                            <div className="friend-meta">
                                <h4><a href="time-line.html" title>Issabel</a></h4>
                                <a href="#" title className="underline">Add Friend</a>
                            </div>
                        </li>
                        <li>
                            <figure><img src="images/resources/friend-avatar6.jpg" alt />
                            </figure>
                            <div className="friend-meta">
                                <h4><a href="time-line.html" title>Andrew</a></h4>
                                <a href="#" title className="underline">Add Friend</a>
                            </div>
                        </li>
                        <li>
                            <figure><img src="images/resources/friend-avatar8.jpg" alt />
                            </figure>
                            <div className="friend-meta">
                                <h4><a href="time-line.html" title>Sophia</a></h4>
                                <a href="#" title className="underline">Add Friend</a>
                            </div>
                        </li>
                        <li>
                            <figure><img src="images/resources/friend-avatar3.jpg" alt />
                            </figure>
                            <div className="friend-meta">
                                <h4><a href="time-line.html" title>Allen</a></h4>
                                <a href="#" title className="underline">Add Friend</a>
                            </div>
                        </li>
                    </ul>
                </div>{/* who's following */}
            </aside>
        </div>
    )
}