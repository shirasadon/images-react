import {LOAD_IMAGES_REQUEST , LOAD_IMAGES_SUCCESS,LOAD_IMAGES_FAILURE}from "../imagesTypes"


const initialState = {
  loading: false,
  error: null,
  data: [],
  views:Number
};


export const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IMAGES_REQUEST:
      return { ...state, loading: true, error: null };
    case LOAD_IMAGES_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case LOAD_IMAGES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

