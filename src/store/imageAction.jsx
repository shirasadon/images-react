import {LOAD_IMAGES_REQUEST , LOAD_IMAGES_SUCCESS,LOAD_IMAGES_FAILURE}from "./imagesTypes"
import {API_BASE_URL} from "../config";

  export const loadImages = (category) => async (dispatch) => {
    dispatch({ type: LOAD_IMAGES_REQUEST });
  
    try {
      const response = await fetch(`${API_BASE_URL}/photos?category=${category}`);
      const data = await response.json();
  
      dispatch({ type: LOAD_IMAGES_SUCCESS, payload: data.hits });
    } catch (error) {
      dispatch({ type: LOAD_IMAGES_FAILURE, payload: error.message });
    }
  };
  
 