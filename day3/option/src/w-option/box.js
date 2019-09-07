import React,{Fragment,Component} from 'react'
import Nav from './nav'
import Main from './main'

class Box extends Component{
    constructor(){
        super()
        this.state={
            sel:'恐怖'
        }
    }
    chagesel=(initsel)=>{
        this.setState({sel:initsel})
    }
    render(){
        return(
            <Fragment>
                <Nav chagesel={this.chagesel} sel={this.state.sel}></Nav>
                <Main sel={this.state.sel}></Main>
            </Fragment>
        )
    }
}
export default Box