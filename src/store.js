import { configureStore} from '@reduxjs/toolkit'
//pluging in the slice
// import dataReducer from './features/dataSlice'
import modeReducer from './features/modeSlice'

export const store = configureStore({
    reducer: {
  //plugging in the slice
//   data: dataReducer,   
  mode: modeReducer   
    }
});