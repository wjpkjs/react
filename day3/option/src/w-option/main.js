import React,{Fragment,Component} from 'react'
import './main.css'

class Main extends Component{
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    initdata(sel){
        setTimeout(() => {
            let obj={
                '恐怖':['咒怨','山村老师','恐怖的杨丹丹'],
                '科幻':['复仇者杨丹丹','黑衣人杨丹丹','x战警之杨丹丹的崛起'],
                '喜剧':['一路向西','西红柿首富','贞子大战杨丹丹']
            }
            let list=obj[sel]
            this.setState({list:list})
        }, 500);
    }
    shouldComponentUpdate(props,state){
        if(state.list.length==this.state.list.length){
            for(let i=0;i<state.list.length;i++){
                if(state.list[i]!=this.state.list[i]){
                    console.log(state.list[i],this.state.list[i])
                    return true
                }
            }
        }else{
            return true
        }
        return false
    }
    componentWillReceiveProps(props){
        this.initdata(props.sel)
    }
    componentDidMount(){
        this.initdata(this.props.sel)
    }
    render(){
        return(
            <Fragment>
                <ul className='main-ul'>
                    {this.state.list.map((item,index)=>{
                        return(<li key={index}>{item}</li>)
                    })}
                </ul>
            </Fragment>
        )
    }
}
export default Main