import { createSlice,  createAsyncThunk   } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers= createAsyncThunk("user/fetchUsers", async()=>{
    return axios.get("http://localhost:8081/reception/checkin")
        .then(res=>res.data);

});

export const addUser= createAsyncThunk("user/addUser", async(values)=>{
    return fetch("http://localhost:8081/reception/checkin", { method:"POST",
        headers:{Accept:"application/json", "Content-Type":"application/json"} ,
        body: JSON.stringify({
            passportNumber: values.passportNumber,
            name: values.name,
            checkInDate: values.checkInDate,
            checkOutDate: values.checkOutDate,
            campsiteFees: values.campsiteFees,
            carParkFees: values.carParkFees,
            equipmentRented: values.equipmentRented,
            additionalServices: values.additionalServices
        })

    }).then((res)=> res.json());

});


const userSlice= createSlice({
    name:"user",
    initialState:{
        loading:false,
        user:[],
        error:'',
        isSuccess:''
    },

    /// reducer call here
    extraReducers:builder=>{
        builder.addCase(fetchUsers.pending, state=>{
            state.loading= true
        });

        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            state.loading= false
            state.user= action.payload
            state.error=''
        });
        builder.addCase(fetchUsers.rejected,(state, action)=>{
            state.loading= false
            state.user=[]
            state.error= action.error.message
        });

        // add user
        builder.addCase(addUser.pending, state=>{
            state.loading= true
            state.error= ''
        });
        builder.addCase(addUser.fulfilled, (state, action)=>{
            state.loading=false
            state.user=[]
            state.isSuccess=action.payload
        });

        builder.addCase(addUser.rejected, (state, action)=>{
            state.loading= false
            state.user=[]
            state.error= action.error.message

        });



    }

    /// end reduce

})


export default userSlice.reducer;