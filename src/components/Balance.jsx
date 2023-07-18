import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    // Get only the amounts
    const amounts = transactions.map((tr) => tr.amount);
    // Calculate the sum of all the amounts
    const balance = amounts
        .reduce((prev, curr) => (prev += curr), 0)
        .toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${balance}</h1>
        </>
    );
};
