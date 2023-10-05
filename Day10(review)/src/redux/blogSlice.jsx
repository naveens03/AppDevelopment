import { createSlice } from "@reduxjs/toolkit";

export const BlogSlice = createSlice({
  name: "blogdata",
  initialState: {
    blogdata: null,
  },
  reducers: {
    postblog: (state,action) => {
      state.blogdata = action.payload;
    },
  },
});

export const { postblog } = BlogSlice.actions;

export const selectBlog = (state) => state.blogdata.blogdata;

export default BlogSlice.reducer;