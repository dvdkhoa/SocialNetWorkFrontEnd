import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faMapMarked, faMusic, faVideoCamera, faImage, faCamera } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"


export default function Postbox({ createPost, user }) {

    const [text, setText] = useState('')
    const [photos, setPhotos] = useState(null)


    return (
        <div className="central-meta postbox">
            <span className="create-post">Create post</span>
            <div className="new-postbox">
                <figure>
                    <img src={user.profile.image} width="30px" />
                </figure>
                <div className="newpst-input">
                    <form method="post">
                        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={2} placeholder="Share some what you are thinking?" defaultValue={""} />
                    </form>
                </div>
                <div className="attachments">
                    <ul>
                        <li>
                            <span className="add-loc">
                                <FontAwesomeIcon icon={faMapMarked} />
                            </span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMusic} />
                            <label className="fileContainer">
                                <input type="file" />
                            </label>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faImage} />
                            <label className="fileContainer">
                                <input className="fileContainer" type="file" onChange={(e) => setPhotos(e.target.files)} />

                            </label>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faVideoCamera} />
                            <label className="fileContainer">
                                <input type="file" />
                            </label>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCamera} />
                            <label className="fileContainer">
                                <input type="file" />
                            </label>
                        </li>
                        <li className="preview-btn">
                            <button className="post-btn-preview" type="submit" data-ripple>Preview</button>
                        </li>
                        <button onClick={() => createPost(text, photos)} className="post-btn" type="submit" data-ripple>Post</button>
                    </ul>
                </div>
                <div className="add-location-post">
                    <span>Drag map point to selected area</span>
                    <div className="row">
                        <div className="col-lg-6">
                            <label className="control-label">Lat :</label>
                            <input type="text" className id="us3-lat" />
                        </div>
                        <div className="col-lg-6">
                            <label>Long :</label>
                            <input type="text" className id="us3-lon" />
                        </div>
                    </div>
                    {/* map */}
                    <div id="us3" />
                </div>
            </div>
        </div>
    )
}