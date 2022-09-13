import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

//instantiate global state object
const StoreContext = createContext(); //running createContext() creates a new Context object
const { Provider } = StoreContext; //extract the Provider component from the Context object
//Every Context object comes with two components, a Provider and Consumer. The Provider is a special type of React component that we wrap our application in so it can make the state data that's passed into it as a prop available to all other components. The Consumer is our means of grabbing and using the data that the Provider holds for us.

const StoreProvider = ({ value = [], ...props }) => {
  //instantiate initial global state
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });
  // use this to confirm it works!
  console.log(state);
  //state is the most up-to-date version of our global state object.
  //dispatch is the method we execute to update our state.
  //After the useProductReducer() completes and provides us with the new state and function to update state (e.g., dispatch), we then return the StoreContext's <Provider> component with our state object and dispatch the function provided as data for the value prop.
  return <Provider value={[state, dispatch]} {...props} />;
};


const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };