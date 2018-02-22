import selectExpenses from '../selectors/expenses';

// Get total of visible expenses
export default (expenses) => {
  if (expenses.length > 0) {
    var amounts = expenses.map((expense) => expense.amount);
    return amounts.reduce((total, amount) => total + amount);
  }
  else {
    return 0;
  }
}