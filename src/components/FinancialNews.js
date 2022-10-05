import React from "react";

function FinancialNews({ fin }) {
  return (
    <tr>
      <td>{fin.date}</td>
      <td>{fin.description}</td>
      <td>{fin.category}</td>
      <td>{fin.strength}</td>
    </tr>
  );
}

export default FinancialNews;