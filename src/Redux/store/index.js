import { configureStore } from "@reduxjs/toolkit";
import AddSlice from "../Features/addSlice";

export default configureStore({
  reducer: {
    tasks: AddSlice,
  },
});
