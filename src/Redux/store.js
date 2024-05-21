// // store.js
// import { createStore } from 'redux';
// import userIdReducer from './reducers';

// const store = createStore(userIdReducer);

// export default store;
import { createStore } from 'redux';
import rootReducer from './reducers'; // Adjust the path according to your project structure

const store = createStore(rootReducer);

export default store;
