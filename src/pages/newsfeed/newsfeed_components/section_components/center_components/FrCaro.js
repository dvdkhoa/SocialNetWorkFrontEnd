import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faUserPlus, faUserTimes } from "@fortawesome/free-solid-svg-icons"

export default function FrCaro() {
    return (
        <li>
            <img src="images/resources/recent1.jpg" alt />
            <div className="sugtd-frnd-meta">
                <a href="#" title>Olivia</a>
                <span>1 mutual friend</span>
                <ul className="add-remove-frnd">
                    <li className="add-tofrndlist"><a href="#" title="Add friend"><FontAwesomeIcon icon={faUserPlus} /></a></li>
                    <li className="remove-frnd"><a href="#" title="remove friend"><FontAwesomeIcon icon={faUserTimes} /></a></li>
                </ul>
            </div>
        </li>
    )
}