import { createSlice } from '@reduxjs/toolkit';

const timeZoneSlice = createSlice({
    name: 'timeZone',
    initialState: {
        currentDate: new Date(),
        globalTime: 0,
        timeZonesList: [
            { name: 'UTC', offset: 0, },
            { name: 'IST', offset: 5.5, },
        ],
    },
    reducers: {
        addTimeZone: (state, action) => {
            let check = true;
            for (let i = 0; i < state.timeZonesList.length; i++) {
                if (state.timeZonesList[i].name === action.payload.name) {
                    check = false;
                    break;
                }
            }
            if (check) state.timeZonesList.push(action.payload);
        },
        removeTimeZone: (state, action) => {
            state.timeZonesList = state.timeZonesList.filter((timeZone) => timeZone.name !== action.payload.name);
        },
        reorderTimeZones: (state, action) => {
            const { startIndex, endIndex } = action.payload;
            const [removed] = state.timeZonesList.splice(startIndex, 1);
            state.timeZonesList.splice(endIndex, 0, removed);
        },
        updateTimeZone: (state, action) => {
            // console.log(action.payload.newTime)
            state.globalTime = action.payload.newTime
            // console.log(state.globalTime)
        },
        updateDate: (state, action) => {
            console.log(action.payload)
            state.currentDate = action.payload
        }
    },
});

export const { addTimeZone, removeTimeZone, reorderTimeZones, updateTimeZone, updateDate } = timeZoneSlice.actions;


export const getGlobalTime = (state) => state.zones.globalTime
export const getTimeZones = (state) => state.zones.timeZonesList
export const getDate = (state) => state.zones.currentDate

export default timeZoneSlice.reducer;
