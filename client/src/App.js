import React, { Component } from 'react'
import './App.css';
import Mainpage from './Main/Mainpage'
import Polls from './CreatePolls/Polls'
import Editpolls from './EditPolls/Editpolls';
import Stats from './Stats/Stats'
import Login from './components/login';
import Reg from './components/reg';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Password from './Changepassword/Password'
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import axios from 'axios';




 class App extends Component {
   constructor(props){
    super(props);
    this.state={}
    this.state = {
           question:'',
           options:['',''],
           date:new Date()
               
     }
   }
question=(x)=>{
this.setState({ [x.target.name]: x.target.value });
//console.log(this.state) 
 }
 addAnswer = ()=>{
  this.setState({ options: [...this.state.options, ''] });
}
handelAnswer=(e,index)=>{

  const options = [...this.state.options];
  options[index] = e.target.value;
  this.setState({options})
  
}
// componentDidMount() {
//   console.log(this.state)
// }

//  componentDidMount() {
//  axios.get("http://localhost:8080/api/polls").then((res)=> console.log("res",res))
  
  
// }
 storepolls=async (e)=>{
e.preventDefault();
const token = localStorage.getItem("token")
console.log(token)
const user={
  question:this.state.question,
  options:this.state.options
}
//console.log(user)
 axios.post("http://localhost:8080/api/polls/",token,user).then(res=>console.log(res))
}

  render() {
    return (
      <div>
     <Router>
      <Route path="/" exact component={Reg} />
        <Route path="/login/" component={Login} />
         <Route path="/mainpage/" exact component={Mainpage} />
        <Route path="/polls" exact render={(props)=><Polls {...props} db={this.state} question={this.question} addAnswer={this.addAnswer} handleAnswer={this.handelAnswer} storepolls={this.storepolls}></Polls>}/>
        <Route path="/stats" exact component={Stats} />
        <Route path="/mypolls" exact component={Editpolls} />
        <Route path="/changepassword" exact component={Password} /> }

      </Router>
        
      </div>
    )
  }
}

export default App;
// function App() {
//   return (
//     <div>
//       {/* <Editpolls /> */}
//       {/* <Stats /> */}
//     </div>
//   );
// }

// export default App;
