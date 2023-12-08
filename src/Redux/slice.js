import { createSlice } from "@reduxjs/toolkit";

export const fontSlice = createSlice({
  name: "fontFeatures",
  initialState: {
    fontFeaturesObject: {
      titleColor: "white",
      textColor: "white",
      fontSize: 10,
      bold: false,
      italic: false,
      underline: false,
    },
  },
  reducers: {
    changeTitleColor: (state, action) => {
      const newObject = { ...state.fontFeaturesObject };
      newObject.titleColor = action.payload;
      state.fontFeaturesObject = { ...newObject };
    },
    changeTextColor: (state, action) => {
      const newObject = { ...state.fontFeaturesObject };
      newObject.textColor = action.payload;
      state.fontFeaturesObject = { ...newObject };
    },
  },
});

export const { changeTitleColor, changeTextColor } = fontSlice.actions;
export default fontSlice.reducer;

/* 
export const fontSlice = createSlice({
  name: "fontFeatures",
  initialState: {
    fontFeaturesList: ["white", 10, false, false, false],
    ////////////////// color  ,size,bold, italic, underline
  },
  reducers: {
    addTodo: (state, action) => {
      state.fontFeaturesList[0] = action.payload;
    },
  },
}); */
