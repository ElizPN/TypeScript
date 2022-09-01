// import { getBudgetAsync } from './api';

function getBudgetAsync() {
  return {
    shopping: 150,
    food: 210,
    utilities: 100,
  };
}

interface Budget {
  [category: string]: number;
}

async function getBudget() {
  const result: Budget = await getBudgetAsync();
  console.log(result);
}

getBudget();
