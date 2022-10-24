import { configureStore } from '@reduxjs/toolkit'
import { loadingScreenSlice } from './feature/loadingscreen'



export default configureStore({
    reducer: {
        loadingScreen: loadingScreenSlice.reducer,
    }
})