import React ,{Component} from 'react';
import './login.css';
import { BrowserRouter as Router, Route, Link,withRouter } from "react-router-dom";
import Nav from './Nav';
//import {register } from './Functions'
import axios from 'axios'


class Reg extends Component {
    constructor() {
        super()
        this.state = {
            
            name:'',
            username: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
      //  this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
        
    }

    onSubmit =(e)=> {
        e.preventDefault()
        
    

     axios.post('http://localhost:8080/api/auth/register', {
         // first_name: newUser.first_name,
         // last_name: newUser.last_name,
         name:this.state.name,
         username: this.state.username,
         password: this.state.password,
     })
     .then(res => {
         if(res.data.message==="registered")
         this.props.history.push('/login')
         else{
             alert(res.data.message)
         }
     })
}
        // .then(res => {
            
        //     this.props.history.push('/login')
        // })
    

    render(){
        return (
            <div>
             <Nav />
            <div class="login-container d-flex align-items-center justify-content-center stl" >
            <form class="login-form text-center" onSubmit={this.onSubmit}>
            <h1 class="mb-5 font-weight-light textuppercase">Register</h1>
            <div class="form-group">
            <input type="text" class="form-control rounded-pill form-control-lg" name="name" value={this.state.name} placeholder="UserName" onChange={this.onChange}></input>
            </div>
            <div class="form-group">
            <input type="email" class="form-control  rounded-pill form-control-lg" placeholder="Email"  name="username" value={this.state.username} onChange={this.onChange}></input>
            </div>
            <div class="form-group">
            <input type="password" class="form-control  rounded-pill form-control-lg" placeholder="Password"  name="password" value={this.state.password} onChange={this.onChange}></input>
            </div>
            
            <button type="submit" class="btn mt-5 btn-primary btn-block  rounded-pill rounded-lg">Register</button>
           
                </form>
            </div>
            </div>
        )
    }
}
 export default withRouter(Reg);