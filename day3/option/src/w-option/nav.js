import React,{Fragment,Component} from 'react'
import './nav.css'

class Nav extends Component{
    constructor(){
        super()
        this.state={
            list:['恐怖','科幻','喜剧']
        }
    }
    initdata(data){
        let {sel}=this.props
        return(
            <ul>
                {data.map((item,index)=>{
                    return(
                    <span key={index} 
                        className={sel==item?'nav-span':'nav-span1'}
                        onClick={()=>{this.props.chagesel(item)}}
                        >
                        {item}
                    </span>
                    )
                })}
            </ul>
        )
    }
    render(){
        let {list}=this.state
        return(
            <Fragment>
                {this.initdata(list)}
            </Fragment>
        )
    }
}
export default Nav