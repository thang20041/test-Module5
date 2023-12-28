import {createSlice} from "@reduxjs/toolkit";
import {add, Delete, getAll, Update, updateForm} from "../service/productService.jsx";

const initialState = {
    list: [],
    productEdit:{

    },
    listSearch:[]
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: builder => {
        builder.addCase(getAll.fulfilled, (state, {payload}) => {
            state.list = payload;
        })
        builder.addCase(add.fulfilled, (state, {payload}) => {
            console.log(payload)
            state.list.push(payload);
        })
        builder.addCase(updateForm.fulfilled, (state, {payload}) => {
            state.productEdit = payload
        })
        builder.addCase(Update.fulfilled,(state,{payload})=>{
            for (let i = 0; i < state.list.length; i++) {
                if (state.list[i].id===payload.id){
                    state.list[i] = payload
                }
            }
        })
        builder.addCase(Delete.fulfilled,(state,{payload})=>{
            for (let i = 0; i < state.list.length; i++) {
                if (state.list[i].id===payload){
                    state.list.splice(i,1)
                }
            }
        })

    }
});
export default productSlice.reducer;