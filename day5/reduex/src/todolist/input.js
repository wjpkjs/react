import React,{Component} from 'react'
import Action from './store/action'

class Input extends Component{
    constructor(){
        super()
        this.state={
            int:''
        }
    }
    add=()=>{
        Action.addlist(this.state.int)
    }
    render(){
        return(
            <div>
                <input type='text' value={this.state.int} onChange={(e)=>{
                    this.setState({int:e.target.value})
                }}/>
                <button onClick={this.add}>添加</button>
            </div>
        )
    }
}

export default Input