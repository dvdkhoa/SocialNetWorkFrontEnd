export default function Popup1() {
    return (
        <div className="popup-wraper1">
            <div className="popup direct-mesg">
                <span className="popup-closed"><i className="ti-close" /></span>
                <div className="popup-meta">
                    <div className="popup-head">
                        <h5>Send Message</h5>
                    </div>
                    <div className="send-message">
                        <form method="post" className="c-form">
                            <input type="text" placeholder="Sophia" />
                            <textarea placeholder="Write Message" defaultValue={""} />
                            <button type="submit" className="main-btn">Send</button>
                        </form>
                        <div className="add-smiles">
                            <div className="uploadimage">
                                <i className="fa fa-image" />
                                <label className="fileContainer">
                                    <input type="file" />
                                </label>
                            </div>
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
                    </div>
                </div>
            </div>
        </div> 
    )
}