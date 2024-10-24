import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
// function moneyFormatter(num) {
//   let p = num.toFixed(2);
//   return (
//     'Rs'' + (p[0].split('')[0]=== '-' ? '-' : '') +
//     p[0]
//       .reduce(function (acc, num, i, orig) {
//         return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
//       }, '') +
//     '.' +
//     p[1]
//   );
// }

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Your Balance</h4>
    <h2>Rs {total}</h2>
    </>
  )
}