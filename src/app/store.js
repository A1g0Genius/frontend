import { configureStore } from "@reduxjs/toolkit";
import timeZoneReducer from '../features/Timer/timeZoneSlice'
import themeReducer from '../features/Theme/themeSlice'

export const store = configureStore({
    reducer: {
        zones: timeZoneReducer,
        theme: themeReducer
    }
})