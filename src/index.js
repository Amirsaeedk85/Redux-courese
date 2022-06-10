import configureStore from "./store/configureStore";
// import {
//   bugAdded,
//   bugResolved,
//   bugAssigned,
//   getUnresolvedBugs,
//   getBugsByUserId,
// } from "./store/bugs";
// import { projectAdded } from "./store/projects";
// import { userAdded } from "./store/users";

const store = configureStore();

store.dispatch((dispatch, getState) => {
  dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
  console.log(getState());
});

// store.dispatch(bugAdded({ description: "Bug1" }));

// store.dispatch(bugAdded({ description: "Bug2" }));
// store.dispatch(bugAdded({ description: "Bug3" }));
// store.dispatch(bugResolved({ id: 1 }));

// store.dispatch(projectAdded({ name: "project 1" }));

// store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));
// store.dispatch(userAdded({ name: "User 3" }));
// store.dispatch(userAdded({ name: "User 4" }));

// store.dispatch(bugAssigned({ bugId: 1, userId: 3 }));
// store.dispatch(bugAssigned({ bugId: 2, userId: 2 }));

// const bug = getBugsByUserId(2)(store.getState());
// console.log(bug);
