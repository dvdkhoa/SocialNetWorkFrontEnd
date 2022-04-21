import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMapMarked, faBraille, faCommenting
} from '@fortawesome/free-solid-svg-icons'

import { Navigate, useNavigate } from 'react-router-dom'

export default function Topbar() {

    const user = JSON.parse(localStorage.getItem('user'))

    const navigate = useNavigate()

    const handlerLogout = (e) => {
        // console.log('logout')
        localStorage.clear()
        // navigate('/register')
        // console.log('chay qua roi');
        window.location.href = '/'
    }

    return (
        <div className="topbar stick">
            <div className="logo">
                <a title href="newsfeed.html"><img src="images/logo.png" alt /></a>
            </div>
            <div className="top-area">
                <div className="main-menu">
                    <span>
                        <FontAwesomeIcon icon={faBraille} />
                    </span>
                </div>
                <div className="top-search">
                    <form method="post" className>
                        <input type="text" placeholder="Search People, Pages, Groups etc" />
                        <button data-ripple><i className="ti-search" /></button>
                    </form>
                </div>
                <div className="page-name">
                    <span>Timeline</span>
                </div>
                <ul className="setting-area">
                    <li><a href="newsfeed.html" title="Home" data-ripple><i className="fa fa-home" /></a></li>
                    <li>
                        <a href="#" title="Friend Requests" data-ripple>
                            <i className="fa fa-user" /><em className="bg-red">5</em>
                        </a>
                        <div className="dropdowns">
                            <span>5 New Requests <a href="#" title>View all Requests</a></span>
                            <ul className="drops-menu">
                                <li>
                                    <div>
                                        <figure>
                                            <img src="images/resources/thumb-2.jpg" alt />
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6><a href="#" title>Loren</a></h6>
                                            <span><b>Amy</b> is mutule friend</span>
                                            <i>yesterday</i>
                                        </div>
                                        <div className="add-del-friends">
                                            <a href="#" title><i className="fa fa-heart" /></a>
                                            <a href="#" title><i className="fa fa-trash" /></a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <figure>
                                            <img src="images/resources/thumb-3.jpg" alt />
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6><a href="#" title>Tina Trump</a></h6>
                                            <span><b>Simson</b> is mutule friend</span>
                                            <i>2 days ago</i>
                                        </div>
                                        <div className="add-del-friends">
                                            <a href="#" title><i className="fa fa-heart" /></a>
                                            <a href="#" title><i className="fa fa-trash" /></a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <figure>
                                            <img src="images/resources/thumb-4.jpg" alt />
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6><a href="#" title>Andrew</a></h6>
                                            <span><b>Bikra</b> is mutule friend</span>
                                            <i>4 hours ago</i>
                                        </div>
                                        <div className="add-del-friends">
                                            <a href="#" title><i className="fa fa-heart" /></a>
                                            <a href="#" title><i className="fa fa-trash" /></a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <figure>
                                            <img src="images/resources/thumb-5.jpg" alt />
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6><a href="#" title>Dasha</a></h6>
                                            <span><b>Sarah</b> is mutule friend</span>
                                            <i>9 hours ago</i>
                                        </div>
                                        <div className="add-del-friends">
                                            <a href="#" title><i className="fa fa-heart" /></a>
                                            <a href="#" title><i className="fa fa-trash" /></a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <figure>
                                            <img src="images/resources/thumb-1.jpg" alt />
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6><a href="#" title>Emily</a></h6>
                                            <span><b>Amy</b> is mutule friend</span>
                                            <i>4 hours ago</i>
                                        </div>
                                        <div className="add-del-friends">
                                            <a href="#" title><i className="fa fa-heart" /></a>
                                            <a href="#" title><i className="fa fa-trash" /></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <a href="friend-requests.html" title className="more-mesg">View All</a>
                        </div>
                    </li>
                    <li>
                        <a href="#" title="Notification" data-ripple>
                            <i className="fa fa-bell" /><em className="bg-purple">7</em>
                        </a>
                        <div className="dropdowns">
                            <span>4 New Notifications <a href="#" title>Mark all as read</a></span>
                            <ul className="drops-menu">
                                <li>
                                    <a href="notifications.html" title>
                                        <figure>
                                            <img src="images/resources/thumb-1.jpg" alt />
                                            <span className="status f-online" />
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>sarah Loren</h6>
                                            <span>commented on your new profile status</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="notifications.html" title>
                                        <figure>
                                            <img src="images/resources/thumb-2.jpg" alt />
                                            <span className="status f-online" />
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>Jhon doe</h6>
                                            <span>Nicholas Grissom just became friends. Write on his wall.</span>
                                            <i>4 hours ago</i>
                                            <figure>
                                                <span>Today is Marina Valentine’s Birthday! wish for celebrating</span>
                                                <img src="images/birthday.png" alt />
                                            </figure>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="notifications.html" title>
                                        <figure>
                                            <img src="images/resources/thumb-3.jpg" alt />
                                            <span className="status f-online" />
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>Andrew</h6>
                                            <span>commented on your photo.</span>
                                            <i>Sunday</i>
                                            <figure>
                                                <span>"Celebrity looks Beautiful in that outfit! We should see
                                                    each"</span>
                                                <img src={user.profile.image} alt />
                                            </figure>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="notifications.html" title>
                                        <figure>
                                            <img src="images/resources/thumb-4.jpg" alt />
                                            <span className="status f-online" />
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>Tom cruse</h6>
                                            <span>nvited you to attend to his event Goo in</span>
                                            <i>May 19</i>
                                        </div>
                                    </a>
                                    <span className="tag">New</span>
                                </li>
                                <li>
                                    <a href="notifications.html" title>
                                        <figure>
                                            <img src="images/resources/thumb-5.jpg" alt />
                                            <span className="status f-online" />
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>Amy</h6>
                                            <span>Andrew Changed his profile picture. </span>
                                            <i>dec 18</i>
                                        </div>
                                    </a>
                                    <span className="tag">New</span>
                                </li>
                            </ul>
                            <a href="notifications.html" title className="more-mesg">View All</a>
                        </div>
                    </li>
                    <li>
                        <a href="#" title="Messages" data-ripple><FontAwesomeIcon icon={faCommenting} /><em className="bg-blue">9</em></a>
                        <div className="dropdowns">
                            <span>5 New Messages <a href="#" title>Mark all as read</a></span>
                            <ul className="drops-menu">
                                <li>
                                    <a className="show-mesg" href="#" title>
                                        <figure>
                                            <img src="images/resources/thumb-1.jpg" alt />
                                            <span className="status f-online" />
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>sarah Loren</h6>
                                            <span><i className="ti-check" /> Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="show-mesg" href="#" title>
                                        <figure>
                                            <img src="images/resources/thumb-2.jpg" alt />
                                            <span className="status f-offline" />
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>Jhon doe</h6>
                                            <span><i className="ti-check" /> We’ll have to check that at the office and
                                                see if the client is on board with</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="show-mesg" href="#" title>
                                        <figure>
                                            <img src="images/resources/thumb-3.jpg" alt />
                                            <span className="status f-online" />
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>Andrew</h6>
                                            <span> <i className="fa fa-paperclip" />Hi Jack's! It’s Diana, I just wanted
                                                to let you know that we have to reschedule..</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="show-mesg" href="#" title>
                                        <figure>
                                            <img src="images/resources/thumb-4.jpg" alt />
                                            <span className="status f-offline" />
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>Tom cruse</h6>
                                            <span><i className="ti-check" /> Great, I’ll see you tomorrow!.</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag">New</span>
                                </li>
                                <li>
                                    <a className="show-mesg" href="#" title>
                                        <figure>
                                            <img src="images/resources/thumb-5.jpg" alt />
                                            <span className="status f-away" />
                                        </figure>
                                        <div className="mesg-meta">
                                            <h6>Amy</h6>
                                            <span><i className="fa fa-paperclip" /> Sed ut perspiciatis unde omnis iste
                                                natus error sit </span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag">New</span>
                                </li>
                            </ul>
                            <a href="chat-messenger.html" title className="more-mesg">View All</a>
                        </div>
                    </li>
                    <li><a href="#" title="Languages" data-ripple><i className="fa fa-globe" /><em>EN</em></a>
                        <div className="dropdowns languages">
                            <div data-gutter={10} className="row">
                                <div className="col-md-3">
                                    <ul className="dropdown-meganav-select-list-lang">
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/UK.png" />English(UK)
                                            </a>
                                        </li>
                                        <li className="active">
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/US.png" />English(US)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/DE.png" />Deutsch
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/NED.png" />Nederlands
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/FR.png" />Français
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/SP.png" />Español
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/ARG.png" />Español (AR)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/IT.png" />Italiano
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/PT.png" />Português (PT)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/BR.png" />Português (BR)
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <ul className="dropdown-meganav-select-list-lang">
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/FIN.png" />Suomi
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/SW.png" />Svenska
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/DEN.png" />Dansk
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/CZ.png" />Čeština
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/HUN.png" />Magyar
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/ROM.png" />Română
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/JP.png" />日本語
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/CN.png" />简体中文
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/PL.png" />Polski
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/GR.png" />Ελληνικά
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <ul className="dropdown-meganav-select-list-lang">
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/TUR.png" />Türkçe
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/BUL.png" />Български
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/ARB.png" />العربية
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/KOR.png" />한국어
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/ISR.png" />עברית
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/LAT.png" />Latviski
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/UKR.png" />Українська
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/IND.png" />Bahasa Indonesia
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/MAL.png" />Bahasa Malaysia
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/TAI.png" />ภาษาไทย
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <ul className="dropdown-meganav-select-list-lang">
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/CRO.png" />Hrvatski
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/LIT.png" />Lietuvių
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/SLO.png" />Slovenčina
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/SERB.png" />Srpski
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/SLOVE.png" />Slovenščina
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/NAM.png" />Tiếng Việt
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/PHI.png" />Filipino
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/ICE.png" />Íslenska
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/EST.png" />Eesti
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img title="Image Title" alt="Image Alternative text" src="images/flags/RU.png" />Русский
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href="#" title="Help" data-ripple><i className="fa fa-question-circle" /></a>
                        <div className="dropdowns helps">
                            <span>Quick Help</span>
                            <form method="post">
                                <input type="text" placeholder="How can we help you?" />
                            </form>
                            <span>Help with this page</span>
                            <ul className="help-drop">
                                <li><a href="forum.html" title><i className="fa fa-book" />Community &amp; Forum</a></li>
                                <li><a href="faq.html" title><i className="fa fa-question-circle-o" />FAQs</a></li>
                                <li><a href="career.html" title><i className="fa fa-building-o" />Carrers</a></li>
                                <li><a href="privacy.html" title><i className="fa fa-pencil-square-o" />Terms &amp;
                                    Policy</a></li>
                                <li><a href="#" title><FontAwesomeIcon icon={faMapMarked} />Contact</a></li>
                                <li><a href="#" title><i className="fa fa-exclamation-triangle" />Report a Problem</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className="user-img">
                    <h5>Jack Carter</h5>
                    <img src={user.profile.image} style={{height: "40px", width: '40px'}} />
                    <span className="status f-online" />
                    <div className="user-setting">
                        <span className="seting-title">Chat setting <a href="#" title>see all</a></span>
                        <ul className="chat-setting">
                            <li><a href="#" title><span className="status f-online" />online</a></li>
                            <li><a href="#" title><span className="status f-away" />away</a></li>
                            <li><a href="#" title><span className="status f-off" />offline</a></li>
                        </ul>
                        <span className="seting-title">User setting <a href="#" title>see all</a></span>
                        <ul className="log-out">
                            <li><a href="about.html" title><i className="ti-user" /> view profile</a></li>
                            <li><a href="setting.html" title><i className="ti-pencil-alt" />edit profile</a></li>
                            <li><a href="#" title><i className="ti-target" />activity log</a></li>
                            <li><a href="setting.html" title><i className="ti-settings" />account setting</a></li>
                            <li><a onClick={handlerLogout}><i className="ti-power-off" />log out</a></li>
                        </ul>
                    </div>
                </div>
                <span className="ti-settings main-menu" data-ripple />
            </div>
            <nav>
                <ul className="nav-list">
                    <li><a className href="#" title><i className="fa fa-home" /> Home Pages</a>
                        <ul>
                            <li><a href="newsfeed.html" title>Pitnik Default</a></li>
                            <li><a href="company-landing.html" title>Company Landing</a></li>
                            <li><a href="pitrest.html" title>Pitrest</a></li>
                            <li><a href="redpit.html" title>Redpit</a></li>
                            <li><a href="redpit-category.html" title>Redpit Category</a></li>
                            <li><a href="soundnik.html" title>Soundnik</a></li>
                            <li><a href="soundnik-detail.html" title>Soundnik Single</a></li>
                            <li><a href="career.html" title>Pitjob</a></li>
                            <li><a href="shop.html" title>Shop</a></li>
                            <li><a href="classified.html" title>Classified</a></li>
                            <li><a href="pitpoint.html" title>PitPoint</a></li>
                            <li><a href="pittube.html" title>Pittube</a></li>
                            <li><a href="chat-messenger.html" title>Messenger</a></li>
                        </ul>
                    </li>
                    <li><a className href="#" title><i className="fa fa-film" /> Pittube</a>
                        <ul>
                            <li><a href="pittube.html" title>Pittube</a></li>
                            <li><a href="pittube-detail.html" title>Pittube single</a></li>
                            <li><a href="pittube-category.html" title>Pittube Category</a></li>
                            <li><a href="pittube-channel.html" title>Pittube Channel</a></li>
                            <li><a href="pittube-search-result.html" title>Pittube Search Result</a></li>
                        </ul>
                    </li>
                    <li><a className href="#" title><i className="fa fa-female" /> PitPoint</a>
                        <ul>
                            <li><a href="pitpoint.html" title>PitPoint</a></li>
                            <li><a href="pitpoint-detail.html" title>Pitpoint Detail</a></li>
                            <li><a href="pitpoint-list.html" title>Pitpoint List style</a></li>
                            <li><a href="pitpoint-without-baner.html" title>Pitpoint without Banner</a></li>
                            <li><a href="pitpoint-search-result.html" title>Pitpoint Search</a></li>
                        </ul>
                    </li>
                    <li><a className href="#" title><i className="fa fa-graduation-cap" /> Pitjob</a>
                        <ul>
                            <li><a href="career.html" title>Pitjob</a></li>
                            <li><a href="career-detail.html" title>Pitjob Detail</a></li>
                            <li><a href="career-search-result.html" title>Job seach page</a></li>
                            <li><a href="social-post-detail.html" title>Social Post Detail</a></li>
                        </ul>
                    </li>
                    <li><a className href="#" title><i className="fa fa-repeat" /> Timeline</a>
                        <ul>
                            <li><a href="timeline.html" title>Timeline</a></li>
                            <li><a href="timeline-photos.html" title>Timeline Photos</a></li>
                            <li><a href="timeline-videos.html" title>Timeline Videos</a></li>
                            <li><a href="timeline-groups.html" title>Timeline Groups</a></li>
                            <li><a href="timeline-friends.html" title>Timeline Friends</a></li>
                            <li><a href="timeline-friends2.html" title>Timeline Friends-2</a></li>
                            <li><a href="about.html" title>Timeline About</a></li>
                            <li><a href="blog-posts.html" title>Timeline Blog</a></li>
                            <li><a href="friends-birthday.html" title>Friends' Birthday</a></li>
                            <li><a href="newsfeed.html" title>Newsfeed</a></li>
                            <li><a href="search-result.html" title>Search Result</a></li>
                        </ul>
                    </li>
                    <li><a className href="#" title><i className="fa fa-heart" /> Favourit Page</a>
                        <ul>
                            <li><a href="fav-page.html" title>Favourit Page</a></li>
                            <li><a href="fav-favers.html" title>Fav Page Likers</a></li>
                            <li><a href="fav-events.html" title>Fav Events</a></li>
                            <li><a href="fav-event-invitations.html" title>Fav Event Invitations</a></li>
                            <li><a href="event-calendar.html" title>Event Calendar</a></li>
                            <li><a href="fav-page-create.html" title>Create New Page</a></li>
                            <li><a href="price-plans.html" title>Price Plan</a></li>
                        </ul>
                    </li>
                    <li><a className href="#" title><i className="fa fa-forumbee" /> Forum</a>
                        <ul>
                            <li><a href="forum.html" title>Forum</a></li>
                            <li><a href="forum-create-topic.html" title>Forum Create Topic</a></li>
                            <li><a href="forum-open-topic.html" title>Forum Open Topic</a></li>
                            <li><a href="forums-category.html" title>Forum Category</a></li>
                        </ul>
                    </li>
                    <li><a className href="#" title><i className="fa fa-star-o" /> Featured</a>
                        <ul>
                            <li><a href="chat-messenger.html" title>Messenger (Chatting)</a></li>
                            <li><a href="notifications.html" title>Notifications</a></li>
                            <li><a href="badges.html" title>Badges</a></li>
                            <li><a href="faq.html" title>Faq's</a></li>
                            <li><a href="contribution.html" title>Contriburion Page</a></li>
                            <li><a href="manage-page.html" title>Manage Page</a></li>
                            <li><a href="weather-forecast.html" title>weather-forecast</a></li>
                            <li><a href="statistics.html" title>Statics/Analytics</a></li>
                            <li><a href="shop-cart.html" title>Shop Cart</a></li>
                        </ul>
                    </li>
                    <li><a className href="#" title><i className="fa fa-gears" /> Account Setting</a>
                        <ul>
                            <li><a href="setting.html" title>Setting</a></li>
                            <li><a href="privacy.html" title>Privacy</a></li>
                            <li><a href="support-and-help.html" title>Support &amp; Help</a></li>
                            <li><a href="support-and-help-detail.html" title>Support Detail</a></li>
                            <li><a href="support-and-help-search-result.html" title>Support Search</a></li>
                        </ul>
                    </li>
                    <li><a className href="#" title><i className="fa fa-lock" /> Authentication</a>
                        <ul>
                            <li><a href="login.html" title>Login Page</a></li>
                            <li><a href="register.html" title>Register Page</a></li>
                            <li><a href="logout.html" title>Logout Page</a></li>
                            <li><a href="coming-soon.html" title>Coming Soon</a></li>
                            <li><a href="error-404.html" title>Error 404</a></li>
                            <li><a href="error-404-2.html" title>Error 404-2</a></li>
                            <li><a href="error-500.html" title>Error 500</a></li>
                        </ul>
                    </li>
                    <li><a className href="#" title><i className="fa fa-wrench" /> Tools</a>
                        <ul>
                            <li><a href="typography.html" title>Typography</a></li>
                            <li><a href="popup-modals.html" title>Popups/Modals</a></li>
                            <li><a href="post-versions.html" title>Post Versions</a></li>
                            <li><a href="sliders.html" title>Sliders / Carousel</a></li>
                            <li><a href="google-map.html" title>Google Maps</a></li>
                            <li><a href="widgets.html" title>Widgets</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>{/* nav menu */}
        </div>
    )
}