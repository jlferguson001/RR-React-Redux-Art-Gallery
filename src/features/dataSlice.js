import { createSlice} from '@reduxjs/toolkit'

// primary reason for this instance to store API data
//to do this declare an initalState object with properties of objectId (to drive API results)
//and apiData (to store the acutal data from API)

const initialState = {
  //https://collectionapi.metmuseum.org/public/collection/v1/objects/[insert an object id here]

  objectId: 10245,
  apiData: {}
};

//reducers needed? Setting API data to state,
//incrementing the ID by one
//decrementing the ID by one
//entering a custom ID
//Re-setting state back to initial values

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      return { ...state, apiData: action.payload };
    },
    clearData: () => {
      return initialState;
    },
    inputId: (state, action) => {
      return { ...state, objectId: action.payload };
    },
    incrementId: (state) => {
      return { ...state, objectId: state.objectId + 1 };
    },
    decrementId: (state) => {
      return { ...state, objectId: state.objectId - 1 };
    },
  },
});

export const { setData, clearData, incrementId, decrementId, inputId } =
  dataSlice.actions;

export const fetchData = () => {
  const fetchDataThunk = async (dispatch, getState) => {
    let state = getState();
    const response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`
    );
    const rData = await response.json();
    dispatch(setData(rData));
  };
  return fetchDataThunk;
};

export default dataSlice.reducer;
