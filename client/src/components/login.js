import axios from 'axios'
import React,{Component} from 'react';
import './login.css';
import Nav from './Nav'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import {login } from './Functions'
class Login extends Component{
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
        
    }

    onSubmit (e) {
        e.preventDefault()

        axios.post('http://localhost:8080/api/auth/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(res => {
            //console.log(res)
            localStorage.setItem('token', res.data.token)
            // return res.data
            
            if (res.data.token) {
                this.props.history.push("/mainpage")}
            else{
                this.props.history.push("/login")
                alert(res.data.message)

            }
        })
        
           
    }


    render(){
        return (
            <div>
                <Nav/>
            <div class="login-container d-flex align-items-center justify-content-center stl" >
            <form class="login-form text-center" onSubmit={this.onSubmit}>
            <h1 class="mb-5 font-weight-light textuppercase">LOGIN</h1>
            <div class="form-group">
            <input type="email" class="form-control rounded-pill form-control-lg" placeholder="email" name="username" value={this.state.username} onChange={this.onChange}></input>
            </div>
            <div class="form-group">
            <input type="password" class="form-control  rounded-pill form-control-lg" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}></input>
            </div>
            <div class="forgot-link d-flex align-items-center justify-content-between ">
               <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="remember"></input>
                    <label for="remember">Remember Password</label>
                </div>   
                <a href="#index">Forgot Password?</a>
    
            </div>
            <button type="submit" class="btn mt-5 btn-primary btn-block  rounded-pill rounded-lg">Login</button>
            <p class="mt-3 font-weight-normal">Do not have an account?  <a href="#index"><strong><Link to="/">Register</Link></strong> </a> </p>
                </form>
            </div>
            </div>
        )
    }
}
export default Login;