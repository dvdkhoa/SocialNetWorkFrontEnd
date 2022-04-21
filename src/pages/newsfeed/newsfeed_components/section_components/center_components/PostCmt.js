import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useRef } from "react";

export default function PostCmt({ postId, addComment }) {
    
    const user = JSON.parse(localStorage.getItem('user'))

    const commentRef = useRef(null)

    const SendComment = () => {
        
        console.log('comment ne: ', commentRef.current.value);

        axios.post('https://localhost:7284/api/post/comment',
        {
            userId: user.userId,
            postId: postId,
            text: commentRef.current.value
        }).then(res => {
            commentRef.current.value = ''
            addComment(res.data.data)
        })
    }

    return (
        <li className="post-comment">
            <div className="comet-avatar">
                <img src={user.profile.image} alt />
            </div>
            <div className="post-comt-box">
                <form method="post">
                    <textarea placeholder="Post your comment" ref={commentRef} />
                    <div className="add-smiles">
                        <div className="uploadimage">
                            <i className="fa fa-image" />
                            <label className="fileContainer">
                                <input type="file" />
                            </label>
                        </div>
                        <span className="em em-expressionless" title="add icon" />
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
                        <div onClick={SendComment} style={{cursor: 'pointer'}}>
                            <FontAwesomeIcon icon={faPaperPlane} style={{fontSize: '30px', marginTop: '10px'}} />
                        </div>
                    </div>
                    
                </form>
            </div>
        </li>
    )
}