import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 1;
const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: (users, action) => {
      users.push({
        id: lastId++,
        name: action.payload.name,
      });
    },
  },
});

export default slice.reducer;
export const { userAdded } = slice.actions;

// export const getBugsByUser = createSelector(
//     state => state.entities.users,
//     state => state.entities.bugs
//     (users,bugs) => users.filter(user => user.name)
// )
