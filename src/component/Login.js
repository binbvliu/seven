import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {post }  from  '../utils/request';
import url from '../utils/url';
import './Login.css';


class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'jack',
            password:'123456',
            redirectToReferrer:false //是否重定向到之前的页面
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        if(e.target.name==="username"){
            this.setState({
                username:e.target.value
            })
        }else if(e.target.name==="password"){
            this.setState({
                password:e.target.value
            })
        }else{
            //do nothing
        }
    };
    //处理登录提交
    handleSubmit(e){
        e.preventDefault();
        const username =this.state.username;
        const password  =this.state.password;
        if(username.length===0||password.length===0){
            alert('用户名或者密码不正确');
            return;
        };
        const params= {
            username,
            password
        };
        post(url.login(),params).then(data=>{
            if(data.error){
                alert(data.error.message||'login failed')
            }else{
                //保存信息到sessionStorage
                sessionStorage.setItem('userId',data.userId);
                sessionStorage.setItem('username',username);
                //登录成功后，设置redirectToReferrer为true
                this.setState({
                    redirectToReferrer:true
                })
            }
        })
    };
    render(){
        const {from}  =this.props.location.state||{form:{pathname:"/"}};
        const {redirectToReferrer} = this.state;
        //登录成功后 redirectToReferrer 为true 使用Redirect组件重定向页面
        if(redirectToReferrer){
            return <Redirect to={from}></Redirect>
        }
        return (
            <form className='login' onSubmit = {this.handleSubmit}>
                <div>
                    <label>
                        用户名:
                        <input name='username' type='text' value= {this.state.username} onChange={this.handleChange}></input>
                    </label>
                    <label>
                        密码:
                        <input name='password' type='password' value= {this.state.password} onChange={this.handleChange}></input>
                    </label>
                </div>
                <input type='submit' value='登录'></input>
            </form>
        )
    }
}
export default Login;
