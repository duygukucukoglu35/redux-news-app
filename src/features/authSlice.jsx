import { createSlice } from "@reduxjs/toolkit"


const initialState={
    user: null
}
//slice=> redux gibi ayrı ayrı klasör kurma
//action,type,reducer bu slice(dilim) içinde tanımla
//slice içerisine 3 method alır
//name:type | reducers:reducer | initialState:yukarıdaki tanımlanan stateden.
//action={type,payload} : type=name olduğundan type yazmaya gerek yok.(case ismi)
//return olmadığı için state.user=null yazarsın
//action.type=reducer keyi 
const authSlice=createSlice({
    name: "auth",
    initialState,
    reducers:{
        setUser:(state, {payload})=>{
            state.user=payload;
        },
        clearUser:(state)=>{
            state.user=null;
        }

    }
})
//Redux Toolkit action otomatik veriyor, .actions
//hangi fn için istersen desc ederek export et=> .actions
export const{setUser,clearUser}=authSlice.actions

//Reducers için export etme=> .reducer
export default authSlice.reducer