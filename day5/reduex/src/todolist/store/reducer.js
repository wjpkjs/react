import State from './state'
import actiontype from './action-type'

export default (preState=State,action)=>{
    let newdata=JSON.parse(JSON.stringify(preState))
    let {type,params}=action
    switch(type){
        case actiontype.ADD_LIST:
            newdata.list.push({mag:params,sel:false})
            break;
        case actiontype.SEL_LIST:
            newdata.list.splice(params,1)
            break;
        case actiontype.CHAGES_LIST:
            {
                const newsel=!newdata.list[params].sel
                newdata.list[params].sel=newsel
            }
            break;
        default:
            break;
    }
    return newdata
}