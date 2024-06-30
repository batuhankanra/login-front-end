import {createSlice} from '@reduxjs/toolkit'
import {jwtDecode} from "jwt-decode"


const initialState = {
    user:null,
    token:localStorage.getItem('loginToken') || null

}


const auth=createSlice({
    name:"auth",
    initialState,
    reducers:{
       
        _setToken:(state,action)=>{
            state.token=action.payload
            const decoded=jwtDecode(action.payload)
            state.user=decoded
        },
        _loadUser:(state)=> {
            const token = localStorage.getItem('loginToken')
            if(token){
                const decoded=jwtDecode(token)
                state.token=token
                state.user=decoded
            }
        },  

        _logout:(state)=>{
            state.user=null
            state.token=null
            localStorage.removeItem('loginToken')
        }
    }

})
export const {_logout,_setToken,_loadUser}=auth.actions
export default auth.reducer