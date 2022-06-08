import configureStore from "./store/configureStore";
import { bugAdded, bugResolved, getUnResolvedBugs } from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

store.dispatch(projectAdded({ name: "project 1" }));

store.dispatch(bugAdded({ description: "Bug1" }));
store.dispatch(bugAdded({ description: "Bug2" }));
store.dispatch(bugAdded({ description: "Bug3" }));
store.dispatch(bugResolved({ id: 1 }));

const x = getUnResolvedBugs(store.getState());
const y = getUnResolvedBugs(store.getState());
console.log(x, x === y);
