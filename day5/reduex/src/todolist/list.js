import React,{Component} from 'react'
import Store from './store/store'
import Action from './store/action'
import './list.css'

class List extends Component{
    componentDidMount(){
        Store.subscribe(()=>{
            this.setState({})
        })
    }
    del=(index)=>{
        Action.dellist(index)
    }
    chages=(index)=>{
        Action.chages(index)
    }
    render(){
        let {list}=Store.getState()
        return(
            <div>
                {list.map((item,index)=>{
                    return <li key={index}>
                    <span>{item.mag}</span>
                    <span className='list-span1' onClick={this.del.bind(this,index)}>删除</span>
                    <span className={item.sel?'list-span2':'list-span3'} onClick={this.chages.bind(this,index)}>{item.sel?'已完成':'未完成'}</span>
                    </li>
                })}
            </div>
        )
    }
}

export default List