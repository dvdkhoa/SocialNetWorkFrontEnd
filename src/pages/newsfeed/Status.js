import React, { useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
    faShareAlt, faCommenting
} from "@fortawesome/free-solid-svg-icons"
import PostCmt from './newsfeed_components/section_components/center_components/PostCmt'
import Comment from './newsfeed_components/section_components/center_components/Comment'
import axios from 'axios'


export default function Status({ post }) {
    console.log('post được truyền vào', post);

    const user = JSON.parse(localStorage.getItem('user'))

    const [likes, setLikes] = useState(post.likes.length)
    const [comments, setComments] = useState(post.comments)   

    console.log('like', likes);
    console.log('comments', comments);


    const likeFunc = () => {
        console.log('user', user.userId);
        console.log('post', post.id);
        axios.post('https://localhost:7284/api/post/like',
        {
            userId: user.userId,
            postId: post.id
        }).then((res) => {
            const likeCount = res.data.data.likeCount
            console.log('dữ liệu like trả về', likeCount)
            setLikes(likeCount)
        })
    }

    const addComment = (cmt) => {
        console.log('vao add comment va set State', cmt);
        setComments([...comments, cmt])
    }

    return (
        <div className="central-meta item">
            <div className="user-post">
                <div className="friend-info">
                    <figure>
                        <img src={post.by.image} />
                    </figure>
                    <div className="friend-name">
                        <div className="more">
                            <div className="more-post-optns"><i className="ti-more-alt" />
                                <ul>
                                    <li><i className="fa fa-pencil-square-o" />Edit Post
                                    </li>
                                    <li><i className="fa fa-trash-o" />Delete Post</li>
                                    <li className="bad-report"><i className="fa fa-flag" />Report Post</li>
                                    <li><i className="fa fa-address-card-o" />Boost This
                                        Post</li>
                                    <li><i className="fa fa-clock-o" />Schedule Post</li>
                                    <li><i className="fa fa-wpexplorer" />Select as
                                        featured</li>
                                    <li><i className="fa fa-bell-slash-o" />Turn off
                                        Notifications</li>
                                </ul>
                            </div>
                        </div>
                        <ins><a href="time-line.html" title>{post.by.name}</a> Post
                            Album</ins>
                        <span><i className="fa fa-globe" /> Published: {(new Date(post.meta.created).toLocaleString())}</span>
                    </div>
                    <div className="post-meta">
                        <p>
                            {post.detail.text}
                        </p>
                        <figure>
                            <div className="img-bunch">
                                <div className="row">
                                    <img src={"https://localhost:7284/"+post.detail.photos[0].url} />
                                </div>
                            </div>
                            <ul className="like-dislike">
                                <li><a className="bg-purple" href="#" title="Save to Pin Post"><i className="fa fa-thumb-tack" /></a></li>
                                <li><a className="bg-blue" href="#" title="Like Post"><i className="ti-thumb-up" /></a></li>
                                <li><a className="bg-red" href="#" title="dislike Post"><i className="ti-thumb-down" /></a></li>
                            </ul>
                        </figure>
                        <div className="we-video-info">
                            <ul>

                                <li>
                                    <div onClick={likeFunc} className="likes heart" title="Like/Dislike">❤
                                        <span>{likes}</span></div>
                                </li>
                                <li>
                                    <span className="comment" title="Comments">
                                        <FontAwesomeIcon icon={faCommenting} />
                                        <ins>{comments.length}</ins>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <a className="share-pst" href="#" title="Share">
                                            <FontAwesomeIcon icon={faShareAlt} />
                                        </a>
                                        <ins>20</ins>
                                    </span>
                                </li>
                            </ul>
                            <div className="users-thumb-list">
                                <a data-toggle="tooltip" title="Anderw" href="#">
                                    <img alt src="images/resources/userlist-1.jpg" />
                                </a>
                                <a data-toggle="tooltip" title="frank" href="#">
                                    <img alt src="images/resources/userlist-2.jpg" />
                                </a>
                                <a data-toggle="tooltip" title="Sara" href="#">
                                    <img alt src="images/resources/userlist-3.jpg" />
                                </a>
                                <a data-toggle="tooltip" title="Amy" href="#">
                                    <img alt src="images/resources/userlist-4.jpg" />
                                </a>
                                <a data-toggle="tooltip" title="Ema" href="#">
                                    <img alt src="images/resources/userlist-5.jpg" />
                                </a>
                                <span><strong>You</strong>, <b>Sarah</b> and <a href="#" title>24+ more</a> liked</span>
                            </div>
                        </div>
                    </div>
                    <div className="coment-area" style={{}}>
                        <ul className="we-comet">
                            {comments.map(cmt => <Comment name={cmt.by.name} hinh={cmt.by.image} text={cmt.text} time={new Date(cmt.ts).toLocaleTimeString()} />)}
                            <PostCmt postId={post.id} addComment={addComment} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
