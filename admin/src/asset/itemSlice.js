import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import inventoryService from "../api/InvApi";
import { toast } from "react-toastify";

const initialState = {
    item: null,
    items: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    totalStoreValue: 0,
    outOfStock: 0,
    category: [],
};

// Create New item
export const createNew = createAsyncThunk(
    "Items/create",
    async (itemData, thunkAPI) => {
        try {
            return await inventoryService.createNew(itemData);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get all items
export const getItems = createAsyncThunk(
    "items/getAll",
    async (_, thunkAPI) => {
        try {
            return await inventoryService.getItems();
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Delete a item
export const deleteItems = createAsyncThunk(
    "items/delete",
    async (id, thunkAPI) => {
        try {
            return await inventoryService.deleteItems(id);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get a item
export const getItem = createAsyncThunk(
    "items/getitem",
    async (id, thunkAPI) => {
        try {
            return await inventoryService.getItem(id);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);
// Update item
export const updateInv = createAsyncThunk(
    "items/updateitem",
    async ({ id, itemData }, thunkAPI) => {
        try {
            return await inventoryService.updateInv(id, itemData);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        CALC_STORE_VALUE(state, action) {
            const items = action.payload;
            const array = [];
            items.map((item) => {
                const { price, quantity } = item;
                const itemValue = price * quantity;
                return array.push(itemValue);
            });
            const totalValue = array.reduce((a, b) => {
                return a + b;
            }, 0);
            state.totalStoreValue = totalValue;
        },
        CALC_OUTOFSTOCK(state, action) {
            const items = action.payload;
            const array = [];
            items.map((item) => {
                const { quantity } = item;

                return array.push(quantity);
            });
            let count = 0;
            array.forEach((number) => {
                if (number === 0 || number === "0") {
                    count += 1;
                }
            });
            state.outOfStock = count;
        },
        CALC_CATEGORY(state, action) {
            const items = action.payload;
            const array = [];
            items.map((item) => {
                const { category } = item;

                return array.push(category);
            });
            const uniqueCategory = [...new Set(array)];
            state.category = uniqueCategory;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createNew.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createNew.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                console.log(action.payload);
                state.items.push(action.payload);
                toast.success("item added successfully");
            })
            .addCase(createNew.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload);
            })
            .addCase(getItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                console.log(action.payload);
                state.items = action.payload;
            })
            .addCase(getItems.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload);
            })
            .addCase(deleteItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                toast.success("item deleted successfully");
            })
            .addCase(deleteItems.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload);
            })
            .addCase(getItem.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getItem.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.item = action.payload;
            })
            .addCase(getItem.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload);
            })
            .addCase(updateInv.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateInv.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                toast.success("item updated successfully");
            })
            .addCase(updateInv.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload);
            });
    },
});

export const { CALC_STORE_VALUE, CALC_OUTOFSTOCK, CALC_CATEGORY } =
    itemSlice.actions;

export const selectIsLoading = (state) => state.item.isLoading;
export const selectItem = (state) => state.item.item;
export const selectTotalStoreValue = (state) => state.item.totalStoreValue;
export const selectOutOfStock = (state) => state.item.outOfStock;
export const selectCategory = (state) => state.item.category;

export default itemSlice.reducer;