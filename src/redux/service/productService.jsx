import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

// eslint-disable-next-line react-refresh/only-export-components
export const getAll = createAsyncThunk(
    'products/getAll',
    async () => {
        let res = await axios.get("http://localhost:3000/products");
        return res.data;
    }
)

// eslint-disable-next-line react-refresh/only-export-components
export const add = createAsyncThunk(
    'products/add',
    async (newProduct) => {
        let res = await axios.post("http://localhost:3000/products", newProduct);
        return res.data
    }
)

// eslint-disable-next-line react-refresh/only-export-components
export const updateForm = createAsyncThunk(
    'products/editForm',
    async (id) => {
        let res = await axios.get("http://localhost:3000/products/" + id);
        return res.data
    }
)

export const Update = createAsyncThunk(
    'products/edit',
    async (productEdit) => {
        let res = await axios.put("http://localhost:3000/products/" + productEdit.id, productEdit)
        return res.data
    }
)

export const Delete = createAsyncThunk(
    'products/delete',
    async (id) => {
        await axios.delete("http://localhost:3000/products/" + id)
        return id
    }
)