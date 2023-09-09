import React from "react";
import './post.css'
import {BsThreeDotsVertical} from "react-icons/bs";


export default function Post() {

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTitle">
                        <img src="/assets/person/5.jpeg" alt="" className="postTopImg"/>
                        <span className='postPersonName'>Json Spring</span>
                        <span className='postTime'>5 mins ago</span>
                    </div>
                    <BsThreeDotsVertical  className='postTopAction' />
                </div>

                <div className="postContent">
                    <span className='postContentText'>This is my first post!</span>
                    <img src='/assets/post/2.jpeg' className='postContentImg' />
                </div>


                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="postLikeImg"/>
                        <img src="/assets/heart.png" alt="" className="postLikeImg"/>
                        <span className='likeCount'>32 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className='postCommentText'>
                            9 comments
                        </span>
                    </div>
                </div>


            </div>
        </div>
    )
}