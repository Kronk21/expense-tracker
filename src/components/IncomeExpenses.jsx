import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const filterPartition = function (array, conditionCallback) {
        let pass = [];
        let fail = [];

        array.forEach(
            (value) => (conditionCallback(value) ? pass : fail).push(value)
            // conditionCallback(value) ? pass.push(value) : fail.push(value)
        );

        return [pass, fail];
    };

    let [income, expense] = filterPartition(
        transactions.map((tr) => tr.amount),
        (value) => value > 0
    );
    income = income.reduce((prev, curr) => (prev += curr), 0).toFixed(2);
    expense = expense.reduce((prev, curr) => (prev -= curr), 0).toFixed(2);

    // const income = transactions
    //     .map((t) => t.amount)
    //     .filter((a) => !(a < 0))
    //     .reduce((prev, curr) => (prev += curr), 0)
    //     .toFixed(2);

    // const expense = transactions
    //     .map((t) => t.amount)
    //     .filter((a) => a < 0)
    //     .reduce((prev, curr) => (prev += curr), 0)
    //     .toFixed(2);

    return (
        <div>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">+${income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="money minus">-${expense}</p>
                </div>
            </div>
        </div>
    );
};
