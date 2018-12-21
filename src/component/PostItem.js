import React from 'react';
import {getFormatDate} from '../utils/date';
import './PostItem.css';
import like from '../images/like.png';


function PostItem(props){
    const {post} = props;
    return (
        <li className='postItem'>
            <div className='title'> {post.title}</div>
            <div>
                创建人:<span>{post.author.username}</span>
            </div>
            <div>
               更新时间:<span>{getFormatDate(post.author.username)}</span>
            </div>
            <div className='like'>
                <span>
                    <img alt='vote' src={like}></img>
                </span>
            </div>
        </li>
    );
}
export default PostItem;