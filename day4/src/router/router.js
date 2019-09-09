import React,{Component} from 'react'
import {HashRouter,NavLink,Route,Switch,Redirect} from 'react-router-dom'
import './router.css'

function Index(){
    return(
        <div>
            这里是首页
        </div>
    )
}

function Sort(){
    return(
        <div>
            这里是分类
        </div>
    )
}

function Ke(){
    return(
        <div>
            这里是科幻
        </div>
    )
}

function Ai(){
    return(
        <div>
            这里是爱情
        </div>
    )
}

class Wrouter extends Component{
    render(){
        return(
            <HashRouter>
                <NavLink to='/index' activeClassName='red'>首页</NavLink>
                <NavLink to='/sort' activeClassName='red'>分类</NavLink>
                <Switch>
                    <Redirect exact from='/' to='/index'></Redirect>
                    <Route exact path='/index' component={Index}></Route>
                    <Route path='/sort' render={(props)=>{
                        return(
                            <div>
                                <div>分类</div>
                                <NavLink to='/sort/ke' activeClassName='bule'>科幻</NavLink>
                                <NavLink to='/sort/ai' activeClassName='bule'>爱情</NavLink>
                                <Switch>
                                    <Redirect exact from='/sort' to='/sort/ke'></Redirect>
                                    <Route path='/sort/ke' component={Ke}></Route>
                                    <Route path='/sort/ai' component={Ai}></Route>
                                </Switch>
                            </div>
                        )
                    }}/><Route component={Sort}/>
                </Switch>
            </HashRouter>
        )
    }
}
export default Wrouter