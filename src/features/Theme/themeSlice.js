import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    themeState: 'dark'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeMode: (state, payload) => {
            if (state.themeState === 'light') state.themeState = "dark"
            else state.themeState = "light"
        }
    }
})

export const { changeMode } = themeSlice.actions

export default themeSlice.reducer