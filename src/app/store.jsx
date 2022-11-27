const { configureStore } = require("@reduxjs/toolkit");
import authReducer from "../features/authSlice"
import newReducer from "../features/authSlice"

const store = configureStore({
    reducer:{
        auth: authReducer,
        news: newReducer
    }
})
export default store