import React,{Component} from 'react'
import Input from './input'
import List from './list'
 
class Box extends Component{
    render(){
        return(
            <div>
                <Input></Input>
                <List></List>
            </div>
        )
    }
}

export default Box