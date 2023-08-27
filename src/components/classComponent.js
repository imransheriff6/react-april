import axios from "axios";
import { Component } from "react";

class ClassExample extends Component{
    constructor(){
        super();
        this.state = {
            data:[],
        }
        // this.changeHandler = this.changeHandler.bind(this)
    }
    changeHandler(){
        this.setState({
            data:'Welcome'
        })
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
           this.setState({
            data:res.data
           })
        })
        .catch(()=>{
            this.setState({
                data:[]
               })
        })
    }
    render(){
        return <>
        {
            this.state.data.map((ele)=>{
                return <p>{ele.id} {ele.username}</p>
            })
        }
        <button onClick={()=>this.changeHandler()}>Change</button>
        </>
    }
}

export default ClassExample