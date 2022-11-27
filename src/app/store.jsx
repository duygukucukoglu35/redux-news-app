const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        auth: authReducer,
        news: newReducer
    }
})
export default store