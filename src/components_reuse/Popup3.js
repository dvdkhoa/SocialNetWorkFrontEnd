export default function Popup3(){
    return (
        <div className="popup-wraper3">
        <div className="popup">
            <span className="popup-closed"><i className="ti-close" /></span>
            <div className="popup-meta">
                <div className="popup-head">
                    <h5>Report Post</h5>
                </div>
                <div className="Rpt-meta">
                    <span>We're sorry something's wrong. How can we help?</span>
                    <form method="post" className="c-form">
                        <div className="form-radio">
                            <div className="radio">
                                <label>
                                    <input type="radio" name="radio" defaultChecked="checked" /><i className="check-box" />It's
                                    spam or abuse
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" name="radio" /><i className="check-box" />It breaks r/technology's
                                    rules
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" name="radio" /><i className="check-box" />Not Related
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" name="radio" /><i className="check-box" />Other issues
                                </label>
                            </div>
                        </div>
                        <div>
                            <label>Write about Report</label>
                            <textarea placeholder="write someting about Post" rows={2} defaultValue={""} />
                        </div>
                        <div>
                            <button data-ripple type="submit" className="main-btn">Submit</button>
                            <a href="#" data-ripple className="main-btn3 cancel">Close</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}