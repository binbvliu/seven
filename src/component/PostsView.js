import React,{Component} from 'react';
import {Link} from "react-router-dom";
class PostsView extends Component{
    render(){
        const {posts} = this.props;
        return  (
            <ul>
                {posts.map(item=>(
                    //使用link包裹每一个PostItem
                    <Link key={item.id} to={`/posts/${item.id }`}></Link>
                ))}
            </ul>
        )
    }
}

export default PostsView;