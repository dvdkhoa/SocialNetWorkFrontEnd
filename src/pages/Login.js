import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Login({ login }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <div className="gap no-gap signin whitish medium-opacity">
            <div className="bg-image" style={{ backgroundImage: 'url(images/resources/theme-bg.jpg)' }} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="big-ad">
                            <figure><img alt='hình thôi chứ có gì đâu' src="images/logo2.png"  /></figure>
                            <h1>Welcome to the Pitnik</h1>
                            <p>
                                Pitnik is a social network template that can be used to connect people. use this template for multipurpose social activities like job, dating, posting, bloging and much more. Now join &amp; Make Cool Friends around the world !!!
                            </p>
                            <div className="fun-fact">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-4">
                                        <div className="fun-box">
                                            <i className="ti-check-box" />
                                            <h6>Registered People</h6>
                                            <span>1,01,242</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-4">
                                        <div className="fun-box">
                                            <i className="ti-layout-media-overlay-alt-2" />
                                            <h6>Posts Published</h6>
                                            <span>21,03,245</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-4">
                                        <div className="fun-box">
                                            <i className="ti-user" />
                                            <h6>Online Users</h6>
                                            <span>40,145</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="barcode">
                                <figure><img alt='hình thôi chứ có gì đâu' src="images/resources/Barcode.jpg"  /></figure>
                                <div className="app-download">
                                    <span>Download Mobile App and Scan QR Code to login</span>
                                    <ul className="colla-apps">
                                        <li><a title href="https://play.google.com/store?hl=en"><img alt='hình thôi chứ có gì đâu' src="images/android.png"  />android</a></li>
                                        <li><a title href="https://www.apple.com/lae/ios/app-store/"><img alt='hình thôi chứ có gì đâu' src="images/apple.png"  />iPhone</a></li>
                                        <li><a title href="https://www.microsoft.com/store/apps"><img alt='hình thôi chứ có gì đâu' src="images/windows.png"  />Windows</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="we-login-register">
                            <div className="form-title">
                                <i className="fa fa-key" />login
                                <span>sign in now and meet the awesome Friends around the world.</span>
                            </div>
                            <form onSubmit={submit} className="we-form" method="post">
                                <input type="text" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                                <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                                <input type="checkbox" /><label>remember me</label>
                                <button type="submit" data-ripple>sign in</button>
                                <a className="forgot underline" href="#" title>forgot password?</a>
                            </form>
                            <a className="with-smedia facebook" href="#" title data-ripple><i className="fa fa-facebook" /></a>
                            <a className="with-smedia twitter" href="#" title data-ripple><i className="fa fa-twitter" /></a>
                            <a className="with-smedia instagram" href="#" title data-ripple><i className="fa fa-instagram" /></a>
                            <a className="with-smedia google" href="#" title data-ripple><i className="fa fa-google-plus" /></a>
                            <span>don't have an account? <Link to={"/register"} className="we-account underline"  title>register now</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
