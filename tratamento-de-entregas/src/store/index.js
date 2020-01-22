import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

function reducer() {};

// const middleware = ApplyMiddleware(thunk, logger())
const store = createStore(reducer);


export default store;