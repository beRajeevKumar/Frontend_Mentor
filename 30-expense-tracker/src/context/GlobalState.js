import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [
    {id: 88}
  ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component

//why we pass children prop here
//The children prop allows the provider to wrap its content with context data (state) and functions (dispatch),
// ensuring that all descendant components have access to both without the need for prop drilling.

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}

// Meaning of state.transaction
// state: Refers to the current state object managed by the provider (TransactionProvider).
// transaction: Refers specifically to the transaction property within state.
// In the example provided:

// state.transaction refers to the transaction object stored in the state.
// It includes properties such as id, description, and amount, which represent details of a specific transaction.