import actiontype from './action-type'
import Store from './store'

export default {
    addlist(params){
        let action={
            type:actiontype.ADD_LIST,
            params:params
        }
        Store.dispatch(action)
    },
    dellist(params){
        let action={
            type:actiontype.SEL_LIST,
            params:params
        }
        Store.dispatch(action)
    },
    chages(params){
        let action={
            type:actiontype.CHAGES_LIST,
            params:params
        }
        Store.dispatch(action)
    }
}