import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

let lastid = 0;

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
    },

    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastid,
        description: action.payload.description,
        resolved: false,
      });
    },

    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },

    bugAssigned: (bugs, action) => {
      const index = bugs.list.findIndex(
        (bug) => bug.id === action.payload.bugId
      );
      bugs.list[index].userId = action.payload.userId;
    },
  },
});

export const { bugAdded, bugResolved, bugAssigned, bugsReceived } =
  slice.actions;
export default slice.reducer;

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  (bugs, projects) => bugs.list.filter((bug) => !bug.resolved)
);

export const getBugsByUserId = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.list.filter((bug) => bug.userId === userId)
  );

const url = "/bugs";

export const loadbugs = () =>
  apiCallBegan({
    url,
    onSuccess: bugsReceived.type,
  });
