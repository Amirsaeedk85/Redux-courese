import configureStore from "./store/configureStore";
import { loadbugs } from "./store/bugs";

const store = configureStore();

store.dispatch(loadbugs());
