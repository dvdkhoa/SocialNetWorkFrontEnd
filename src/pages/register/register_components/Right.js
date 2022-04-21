import React from "react"
import { Link } from 'react-router-dom'

export default function Right() {
    return (
        <div className="col-lg-4">
            <div className="we-login-register">
                <div className="form-title">
                    <i className="fa fa-key" />Sign Up
                    <span>Sign Up now and meet the awesome friends around the world.</span>
                </div>
                <form className="we-form" method="post">
                    <input type="text" name="fullname" placeholder="Enter your fullname" />
                    <input type="text" name="email" placeholder="Email" />
                    <input type="password" name="pass" placeholder="Password" />
                    <input type="text" name="phonenumber" placeholder="+1234-567-987" />
                    <input type="date" name="birthday" placeholder="Choose your date of birth" />
                    <button type="submit" name="register" data-ripple>REGISTER</button>
                </form>
                <a data-ripple title href="#" className="with-smedia facebook"><i className="fa fa-facebook" /></a>
                <a data-ripple title href="#" className="with-smedia twitter"><i className="fa fa-twitter" /></a>
                <a data-ripple title href="#" className="with-smedia instagram"><i className="fa fa-instagram" /></a>
                <a data-ripple title href="#" className="with-smedia google"><i className="fa fa-google-plus" /></a>

                <span>Already have an account? <Link to={"/"} className="we-account underline" >Sign in</Link></span>
            </div>
        </div>
    )
}