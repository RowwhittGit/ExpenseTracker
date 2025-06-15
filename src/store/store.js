import { create } from "zustand";

const useStore = create((set) => ({
  expenses: [
    {id: 1, name: "Movie", amount: 1000},
    {id: 2, name: "Grocery", amount: 500},
    {id: 3, name: "Jhol", amount: 15000}
  ], 
  total: 0,
  //adding a new expense
  addExpense: (name, amount) => set((state) => ({
    ...state,
    expenses: [...state.expenses, { id: Date.now(), name, amount}],
    total: state.total + amount,
  })),

  //Editing an expense
  editExpense: (id, name, amount) => set((state) => {
    const updatedExpenses = state.expenses.map((expense) => expense.id === id ? {...expense, name, amount} : expense);
    const updatedTotal= updatedExpenses.reduce((acc, currValue) => {
      acc = acc + currValue
      return acc;
    })
  }),

  //Deleting an expense
  deleteExpense: (id) => 
    set((state) => {
      const updatedExpenses = state.expenses.filter(
        (expense) => expense.id !== id
      );

    return {...state, expenses: updatedExpenses }

    } )
}));