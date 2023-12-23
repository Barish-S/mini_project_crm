import { createSlice } from '@reduxjs/toolkit'

export const apiSlice = createSlice({
    name: 'api',
    initialState: {

        loggedStatus: {
            user: "Admin",
            data: [],
            status: ""
        }

    },


    reducers: {
        setLoggedData: (state, action) => {
            state.loggedStatus.data = action.payload
        },
        setLoggedStatus: (state, action) => {
            state.loggedStatus.status = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { setLoggedStatus, setLoggedData } = apiSlice.actions

export default apiSlice.reducer 