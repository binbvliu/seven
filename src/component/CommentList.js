import React,{Component} from 'react';
import CommentsView from './CommentsView';
import './CommentList.css';

class CommentList extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        };

    };
    //处理评论内容的变化
    handleChange(e){
        this.setState({
            value:e.target.value
        });
    };
    //保存新的评论
    handleClick(e){
        const content = this.state.value;
        if(content.length>0){
            this.props.onSubmit(this.state.value);
            this.setState({
                value:''
            })
        }else{
            alert('评论的内容不能为空');
        }
    };
    render(){
        const {comments,editable} = this.props;
        return (
            <div className='commentList'>
                <div className='title'>评论</div>
                {editable?(<div className='editable'>
                    <textarea placeholder='说说你的看法' value={this.state.value}  onChange={this.handleChange}></textarea>
                    <button onClick={this.handleClick}>提交</button>
                </div>):null}
                <CommentsView comments={comments}></CommentsView>
            </div>
        )
    }
}
export default CommentList;