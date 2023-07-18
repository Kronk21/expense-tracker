import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
    transactions: [
        // { id: 1, text: "Flower", amount: -20 },
        // { id: 2, text: "Salary", amount: 300 },
        // { id: 3, text: "Book", amount: -10 },
        // { id: 4, text: "Camera", amount: 150 },
    ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Context provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions calling to the reducer
    const deleteTransaction = function (id) {
        dispatch({ type: "DELETE_TRANSACTION", payload: id });
    };

    const addTransaction = function (data) {
        dispatch({ type: "ADD_TRANSACTION", payload: data });
    };

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                deleteTransaction: deleteTransaction,
                addTransaction: addTransaction,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
