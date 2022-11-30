import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit" 
import axios from "axios"

const initialState = {
    newsList: [],
    loading: false,
    error: false,
}

// middleware kullanmak için apiden veriler burada çekilmeli
const getNews = createAsyncThunk("getNews", async({rejectWithValue})=> {
    const API_KEY = "7682bb4d403a4557816f60660216f6f2"
    const url = `https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=${API_KEY}`
    try {
        const {data} = await axios(url)
        return data.articles
    } catch (error) {
        console.log(error)
        //rejectWithValue:error durumunda hataları ekrana basan method
        return rejectWithValue("Something went wrong")
    }
})
//dışarı kaynaklı verilerde extraReducer kullanır.
// extraReducerin 3 tane builder methodu: 
// 1.) pending : project startırında kullanılır.
// 2.) fulfilled: success durumunda kullanılır.
// 3. ) rejected: fail durumunda kullanılır. 
// bu methodlar addCase ile eklenir

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        clearNewsList: (state) =>{
            state.newsList = []
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getNews.pending, (state) => {
            state.loading = true;
        })
        .addCase(getNews.fulfilled, (state, {payload}) => {
            state.loading = false; 
            state.newsList = payload
        })
        .addCase(getNews.rejected, (state,{payload}) => {
            state.loading=false;
            state.error=payload;

        })
    }
})

export const {clearNewsList} = newsSlice.actions
export default newsSlice.reducer