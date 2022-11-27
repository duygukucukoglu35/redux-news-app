const initialState={
    newsList:[],
    loading: false,
   error:false,
}
const newsSlice=createSlice({
    name:"news",
    initialState,
    redcers:{
        clearNewsList:(state)=>{
            state.newsList=[]
        }
    }
})
export const {clearNewsList}=newsSlice.actions
export default newsSlice.reducer
