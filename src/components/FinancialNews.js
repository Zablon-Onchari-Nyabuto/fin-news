import React from "react";

function FinancialNews({ trans }) {
  return (
    <tr>
      <td>{trans.date}</td>
      <td>{trans.description}</td>
      <td>{trans.category}</td>
      <td>{trans.amount}</td>
    </tr>
  );
}

export default FinancialNews;