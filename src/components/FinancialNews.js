import React from "react";

function FinancialNews({ fin }) {
  return (
    <tr>
      <td>{fin.date}</td>
      <td>{fin.description}</td>
      <td>{fin.category}</td>
      <td>{fin.amount}</td>
    </tr>
  );
}

export default FinancialNews;