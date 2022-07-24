import { configureStore} from '@reduxjs/toolkit'
//pluging in the slice
import dataReducer from './features/dataSlice'
// import modeReducer from './features/modeSlice'
import {logger} from './features/middleware'

export const store = configureStore({
    reducer: {
  //plugging in the slice
  data: dataReducer,   
//   mode: modeReducer   
    },
    middleware: [logger]
});