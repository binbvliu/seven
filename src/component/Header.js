import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component{
    render(){
        const {username,onLogout,location}  =this.props;
        return (
            <div className='header'>
                <div className='nav'>
                    <span className='left-link'>
                        <Link to='/'>首页</Link>
                     </span>
                     {username&&username.length>0?(<span className='user'>当前用户:{username}&nbsp;<button onClick={onLogout}>注销</button></span>)
                     :(<span className='right-link'>
                        <Link to={{pathName:"/login",state:{form:location}}}></Link>
                     </span>)}
                </div>
            </div>
        )
    }
}
export default Header;