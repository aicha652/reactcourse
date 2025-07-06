import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import axios from "axios";


export const fetchWeather = createAsyncThunk("weatherApi/fetchWeather", async() => {
    console.log("calling fetch weather")
    const response = await axios
    .get("https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=29f7d99a767467ab7d8ccae41490655e",
             //{
             // cancelToken: new axios.CancelToken((c) => {
             //   cancelAxios = c
             // })
             //}
            )
    
    // handle success
     console.log(response.data)
     const responseTemp = Math.round(response.data.main.temp - 272.15)
     const min = Math.round(response.data.main.temp_min - 272.15)
     const max = Math.round(response.data.main.temp_max - 272.15)
     const description = response.data.weather[0].description
     const responseIcon = response.data.weather[0].icon

     console.log(response)
     //setTemp({
     //         number: responseTemp,
     //         description: description,
     //         min: min,
     //         max: max,
     //         icon: responseIcon
     //       })

     console.log(min, max, description)
     console.log(response.data.main.temp - 272.15)

})
const weatherApiSlice = createSlice({
    name: "weatherApi",

    initialState: {
        result: "empty",
        weather: {},
        isLoading: false
    },
    reducers:{
        changeResult: (state, action) =>{
            state.result = "changed"
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchWeather.pending, (state, action) => {
            console.log("######")
            console.log(state, action)
            state.isLoading = true
        }).addCase(fetchWeather.fulfilled, (state, action) =>{
            state.isLoading = false
        }).addCase(fetchWeather.rejected, (state, action) => {
            state.isLoading = false
        })
    }
})

export const { changeResult } = weatherApiSlice.actions;
export default weatherApiSlice.reducer