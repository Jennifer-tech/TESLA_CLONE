import { createSlice } from "@reduxjs/toolkit";
// import carReducer from "../features/car/carSlice"

const initialState = {
    cars: [ "Model S", "Model 3", "Model X", "Model Y", "Solar Roof", "Solar Panels" ]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer