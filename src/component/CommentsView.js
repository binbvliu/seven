import React ,{Component} from 'react';
import {getFormatDate} from  '../utils/date';
import "./CommentsView.css";

class CommentsView extends Component{
    render(){
        const {contents}  = this.props;
        return (
            <ul className='commentsView'>
               {contents.map(item=>{
                   return (
                       <li key={item.id}>
                        <div className='sub'>
                            <span>{item.author.username}</span>
                            <span>.</span>
                            <span>{getFormatDate(item.updatedAt)}</span>
                        </div>
                       </li>
                   )
               })} 
            </ul>
        );
    }
}
export default CommentsView;