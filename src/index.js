import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

store.dispatch(projectAdded({ name: "project 1" }));

console.log(store.getState());

store.dispatch(actions.bugAdded({ description: "Bug1" }));
store.dispatch(actions.bugAdded({ description: "Bug2" }));
store.dispatch(actions.bugAdded({ description: "Bug3" }));
store.dispatch(actions.bugResolved({ id: 1 }));
