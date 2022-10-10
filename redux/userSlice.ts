import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    uid:'',
    name:'',
    email:''
}


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

    }
})


export default userSlice.reducer