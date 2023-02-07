import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: "ru",
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        switchLanguage(state) {
            state.language = state.language === 'ru' ? 'en' : 'ru';
        },
    }
})

export const { switchLanguage } = languageSlice.actions;

export default languageSlice.reducer;